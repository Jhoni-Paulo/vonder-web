import { apiRequest, resolverUrlImagem } from "./api";

/**
 * Registro cru de `cms.alerta` devolvido por `POST /alerta/buscar`
 * (id, colapsado, explandido, data_inicio, data_fim).
 *
 * `colapsado` e `explandido` são os dois uploads de imagem do painel. Hoje o
 * CMS só edita a imagem expandida e replica o mesmo arquivo em `colapsado`
 * (o back exige o campo), por isso o site usa `explandido` e só cai em
 * `colapsado` como reserva.
 */
export interface AlertaApi {
  id?: number;
  colapsado?: string | null;
  explandido?: string | null;
  dataInicio?: string | null;
  dataFim?: string | null;
}

/** Alerta já normalizado para consumo do front. */
export interface Alerta {
  id?: number;
  /** Imagem exibida quando a faixa é aberta. */
  imagemExpandida?: string;
  /** Imagem da faixa colapsada (hoje igual à expandida). */
  imagemColapsada?: string;
  dataInicio: Date | null;
  dataFim: Date | null;
}

/**
 * Converte `2026-01-01` ou `2026-01-01T00:00:00Z` em Date local no início do
 * dia. Parsear só a parte da data evita o deslocamento de fuso que
 * `new Date("2026-01-01")` (UTC) causaria no Brasil.
 */
const parseDataApi = (valor?: string | null): Date | null => {
  const partes = valor?.trim().split("T")[0].split("-");
  if (!partes || partes.length !== 3) return null;
  const [ano, mes, dia] = partes.map(Number);
  if (!ano || !mes || !dia) return null;
  const data = new Date(ano, mes - 1, dia);
  return Number.isNaN(data.getTime()) ? null : data;
};

const normalizarAlerta = (bruto: AlertaApi): Alerta => ({
  id: bruto.id,
  imagemExpandida: resolverUrlImagem(bruto.explandido ?? bruto.colapsado),
  imagemColapsada: resolverUrlImagem(bruto.colapsado ?? bruto.explandido),
  dataInicio: parseDataApi(bruto.dataInicio),
  dataFim: parseDataApi(bruto.dataFim),
});

/**
 * O alerta só aparece dentro do período cadastrado no painel. Comparação por
 * dia: `dataFim` é inclusiva (vale até 23:59 do dia cadastrado). Data ausente
 * = período aberto daquele lado.
 */
export const alertaEstaVigente = (alerta: Alerta, referencia: Date = new Date()): boolean => {
  const hoje = new Date(
    referencia.getFullYear(),
    referencia.getMonth(),
    referencia.getDate(),
  ).getTime();

  if (alerta.dataInicio && hoje < alerta.dataInicio.getTime()) return false;
  if (alerta.dataFim && hoje > alerta.dataFim.getTime()) return false;
  return true;
};

/**
 * `POST /alerta/buscar` — o back pode devolver o registro solto ou uma lista;
 * o painel mantém um único alerta, então usamos o primeiro.
 */
export const buscarAlerta = async (signal?: AbortSignal): Promise<Alerta | null> => {
  const { data } = await apiRequest<AlertaApi | AlertaApi[]>("/alerta/buscar", {
    method: "POST",
    body: {},
    auth: "jwt",
    signal,
  });

  const registro = Array.isArray(data) ? data[0] : data;
  if (!registro || Object.keys(registro).length === 0) return null;

  return normalizarAlerta(registro);
};
