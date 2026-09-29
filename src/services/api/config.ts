/**
 * Configuração central de acesso à API do CMS.
 *
 * Os valores vêm do `.env` (prefixo `VITE_`) e caem em um default de
 * desenvolvimento para o front continuar rodando sem `.env` configurado.
 */

const semBarraFinal = (valor: string): string => valor.replace(/\/+$/, "");

/** Variável ausente **ou vazia** no `.env` cai no default. */
const lerEnv = (valor: string | undefined, padrao: string): string => {
  const limpo = valor?.trim();
  return limpo ? limpo : padrao;
};

/** Base da API, já com o prefixo `/api`. */
export const API_BASE_URL = semBarraFinal(
  lerEnv(import.meta.env.VITE_API_BASE_URL, "http://10.1.12.100:8080/api"),
);

/**
 * Bearer JWT. Hoje as rotas de conteúdo (ex.: `/alerta/buscar`) são rotas de
 * CMS e exigem token — ver seção 0.5 do `docs/INTEGRACAO-BACKEND.md`. Quando o
 * back expuser versões públicas, esta variável deixa de ser necessária.
 */
export const API_TOKEN = lerEnv(import.meta.env.VITE_API_TOKEN, "");

/** Chave das rotas públicas que usam `x-api-key` (`/home`, `/mega-menu`). */
export const API_KEY = lerEnv(import.meta.env.VITE_API_KEY, "");

/** Host das imagens (NGINX). Default: a origem da própria API. */
export const ASSETS_BASE_URL = semBarraFinal(
  lerEnv(import.meta.env.VITE_ASSETS_BASE_URL, API_BASE_URL.replace(/\/api$/, "")),
);

/**
 * Normaliza um campo de imagem vindo do back. O contrato pede URL absoluta
 * (seção 0.4 do doc de integração), mas o upload do alerta grava o arquivo no
 * NGINX e pode devolver caminho relativo — e o CMS também salva `data:` base64.
 * Os três casos são aceitos aqui.
 */
export const resolverUrlImagem = (valor?: string | null): string | undefined => {
  const src = valor?.trim();
  if (!src) return undefined;
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  return `${ASSETS_BASE_URL}/${src.replace(/^\/+/, "")}`;
};
