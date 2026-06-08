import React from "react";
import styled from "styled-components";
import { ConfianASuporteESubsection } from "./sections/ConfianASuporteESubsection/ConfianASuporteESubsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

export const Garantia = (): React.JSX.Element => {
  return (
    <StyledGarantia data-model-id="1:10530">
      <PaginaInicial>
        <TextWrapper21>Página inicial &gt; </TextWrapper21>
        <TextWrapper22>Garantia</TextWrapper22>
      </PaginaInicial>
      <GroupSubsection />
      <GroupWrapperSubsection />
      <ConfianASuporteESubsection />
      <DivWrapperSubsection />
      <OutrasOpcoes>
        <TextWrapper23>
          Outras opções que você
          <br />
        </TextWrapper23>
        <TextWrapper24>pode estar buscando</TextWrapper24>
      </OutrasOpcoes>
      <DivSubsection />
      <SectionComponentNodeSubsection />
    </StyledGarantia>
  );
};

const StyledGarantia = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: -22px;
  min-height: 3343px;
  min-width: 1440px;
  width: 100%;
`;

const PaginaInicial = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -600px;
  margin-top: 0;
  width: 628px;
`;

const TextWrapper21 = styled.span`
  font-weight: 300;
`;

const TextWrapper22 = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const OutrasOpcoes = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 45px;
  font-weight: 400;
  height: 109px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  margin-top: 80px;
  text-align: center;
  width: 419px;
`;

const TextWrapper23 = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const TextWrapper24 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;
