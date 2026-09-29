import { useEffect, useState } from "react";
import { ApiError, type Paginacao } from "../services/api";
import {
  buscarProdutos,
  type ProdutoResumo,
  type TipoOrdenacao,
} from "../services/produtoService";

interface OpcoesUseListaProdutos {
  idNivelArvore?: number;
  nivel?: number;
  ordenacao?: TipoOrdenacao;
  /** Página 0-based. */
  pagina?: number;
  /**
   * Adia a busca — a página espera o mega menu resolver a categoria da URL
   * antes de consultar, para não pedir o catálogo inteiro e logo em seguida
   * repetir a chamada já filtrada.
   */
  habilitado?: boolean;
}

export interface EstadoListaProdutos {
  produtos: ProdutoResumo[];
  paginacao: Paginacao | null;
  carregando: boolean;
  erro: string | null;
}

interface Resultado {
  chave: string;
  produtos: ProdutoResumo[];
  paginacao: Paginacao | null;
  erro: string | null;
}

/** Busca a página atual da listagem e refaz a chamada a cada mudança de filtro. */
export function useListaProdutos({
  idNivelArvore,
  nivel,
  ordenacao = "alfAsc",
  pagina = 0,
  habilitado = true,
}: OpcoesUseListaProdutos = {}): EstadoListaProdutos {
  const [resultado, setResultado] = useState<Resultado | null>(null);
  // Identifica a combinação de parâmetros em voo: enquanto o resultado em mãos
  // não for dessa chave, a listagem está carregando.
  const chave = `${idNivelArvore ?? ""}|${nivel ?? ""}|${ordenacao}|${pagina}`;

  useEffect(() => {
    if (!habilitado) return;

    const controller = new AbortController();

    buscarProdutos({ idNivelArvore, nivel, ordenacao, pagina, signal: controller.signal })
      .then(({ produtos, paginacao }) => {
        if (controller.signal.aborted) return;
        setResultado({ chave, produtos, paginacao, erro: null });
      })
      .catch((causa: unknown) => {
        if (controller.signal.aborted) return;
        const mensagem =
          causa instanceof ApiError || causa instanceof Error
            ? causa.message
            : "Erro ao carregar os produtos";
        console.warn("[Produtos] não foi possível carregar a listagem:", mensagem);
        setResultado({ chave, produtos: [], paginacao: null, erro: mensagem });
      });

    return () => controller.abort();
  }, [chave, habilitado, idNivelArvore, nivel, ordenacao, pagina]);

  const atual = resultado?.chave === chave ? resultado : null;

  return {
    produtos: atual?.produtos ?? [],
    paginacao: atual?.paginacao ?? null,
    carregando: !atual && habilitado,
    erro: atual?.erro ?? null,
  };
}
