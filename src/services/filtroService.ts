import { apiRequest } from "./api";

/** Nó da árvore devolvido pelos blocos `grupos`/`subgrupos`/`categorias`. */
interface NivelFiltroApi {
  nivel?: number | null;
  idNivelArvore: number;
  valor?: string | null;
}

interface FiltroApi {
  totalProdutos?: number | null;
  grupos?: NivelFiltroApi[] | null;
  subgrupos?: NivelFiltroApi[] | null;
  categorias?: NivelFiltroApi[] | null;
  /* A resposta também traz `atributos` (id/nome/valor), mas o mesmo
     `idAtributo` se repete para cada valor — e `GET /produto/lista` ignora o
     parâmetro `atributos`. Enquanto isso não mudar, filtrar por atributo não
     teria efeito na grade, então o bloco não é consumido aqui. */
}

export interface OpcaoFiltro {
  id: number;
  nome: string;
}

export interface FiltrosProduto {
  totalProdutos: number;
  grupos: OpcaoFiltro[];
  subgrupos: OpcaoFiltro[];
  categorias: OpcaoFiltro[];
}

export const FILTROS_VAZIOS: FiltrosProduto = {
  totalProdutos: 0,
  grupos: [],
  subgrupos: [],
  categorias: [],
};

export interface ParametrosFiltro {
  grupoId?: number;
  subgrupoId?: number;
  categoriaId?: number;
  idioma?: string;
}

/** Converte os nós em opções de checkbox, sem repetir id e sem rótulo vazio. */
const opcoes = (niveis?: NivelFiltroApi[] | null): OpcaoFiltro[] => {
  const vistos = new Set<number>();
  const lista: OpcaoFiltro[] = [];

  for (const nivel of niveis ?? []) {
    const nome = nivel.valor?.trim();
    if (!nome || vistos.has(nivel.idNivelArvore)) continue;
    vistos.add(nivel.idNivelArvore);
    lista.push({ id: nivel.idNivelArvore, nome });
  }

  return lista;
};

/**
 * Cache por recorte: navegar entre subgrupos do mesmo grupo repete a consulta
 * do grupo a cada clique (~260 ms) e o conteúdo não muda entre elas. Uma falha
 * limpa a entrada para permitir nova tentativa.
 */
const cache = new Map<string, Promise<FiltrosProduto>>();

/**
 * `GET /produto/filtro` — devolve os níveis disponíveis dentro do recorte
 * informado. Sem `AbortSignal` de propósito: a promise é compartilhada entre
 * consumidores, e o cancelamento de um não pode derrubar a busca dos outros.
 */
export const buscarFiltros = ({
  grupoId,
  subgrupoId,
  categoriaId,
  idioma = "ptBr",
}: ParametrosFiltro = {}): Promise<FiltrosProduto> => {
  const chave = `${idioma}|${grupoId ?? ""}|${subgrupoId ?? ""}|${categoriaId ?? ""}`;
  const emCache = cache.get(chave);
  if (emCache) return emCache;

  const requisicao = apiRequest<FiltroApi>("/produto/filtro", {
    method: "GET",
    query: {
      idioma,
      ...(grupoId ? { grupoId } : {}),
      ...(subgrupoId ? { subgrupoId } : {}),
      ...(categoriaId ? { categoriaId } : {}),
    },
    auth: "apiKey",
  })
    .then(({ data }) => ({
      totalProdutos: data?.totalProdutos ?? 0,
      grupos: opcoes(data?.grupos),
      subgrupos: opcoes(data?.subgrupos),
      categorias: opcoes(data?.categorias),
    }))
    .catch((erro: unknown) => {
      cache.delete(chave);
      throw erro;
    });

  cache.set(chave, requisicao);
  return requisicao;
};
