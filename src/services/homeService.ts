import { apiRequest, resolverUrlImagem } from "./api";

/* ------------------------------------------------------------------ *
 * Formato cru devolvido por `GET /home?idioma=ptBr`
 * ------------------------------------------------------------------ */

interface ProdutoResumoApi {
  idProduto: number;
  codigoOvd?: string | null;
  nomeAgrupamento?: string | null;
  nomeEcommerce?: string | null;
}

interface ImagemApi {
  id: number;
  link?: string | null;
  fotoPrincipal?: boolean;
}

interface BannerApi {
  id: number;
  imagemUrl?: string | null;
  redirecionamentoUrl?: string | null;
  descricao?: string | null;
  ordenacao?: number | null;
  idioma?: string | null;
}

interface BlogApi {
  id: number;
  titulo?: string | null;
  descricao?: string | null;
  imagemUrl?: string | null;
  redirecionamentoUrl?: string | null;
  dataPublicacao?: string | null;
  idioma?: string | null;
}

interface DestaqueApi {
  id: number;
  idProduto?: number | null;
  ordenacao?: number | null;
  produto?: ProdutoResumoApi | null;
  imagemPrincipal?: ImagemApi | null;
}

interface LancamentoApi {
  produto?: ProdutoResumoApi | null;
  imagemPrincipal?: ImagemApi | null;
}

interface HomeApi {
  banners?: BannerApi[] | null;
  blogs?: BlogApi[] | null;
  destaques?: DestaqueApi[] | null;
  ultimosLancamentos?: LancamentoApi[] | null;
  /* Não consumidos pelo site: `videosInstitucionais`, `parcerias`,
     `produtoInformativos`, `alerta` (o alerta tem rota própria) e
     `redesSociais` — este último devolve credenciais de app, que não podem
     ser usadas no browser. Ver seção 2.5 do docs/INTEGRACAO-BACKEND.md. */
}

/* ------------------------------------------------------------------ *
 * Formato normalizado consumido pelas seções
 * ------------------------------------------------------------------ */

export interface BannerHome {
  id: number;
  imagemUrl: string;
  descricao: string;
  /** Só preenchido quando o CMS cadastrou destino para o slide. */
  redirecionamentoUrl?: string;
}

export interface PostBlogHome {
  id: number;
  titulo: string;
  descricao?: string;
  imagemUrl: string;
  redirecionamentoUrl?: string;
}

export interface DestaqueHome {
  id: number;
  /** Ausente quando o produto não tem nome de e-commerce nem agrupamento real. */
  nome?: string;
  imagemUrl: string;
  codigoOvd?: string;
}

export interface LancamentoHome {
  id: number;
  titulo: string;
  /** Agrupamento do produto; vira a linha de apoio do card. */
  agrupamento?: string;
  imagemUrl: string;
  codigoOvd?: string;
}

export interface DadosHome {
  banners: BannerHome[];
  blogs: PostBlogHome[];
  destaques: DestaqueHome[];
  lancamentos: LancamentoHome[];
}

export const DADOS_HOME_VAZIOS: DadosHome = {
  banners: [],
  blogs: [],
  destaques: [],
  lancamentos: [],
};

/* ------------------------------------------------------------------ *
 * Normalização
 * ------------------------------------------------------------------ */

/** Rótulo genérico do e-catálogo: não acrescenta informação ao card. */
const AGRUPAMENTO_GENERICO = "produtos sem agrupamento";

const texto = (valor?: string | null): string | undefined => {
  const limpo = valor?.trim();
  return limpo ? limpo : undefined;
};

const agrupamento = (valor?: string | null): string | undefined => {
  const limpo = texto(valor);
  return limpo && limpo.toLowerCase() !== AGRUPAMENTO_GENERICO ? limpo : undefined;
};

/**
 * O CMS aceita destino sem protocolo (`teste.com`), que o browser trataria
 * como caminho relativo. Link interno (`/produto/x`) passa direto.
 */
const linkExterno = (valor?: string | null): string | undefined => {
  const url = texto(valor);
  if (!url) return undefined;
  if (url.startsWith("/")) return url;
  return /^[a-z][a-z0-9+.-]*:/i.test(url) ? url : `https://${url}`;
};

/** Ordena por `ordenacao` (menor primeiro); item sem ordenação vai para o fim. */
const porOrdenacao = (a: { ordenacao?: number | null }, b: { ordenacao?: number | null }): number =>
  (a.ordenacao ?? Number.MAX_SAFE_INTEGER) - (b.ordenacao ?? Number.MAX_SAFE_INTEGER);

const normalizarBanners = (itens: BannerApi[]): BannerHome[] =>
  [...itens]
    .sort(porOrdenacao)
    .map((banner): BannerHome | null => {
      const imagemUrl = resolverUrlImagem(banner.imagemUrl);
      if (!imagemUrl) return null;
      return {
        id: banner.id,
        imagemUrl,
        descricao: texto(banner.descricao) ?? "Banner VONDER",
        redirecionamentoUrl: linkExterno(banner.redirecionamentoUrl),
      };
    })
    .filter((banner): banner is BannerHome => banner !== null);

const normalizarBlogs = (itens: BlogApi[]): PostBlogHome[] =>
  [...itens]
    // Mais recentes primeiro (o card de blog não exibe a data em si).
    .sort((a, b) => (b.dataPublicacao ?? "").localeCompare(a.dataPublicacao ?? ""))
    .map((post): PostBlogHome | null => {
      const imagemUrl = resolverUrlImagem(post.imagemUrl);
      const titulo = texto(post.titulo);
      if (!imagemUrl || !titulo) return null;
      return {
        id: post.id,
        titulo,
        descricao: texto(post.descricao),
        imagemUrl,
        redirecionamentoUrl: linkExterno(post.redirecionamentoUrl),
      };
    })
    .filter((post): post is PostBlogHome => post !== null);

const normalizarDestaques = (itens: DestaqueApi[]): DestaqueHome[] =>
  [...itens]
    .sort(porOrdenacao)
    .map((destaque): DestaqueHome | null => {
      const imagemUrl = resolverUrlImagem(destaque.imagemPrincipal?.link);
      if (!imagemUrl) return null;
      return {
        id: destaque.id,
        nome:
          texto(destaque.produto?.nomeEcommerce) ??
          agrupamento(destaque.produto?.nomeAgrupamento),
        imagemUrl,
        codigoOvd: texto(destaque.produto?.codigoOvd),
      };
    })
    .filter((destaque): destaque is DestaqueHome => destaque !== null);

const normalizarLancamentos = (itens: LancamentoApi[]): LancamentoHome[] =>
  itens
    .map((lancamento, indice): LancamentoHome | null => {
      const imagemUrl = resolverUrlImagem(lancamento.imagemPrincipal?.link);
      const grupo = agrupamento(lancamento.produto?.nomeAgrupamento);
      const titulo = texto(lancamento.produto?.nomeEcommerce) ?? grupo;
      if (!imagemUrl || !titulo) return null;
      return {
        id: lancamento.produto?.idProduto ?? indice,
        titulo,
        // Só vira linha de apoio se acrescentar algo ao título.
        agrupamento: grupo && grupo !== titulo ? grupo : undefined,
        imagemUrl,
        codigoOvd: texto(lancamento.produto?.codigoOvd),
      };
    })
    .filter((lancamento): lancamento is LancamentoHome => lancamento !== null);

/**
 * `GET /home` — uma única chamada alimenta banner principal, "Ferramenta é
 * VONDER", "Confira nosso Blog" e "Fique por dentro dos nossos Lançamentos".
 */
export const buscarHome = async (
  idioma = "ptBr",
  signal?: AbortSignal,
): Promise<DadosHome> => {
  const { data } = await apiRequest<HomeApi>("/home", {
    method: "GET",
    query: { idioma },
    auth: "apiKey",
    signal,
  });

  return {
    banners: normalizarBanners(data?.banners ?? []),
    blogs: normalizarBlogs(data?.blogs ?? []),
    destaques: normalizarDestaques(data?.destaques ?? []),
    lancamentos: normalizarLancamentos(data?.ultimosLancamentos ?? []),
  };
};
