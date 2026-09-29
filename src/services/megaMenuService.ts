import { apiRequest } from "./api";

/** Nó de `cms.arvore_nivel` devolvido por `GET /mega-menu`. */
interface NivelArvoreApi {
  idNivelArvore: number;
  idNivelPai?: number | null;
  nivel?: number | null;
  /** Posição dentro do nível — é por ele que a listagem é ordenada. */
  numeroNivel?: number | null;
  valor?: string | null;
  /* `imagem` e `filhos` existem na resposta mas o mega menu não tem onde
     exibi-los: a listagem é de um nível só, em texto. */
  imagem?: string | null;
  filhos?: NivelArvoreApi[] | null;
}

export interface CategoriaMenu {
  id: number;
  nome: string;
  /** 1 = grupo, 2 = subgrupo, 3 = categoria — define o parâmetro da listagem. */
  nivel: number;
}

/**
 * Rótulos internos do e-catálogo que não fazem sentido para o visitante.
 * Se o back passar a filtrar na origem, esta lista pode sumir.
 */
const ROTULOS_INTERNOS = new Set(["sem alocação", "sem alocacao"]);

const normalizar = (niveis: NivelArvoreApi[]): CategoriaMenu[] =>
  [...niveis]
    .sort(
      (a, b) =>
        (a.numeroNivel ?? Number.MAX_SAFE_INTEGER) - (b.numeroNivel ?? Number.MAX_SAFE_INTEGER),
    )
    .map((nivel): CategoriaMenu | null => {
      const nome = nivel.valor?.trim();
      if (!nome || ROTULOS_INTERNOS.has(nome.toLowerCase())) return null;
      return { id: nivel.idNivelArvore, nome, nivel: nivel.nivel ?? 1 };
    })
    .filter((categoria): categoria is CategoriaMenu => categoria !== null);

/**
 * Cache por idioma: o mega menu é montado e desmontado a cada hover no
 * "Nossos Produtos", e o menu mobile usa a mesma lista — sem cache seria uma
 * chamada por abertura. Uma falha limpa a entrada para permitir nova tentativa.
 */
const cache = new Map<string, Promise<CategoriaMenu[]>>();

/** `GET /mega-menu` — níveis 1 da árvore de produtos, já ordenados. */
export const buscarCategoriasMenu = (idioma = "ptBr"): Promise<CategoriaMenu[]> => {
  const emCache = cache.get(idioma);
  if (emCache) return emCache;

  // Sem AbortSignal de propósito: a promise é compartilhada entre consumidores,
  // e o cancelamento de um deles não pode derrubar a busca dos outros.
  const requisicao = apiRequest<NivelArvoreApi[]>("/mega-menu", {
    method: "GET",
    query: { idioma },
    auth: "apiKey",
  })
    .then(({ data }) => normalizar(data ?? []))
    .catch((erro: unknown) => {
      cache.delete(idioma);
      throw erro;
    });

  cache.set(idioma, requisicao);
  return requisicao;
};
