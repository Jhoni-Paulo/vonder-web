import { API_BASE_URL, API_KEY, API_TOKEN } from "./config";
import type { ErroValidacao, RespostaApi } from "./types";

/** Como a requisição se autentica: JWT (rotas de CMS) ou x-api-key (rotas públicas). */
export type ModoAuth = "jwt" | "apiKey" | "nenhum";

export interface OpcoesRequisicao {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  /** Corpo serializado como JSON. */
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
  auth?: ModoAuth;
  /** Permite cancelar a chamada (ex.: unmount do componente). */
  signal?: AbortSignal;
  timeoutMs?: number;
}

/** Erro de API: cobre falha HTTP e `code !== 0` no envelope. */
export class ApiError extends Error {
  /** `code` do envelope (`1` em erro de negócio) ou `-1` quando nem chegou resposta. */
  readonly code: number;
  /** Status HTTP (`0` quando a requisição nem completou). */
  readonly status: number;
  readonly errors: ErroValidacao[];

  constructor(message: string, code: number, status: number, errors: ErroValidacao[] = []) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.status = status;
    this.errors = errors;
  }
}

const TIMEOUT_PADRAO_MS = 15000;

const montarUrl = (path: string, query?: OpcoesRequisicao["query"]): string => {
  const url = new URL(`${API_BASE_URL}/${path.replace(/^\/+/, "")}`);
  Object.entries(query ?? {}).forEach(([chave, valor]) => {
    if (valor !== undefined) url.searchParams.set(chave, String(valor));
  });
  return url.toString();
};

const montarHeaders = (auth: ModoAuth, temBody: boolean): HeadersInit => {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (temBody) headers["Content-Type"] = "application/json";
  if (auth === "jwt" && API_TOKEN) headers.Authorization = `Bearer ${API_TOKEN}`;
  if (auth === "apiKey" && API_KEY) headers["x-api-key"] = API_KEY;
  return headers;
};

/**
 * Executa uma chamada à API e devolve o envelope já validado.
 * Lança `ApiError` em falha de rede, HTTP != 2xx ou `code !== 0`.
 */
export async function apiRequest<T>(
  path: string,
  opcoes: OpcoesRequisicao = {},
): Promise<RespostaApi<T>> {
  const {
    method = "GET",
    body,
    query,
    auth = "jwt",
    signal,
    timeoutMs = TIMEOUT_PADRAO_MS,
  } = opcoes;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const abortarExterno = () => controller.abort();
  signal?.addEventListener("abort", abortarExterno);

  let resposta: Response;
  try {
    resposta = await fetch(montarUrl(path, query), {
      method,
      headers: montarHeaders(auth, body !== undefined),
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (erro) {
    // Repassa o abort para o chamador distinguir cancelamento de falha real.
    if (signal?.aborted) throw erro;
    const motivo = controller.signal.aborted
      ? `Tempo limite de ${timeoutMs}ms excedido`
      : "Falha de conexão com o servidor";
    throw new ApiError(motivo, -1, 0);
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener("abort", abortarExterno);
  }

  const envelope = (await resposta.json().catch(() => null)) as RespostaApi<T> | null;

  if (!resposta.ok) {
    throw new ApiError(
      envelope?.message ?? `Erro ${resposta.status}: ${resposta.statusText}`,
      envelope?.code ?? 1,
      resposta.status,
      envelope?.errors ?? [],
    );
  }

  if (!envelope) {
    throw new ApiError("Resposta inválida da API", 1, resposta.status);
  }

  // O back responde HTTP 200 mesmo em erro de negócio: quem manda é o `code`.
  if (envelope.code !== 0) {
    throw new ApiError(
      envelope.message ?? "Erro ao processar a requisição",
      envelope.code,
      resposta.status,
      envelope.errors ?? [],
    );
  }

  return envelope;
}
