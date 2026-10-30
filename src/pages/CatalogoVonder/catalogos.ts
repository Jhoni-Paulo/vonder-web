export interface CatalogoPdf {
  /** Rótulo exibido no select. */
  nome: string;
  /** URL do PDF. Hoje é um arquivo estático em `public/catalogos`. */
  url: string;
}

/**
 * Catálogos disponíveis no folheador.
 *
 * Enquanto não há integração, o PDF é servido de `public/`. Quando o back
 * expuser a lista, basta trocar este array pelo retorno da rota — o resto da
 * página já trabalha com `{ nome, url }`.
 */
export const catalogos: CatalogoPdf[] = [
  { nome: "Catálogo VONDER 2026", url: "/catalogos/catalogo-vonder-2026.pdf" },
];
