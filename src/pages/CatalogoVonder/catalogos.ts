export interface CatalogoPdf {
  /** Rótulo exibido no select. */
  nome: string;
  /** URL do PDF, absoluta ou relativa. */
  url: string;
}

/**
 * Catálogos disponíveis no folheador.
 *
 * A URL já é remota, como virá do back. Enquanto a rota não existe, a lista
 * fica fixa aqui — quando existir, basta trocar este array pelo retorno dela:
 * o resto da página já trabalha com `{ nome, url }`.
 */
export const catalogos: CatalogoPdf[] = [
  {
    nome: "Catálogo VONDER 2026",
    url: "https://www.ovd.com.br/_CATALOGO/vonder/catalogo_vonder.pdf",
  },
];
