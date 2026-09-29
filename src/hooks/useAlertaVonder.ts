import { useEffect, useState } from "react";
import { ApiError } from "../services/api";
import { alertaEstaVigente, buscarAlerta, type Alerta } from "../services/alertaService";

interface OpcoesUseAlertaVonder {
  /** Permite pular a chamada (ex.: quando a imagem vem por prop). */
  habilitado?: boolean;
}

export interface EstadoAlertaVonder {
  /** Alerta vigente hoje, ou `null` se não houver / estiver fora do período. */
  alerta: Alerta | null;
  carregando: boolean;
  erro: string | null;
}

interface ResultadoBusca {
  alerta: Alerta | null;
  erro: string | null;
}

/**
 * Carrega o alerta cadastrado no painel e já aplica o filtro de período.
 * Em erro (rota indisponível, token expirado) devolve `alerta: null` — a faixa
 * simplesmente não aparece, em vez de exibir conteúdo desatualizado.
 */
export function useAlertaVonder({
  habilitado = true,
}: OpcoesUseAlertaVonder = {}): EstadoAlertaVonder {
  const [resultado, setResultado] = useState<ResultadoBusca | null>(null);

  useEffect(() => {
    if (!habilitado) return;

    const controller = new AbortController();

    buscarAlerta(controller.signal)
      .then((encontrado) => {
        if (controller.signal.aborted) return;
        setResultado({
          alerta: encontrado && alertaEstaVigente(encontrado) ? encontrado : null,
          erro: null,
        });
      })
      .catch((causa: unknown) => {
        if (controller.signal.aborted) return;
        const mensagem =
          causa instanceof ApiError || causa instanceof Error
            ? causa.message
            : "Erro ao carregar o alerta";
        console.warn("[AlertaVonder] não foi possível carregar o alerta:", mensagem);
        setResultado({ alerta: null, erro: mensagem });
      });

    return () => controller.abort();
  }, [habilitado]);

  return {
    alerta: resultado?.alerta ?? null,
    carregando: habilitado && resultado === null,
    erro: resultado?.erro ?? null,
  };
}
