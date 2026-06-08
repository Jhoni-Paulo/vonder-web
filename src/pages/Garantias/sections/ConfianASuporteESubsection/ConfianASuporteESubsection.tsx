import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 24px;
  font-weight: 400;
  height: 145px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 75px;
  width: 1228px;
`;

const TitleSpan = styled.span`
  font-weight: 700;
`;

const DescriptionSpan = styled.span`
  font-family: "Swis721 Cn BT-Regular", Helvetica;
`;

export const ConfianASuporteESubsection = (): React.JSX.Element => {
  return (
    <StyledParagraph>
      <TitleSpan>
        Confiança, Suporte e Compromisso
        <br />
      </TitleSpan>
      <DescriptionSpan>
        {" "}
        Saber que você pode confiar em um produto e contar com suporte pós-venda
        é fundamental na escolha de uma marca. Por isso, a VONDER investe
        constantemente no desenvolvimento de produtos de alta performance e em
        um suporte técnico especializado, garantindo que você tenha as melhores
        ferramentas e uma equipe pronta para atender sempre que precisar.
      </DescriptionSpan>
    </StyledParagraph>
  );
};
