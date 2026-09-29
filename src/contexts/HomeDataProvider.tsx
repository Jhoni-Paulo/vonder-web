import React, { useEffect, useMemo, useState } from "react";
import { ApiError } from "../services/api";
import { buscarHome, DADOS_HOME_VAZIOS, type DadosHome } from "../services/homeService";
import { HomeDataContext, type EstadoHome } from "./homeDataContext";

interface ResultadoHome {
  dados: DadosHome;
  erro: string | null;
}

/**
 * Faz **uma** chamada a `GET /home` e distribui o resultado para as seções da
 * página (banner principal, "Ferramenta é VONDER", blog e lançamentos).
 * Em erro, cada seção recebe lista vazia e simplesmente não é renderizada.
 */
export const HomeDataProvider = ({
  children,
  idioma = "ptBr",
}: {
  children: React.ReactNode;
  idioma?: string;
}): React.JSX.Element => {
  const [resultado, setResultado] = useState<ResultadoHome | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    buscarHome(idioma, controller.signal)
      .then((dados) => {
        if (controller.signal.aborted) return;
        setResultado({ dados, erro: null });
      })
      .catch((causa: unknown) => {
        if (controller.signal.aborted) return;
        const mensagem =
          causa instanceof ApiError || causa instanceof Error
            ? causa.message
            : "Erro ao carregar a home";
        console.warn("[Home] não foi possível carregar os dados da home:", mensagem);
        setResultado({ dados: DADOS_HOME_VAZIOS, erro: mensagem });
      });

    return () => controller.abort();
  }, [idioma]);

  const valor = useMemo<EstadoHome>(
    () => ({
      dados: resultado?.dados ?? DADOS_HOME_VAZIOS,
      carregando: resultado === null,
      erro: resultado?.erro ?? null,
    }),
    [resultado],
  );

  return <HomeDataContext.Provider value={valor}>{children}</HomeDataContext.Provider>;
};
