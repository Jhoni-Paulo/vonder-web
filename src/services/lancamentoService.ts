import { apiRequest, resolverUrlImagem } from "./api";

/** Nó da árvore devolvido nos blocos `grupo`/`subgrupo`/`categoria`. */
interface NivelApi {
  idNivelArvore: number;
  idNivelPai?: number | null;
  valor?: string | null;
}

interface LancamentoApi {
  idProduto: number;
  codigoOvd?: string | null;
  nomeAgrupamento?: string | null;
  nomeEcommerce?: string | null;
  nomeLancamento?: string | null;
  tipo?: string | null;
  imagem?: string | null;
  /** Página do informativo no site da OVD. */
  url?: string | null;
  /* `codigoFg` e `referenciaEbs` também vêm, mas são códigos internos. */
}

interface LancamentosApi {
  grupo?: NivelApi[] | null;
  subgrupo?: NivelApi[] | null;
  categoria?: NivelApi[] | null;
  lancamentos?: LancamentoApi[] | null;
}

export interface NivelLancamento {
  id: number;
  nome: string;
  /** Permite montar a cascata no front, sem depender de nova chamada. */
  idPai?: number;
}

export interface Lancamento {
  idProduto: number;
  titulo: string;
  descricao?: string;
  imagemUrl?: string;
  /** Destino do "Ver mais" (informativo da OVD). */
  url?: string;
  codigoOvd?: string;
}

export interface DadosLancamentos {
  grupos: NivelLancamento[];
  subgrupos: NivelLancamento[];
  categorias: NivelLancamento[];
  lancamentos: Lancamento[];
}

export const LANCAMENTOS_VAZIOS: DadosLancamentos = {
  grupos: [],
  subgrupos: [],
  categorias: [],
  lancamentos: [],
};

export interface ParametrosLancamentos {
  grupo?: number;
  subgrupo?: number;
  categoria?: number;
  idioma?: string;
  signal?: AbortSignal;
}

const AGRUPAMENTO_GENERICO = "produtos sem agrupamento";

const texto = (valor?: string | null): string | undefined => {
  const limpo = valor?.trim();
  return limpo ? limpo : undefined;
};

const agrupamento = (valor?: string | null): string | undefined => {
  const limpo = texto(valor);
  return limpo && limpo.toLowerCase() !== AGRUPAMENTO_GENERICO ? limpo : undefined;
};

/** Destino sem protocolo viraria caminho relativo no browser. */
const linkExterno = (valor?: string | null): string | undefined => {
  const url = texto(valor);
  if (!url) return undefined;
  return /^[a-z][a-z0-9+.-]*:/i.test(url) ? url : `https://${url}`;
};

const niveis = (itens?: NivelApi[] | null): NivelLancamento[] => {
  const vistos = new Set<number>();
  const lista: NivelLancamento[] = [];

  for (const item of itens ?? []) {
    const nome = texto(item.valor);
    if (!nome || vistos.has(item.idNivelArvore)) continue;
    vistos.add(item.idNivelArvore);
    lista.push({ id: item.idNivelArvore, nome, idPai: item.idNivelPai ?? undefined });
  }

  return lista;
};

const normalizarLancamentos = (itens?: LancamentoApi[] | null): Lancamento[] =>
  (itens ?? [])
    .map((item): Lancamento | null => {
      const grupo = agrupamento(item.nomeAgrupamento);
      const titulo = texto(item.nomeLancamento) ?? texto(item.nomeEcommerce) ?? grupo;
      // O card é só título sobre a imagem: sem título não há o que mostrar.
      if (!titulo) return null;

      const alternativo = texto(item.nomeEcommerce) ?? grupo;

      return {
        idProduto: item.idProduto,
        titulo,
        // Não há campo de descrição; a linha de apoio só entra se acrescentar algo.
        descricao: alternativo && alternativo !== titulo ? alternativo : undefined,
        imagemUrl: resolverUrlImagem(item.imagem),
        url: linkExterno(item.url),
        codigoOvd: texto(item.codigoOvd),
      };
    })
    .filter((lancamento): lancamento is Lancamento => lancamento !== null);

/**
 * `GET /lancamentos` — uma única chamada devolve os níveis disponíveis para o
 * filtro **e** os lançamentos do recorte atual.
 *
 * A resposta não traz bloco de paginação nem aceita `pagina`/`tipoOrdenacao`:
 * ordenação e paginação são feitas no front sobre a lista recebida.
 */
export const buscarLancamentos = async ({
  grupo,
  subgrupo,
  categoria,
  idioma = "ptBr",
  signal,
}: ParametrosLancamentos = {}): Promise<DadosLancamentos> => {
  const { data } = await apiRequest<LancamentosApi>("/lancamentos", {
    method: "GET",
    query: {
      idioma,
      ...(grupo ? { grupo } : {}),
      ...(subgrupo ? { subgrupo } : {}),
      ...(categoria ? { categoria } : {}),
    },
    auth: "apiKey",
    signal,
  });

  return {
    grupos: niveis(data?.grupo),
    subgrupos: niveis(data?.subgrupo),
    categorias: niveis(data?.categoria),
    lancamentos: normalizarLancamentos(data?.lancamentos),
  };
};
