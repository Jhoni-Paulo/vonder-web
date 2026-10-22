import React from "react";
import styled from "styled-components";
import { CtaDuvidas } from "../../components/CtaDuvidas/CtaDuvidas";
import { CabecalhoSection } from "./sections/CabecalhoSection";
import { EncartesSection } from "./sections/EncartesSection";
import { VisualizadorSection } from "./sections/VisualizadorSection";
import { Conteudo } from "./styles";

const Pagina = styled.main`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 56px;
  overflow-x: hidden;
  padding: 32px 0 96px;
  width: 100%;

  @media (max-width: 900px) {
    gap: 40px;
    padding: 24px 0 56px;
  }
`;

export const CatalogoVonder = (): React.JSX.Element => {
  return (
    <Pagina>
      <CabecalhoSection />
      <VisualizadorSection />
      <EncartesSection />
      <Conteudo>
        <CtaDuvidas />
      </Conteudo>
    </Pagina>
  );
};

export default CatalogoVonder;
