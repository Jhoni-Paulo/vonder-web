import { useEffect, useState } from "react";
import { ApiError } from "../services/api";
import {
  buscarLancamentos,
  LANCAMENTOS_VAZIOS,
  type DadosLancamentos,
} from "../services/lancamentoService";

interface OpcoesUseLancamentos {
  grupo?: number;
  subgrupo?: number;
  categoria?: number;
}

export interface EstadoLancamentos {
  dados: DadosLancamentos;
  carregando: boolean;
  erro: string | null;
}

interface Resultado {
  chave: string;
  dados: DadosLancamentos;
  erro: string | null;
}

/**
 * Lançamentos do recorte atual. A mesma chamada traz os níveis do filtro, então
 * uma seleção atualiza sidebar e grade de uma vez.
 */
export function useLancamentos({
  grupo,
  subgrupo,
  categoria,
}: OpcoesUseLancamentos = {}): EstadoLancamentos {
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const chave = `${grupo ?? ""}|${subgrupo ?? ""}|${categoria ?? ""}`;

  useEffect(() => {
    const controller = new AbortController();

    buscarLancamentos({ grupo, subgrupo, categoria, signal: controller.signal })
      .then((dados) => {
        if (controller.signal.aborted) return;
        setResultado({ chave, dados, erro: null });
      })
      .catch((causa: unknown) => {
        if (controller.signal.aborted) return;
        const mensagem =
          causa instanceof ApiError || causa instanceof Error
            ? causa.message
            : "Erro ao carregar os lançamentos";
        console.warn("[Lançamentos] não foi possível carregar:", mensagem);
        setResultado({ chave, dados: LANCAMENTOS_VAZIOS, erro: mensagem });
      });

    return () => controller.abort();
  }, [chave, grupo, subgrupo, categoria]);

  const atual = resultado?.chave === chave ? resultado : null;

  return {
    // Mantém os dados anteriores enquanto a nova consulta não volta, para a
    // sidebar não piscar a cada clique.
    dados: atual?.dados ?? resultado?.dados ?? LANCAMENTOS_VAZIOS,
    carregando: !atual,
    erro: atual?.erro ?? null,
  };
}
