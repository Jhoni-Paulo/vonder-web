import { useEffect, useState } from "react";
import { ApiError } from "../services/api";
import { buscarCategoriasMenu, type CategoriaMenu } from "../services/megaMenuService";

export interface EstadoCategoriasMenu {
  categorias: CategoriaMenu[];
  carregando: boolean;
  erro: string | null;
}

interface Resultado {
  categorias: CategoriaMenu[];
  erro: string | null;
}

/**
 * Categorias de produto do mega menu (`GET /mega-menu`), compartilhadas entre
 * o painel desktop e o submenu mobile. Em erro devolve lista vazia — o menu
 * mantém só o atalho "Ver Tudo em VONDER", em vez de exibir lista desatualizada.
 */
export function useMegaMenuCategorias(idioma = "ptBr"): EstadoCategoriasMenu {
  const [resultado, setResultado] = useState<Resultado | null>(null);

  useEffect(() => {
    let ativo = true;

    buscarCategoriasMenu(idioma)
      .then((categorias) => {
        if (ativo) setResultado({ categorias, erro: null });
      })
      .catch((causa: unknown) => {
        if (!ativo) return;
        const mensagem =
          causa instanceof ApiError || causa instanceof Error
            ? causa.message
            : "Erro ao carregar as categorias";
        console.warn("[MegaMenu] não foi possível carregar as categorias:", mensagem);
        setResultado({ categorias: [], erro: mensagem });
      });

    return () => {
      ativo = false;
    };
  }, [idioma]);

  return {
    categorias: resultado?.categorias ?? [],
    carregando: resultado === null,
    erro: resultado?.erro ?? null,
  };
}
