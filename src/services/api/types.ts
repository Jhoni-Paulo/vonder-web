/** Envelope padrão da API (`RespostaApi<T>`) — ver seção 0.1 do doc de integração. */
export interface RespostaApi<T> {
  /** `0` = sucesso, `1` = erro (mesmo com HTTP 200). */
  code: number;
  message?: string;
  data?: T;
  timestamp?: string;
  paginacao?: Paginacao;
  errors?: ErroValidacao[];
}

export interface Paginacao {
  pagina: number;
  totalPaginas: number;
  totalRegistros: number;
  registrosPorPagina: number;
  temProxima: boolean;
  temAnterior: boolean;
}

export interface ErroValidacao {
  campo: string;
  mensagem: string;
}
