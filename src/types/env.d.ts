/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base da API do CMS, já com o prefixo /api (ex.: http://10.1.12.100:8080/api). */
  readonly VITE_API_BASE_URL?: string;
  /** JWT usado enquanto as rotas de conteúdo do site público ainda exigirem Bearer. */
  readonly VITE_API_TOKEN?: string;
  /** Chave das rotas públicas que usam x-api-key (/home, /mega-menu). */
  readonly VITE_API_KEY?: string;
  /** Host das imagens (NGINX), para resolver caminhos relativos devolvidos pelo back. */
  readonly VITE_ASSETS_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
