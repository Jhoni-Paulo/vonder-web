/** Origem onde os catálogos em PDF estão publicados. */
const ORIGEM_CATALOGO = "https://www.ovd.com.br";

/** Caminho que o dev server intercepta e repassa para a origem acima. */
const PREFIXO_DEV = "/_catalogo-ovd";

/**
 * Ajusta a URL do PDF para o ambiente.
 *
 * O pdf.js baixa o arquivo por `fetch`, então vale a política de CORS — e o
 * servidor de `ovd.com.br` **não** manda `Access-Control-Allow-Origin`. Sem
 * esse cabeçalho o navegador bloqueia o download e o folheador não abre.
 *
 * Em desenvolvimento o pedido passa pelo Vite, que busca o arquivo e devolve
 * na mesma origem da página (ver `aceitaRangeNoDev`/`proxy` em
 * `vite.config.ts`). Em produção a URL vai inteira, como vem do back — e aí
 * uma das duas coisas precisa acontecer no servidor:
 *
 * 1. `ovd.com.br` passar a responder `Access-Control-Allow-Origin` (preferível), ou
 * 2. o servidor que publica o site repetir esse mesmo proxy.
 */
export const resolverUrlPdf = (url: string): string => {
  if (!import.meta.env.DEV || !url.startsWith(ORIGEM_CATALOGO)) return url;
  return PREFIXO_DEV + url.slice(ORIGEM_CATALOGO.length);
};
