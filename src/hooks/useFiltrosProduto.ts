import { useEffect, useState } from "react";
import { ApiError } from "../services/api";
import {
  buscarFiltros,
  type FiltrosProduto,
  type OpcaoFiltro,
} from "../services/filtroService";

interface OpcoesUseFiltrosProduto {
  grupoId?: number;
  subgrupoId?: number;
}

export interface EstadoFiltrosProduto {
  /** Subgrupos do grupo selecionado. */
  subgrupos: OpcaoFiltro[];
  /** Categorias do subgrupo selecionado. */
  categorias: OpcaoFiltro[];
  carregando: boolean;
  erro: string | null;
}

interface Resultado {
  chave: string;
  subgrupos: OpcaoFiltro[];
  categorias: OpcaoFiltro[];
  erro: string | null;
}

const VAZIO = { subgrupos: [], categorias: [] };

/**
 * Opções da sidebar para o recorte atual.
 *
 * As opções de cada nível vêm da consulta do **nível de cima**: perguntar pelo
 * recorte já selecionado devolveria só o próprio item (a API restringe todos os
 * blocos), e os irmãos sumiriam da lista — não daria para trocar de subgrupo
 * sem antes desmarcar. Por isso são duas chamadas em paralelo.
 *
 * Sem grupo selecionado nenhuma chamada é feita: `/produto/filtro` sem
 * parâmetro devolve ~1,8 MB em ~5 s. Nesse caso a seção "Grupo" é alimentada
 * pela listagem do mega menu, que já está em cache.
 */
export function useFiltrosProduto({
  grupoId,
  subgrupoId,
}: OpcoesUseFiltrosProduto = {}): EstadoFiltrosProduto {
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const chave = `${grupoId ?? ""}|${subgrupoId ?? ""}`;

  useEffect(() => {
    if (!grupoId) return;

    let ativo = true;

    Promise.all([
      buscarFiltros({ grupoId }),
      subgrupoId
        ? buscarFiltros({ grupoId, subgrupoId })
        : Promise.resolve<FiltrosProduto | null>(null),
    ])
      .then(([doGrupo, doSubgrupo]) => {
        if (!ativo) return;
        setResultado({
          chave,
          subgrupos: doGrupo.subgrupos,
          categorias: doSubgrupo?.categorias ?? [],
          erro: null,
        });
      })
      .catch((causa: unknown) => {
        if (!ativo) return;
        const mensagem =
          causa instanceof ApiError || causa instanceof Error
            ? causa.message
            : "Erro ao carregar os filtros";
        console.warn("[Filtros] não foi possível carregar os filtros:", mensagem);
        setResultado({ chave, ...VAZIO, erro: mensagem });
      });

    return () => {
      ativo = false;
    };
  }, [chave, grupoId, subgrupoId]);

  const atual = resultado?.chave === chave ? resultado : null;

  return {
    // Mantém as opções anteriores enquanto a nova consulta não volta, para a
    // sidebar não piscar a cada clique.
    subgrupos: grupoId ? (atual?.subgrupos ?? resultado?.subgrupos ?? []) : [],
    categorias: subgrupoId ? (atual?.categorias ?? resultado?.categorias ?? []) : [],
    carregando: !!grupoId && !atual,
    erro: atual?.erro ?? null,
  };
}
