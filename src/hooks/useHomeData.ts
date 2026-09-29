import { useContext } from "react";
import { HomeDataContext, type EstadoHome } from "../contexts/homeDataContext";

/**
 * Lê os dados de `GET /home` carregados pelo `HomeDataProvider`.
 * Fora do provider devolve estado vazio — a seção se esconde sozinha.
 */
export const useHomeData = (): EstadoHome => useContext(HomeDataContext);
