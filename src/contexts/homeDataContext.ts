import { createContext } from "react";
import { DADOS_HOME_VAZIOS, type DadosHome } from "../services/homeService";

export interface EstadoHome {
  dados: DadosHome;
  carregando: boolean;
  erro: string | null;
}

/** Preenchido pelo `HomeDataProvider`; lido pelo hook `useHomeData`. */
export const HomeDataContext = createContext<EstadoHome>({
  dados: DADOS_HOME_VAZIOS,
  carregando: false,
  erro: null,
});
