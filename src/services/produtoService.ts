import { apiRequest, resolverUrlImagem, type Paginacao } from "./api";

/** Item devolvido por `GET /produto/lista`. */
interface ProdutoListaApi {
  idProduto: number;
  codigoOvd?: string | null;
  nomeEcommerce?: string | null;
  nomeAgrupamento?: string | null;
  imagem?: string | null;
  /* `codigoFg` e `referenciaEbs` também vêm na resposta, mas são códigos
     internos: o card da listagem mostra só nome, imagem e código OVD. */
}

/** Valores aceitos pelo parâmetro `tipoOrdenacao`. */
export type TipoOrdenacao = "alfAsc" | "alfDesc" | "dataAsc" | "dataDesc";

export interface ProdutoResumo {
  idProduto: number;
  /** Código OVD — é ele que identifica o produto na rota `/produto/:id`. */
  codigoOvd?: string;
  nome?: string;
  imagemUrl?: string;
}

export interface PaginaProdutos {
  produtos: ProdutoResumo[];
  paginacao: Paginacao;
}

export interface ParametrosListaProdutos {
  /** `idNivelArvore` do nó clicado no mega menu. */
  idNivelArvore?: number;
  /** Nível do nó: 1 = grupo, 2 = subgrupo, 3 = categoria. */
  nivel?: number;
  ordenacao?: TipoOrdenacao;
  /** Página 0-based, como a API espera. */
  pagina?: number;
  idioma?: string;
  signal?: AbortSignal;
}

/** Paginação de reserva quando a resposta vem sem o bloco. */
const PAGINACAO_PADRAO: Paginacao = {
  pagina: 0,
  totalPaginas: 0,
  totalRegistros: 0,
  registrosPorPagina: 15,
  temProxima: false,
  temAnterior: false,
};

const AGRUPAMENTO_GENERICO = "produtos sem agrupamento";

const texto = (valor?: string | null): string | undefined => {
  const limpo = valor?.trim();
  return limpo ? limpo : undefined;
};

/**
 * O mesmo id da árvore vira `grupoId`, `subgrupoId` ou `categoriaId` conforme
 * o nível do nó clicado — a rota aceita os três, um de cada vez.
 */
const parametroDoNivel = (nivel?: number): "grupoId" | "subgrupoId" | "categoriaId" | null => {
  switch (nivel) {
    case 1:
      return "grupoId";
    case 2:
      return "subgrupoId";
    case 3:
      return "categoriaId";
    default:
      return null;
  }
};

const normalizar = (itens: ProdutoListaApi[]): ProdutoResumo[] =>
  itens.map((produto) => {
    const agrupamento = texto(produto.nomeAgrupamento);
    return {
      idProduto: produto.idProduto,
      codigoOvd: texto(produto.codigoOvd),
      nome:
        texto(produto.nomeEcommerce) ??
        (agrupamento && agrupamento.toLowerCase() !== AGRUPAMENTO_GENERICO
          ? agrupamento
          : undefined),
      imagemUrl: resolverUrlImagem(produto.imagem),
    };
  });

/**
 * `GET /produto/lista` — listagem paginada (15 por página) dos produtos de um
 * nó da árvore. Sem `idNivelArvore`/`nivel` a rota devolve o catálogo inteiro.
 */
export const buscarProdutos = async ({
  idNivelArvore,
  nivel,
  ordenacao = "alfAsc",
  pagina = 0,
  idioma = "ptBr",
  signal,
}: ParametrosListaProdutos = {}): Promise<PaginaProdutos> => {
  const parametroNivel = parametroDoNivel(nivel);

  const resposta = await apiRequest<ProdutoListaApi[]>("/produto/lista", {
    method: "GET",
    query: {
      idioma,
      tipoOrdenacao: ordenacao,
      pagina,
      ...(parametroNivel && idNivelArvore ? { [parametroNivel]: idNivelArvore } : {}),
    },
    auth: "apiKey",
    signal,
  });

  return {
    produtos: normalizar(resposta.data ?? []),
    paginacao: resposta.paginacao ?? PAGINACAO_PADRAO,
  };
};
