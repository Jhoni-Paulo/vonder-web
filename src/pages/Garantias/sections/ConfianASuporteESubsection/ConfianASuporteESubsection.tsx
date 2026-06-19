import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
`;

const ConfianParagraph = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: clamp(16px, 1.8vw, 24px);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
  max-width: 1228px;
  width: 100%;
`;

const HighlightSpan = styled.span`
  font-weight: 700;
`;

const TextWrapper = styled.span`
  font-family: "Swis721 Cn BT-Regular", Helvetica;
`;

export const ConfianaSuporteESubsection = (): React.JSX.Element => {
  return (
    <Container>
      <ConfianParagraph>
        <HighlightSpan>
          Confiança, Suporte e Compromisso
          <br />
        </HighlightSpan>
        <TextWrapper>
          {" "}
          Saber que você pode confiar em um produto e contar com suporte
          pós-venda é fundamental na escolha de uma marca. Por isso, a VONDER
          investe constantemente no desenvolvimento de produtos de alta
          performance e em um suporte técnico especializado, garantindo que você
          tenha as melhores ferramentas e uma equipe pronta para atender sempre
          que precisar.
        </TextWrapper>
      </ConfianParagraph>
    </Container>
  );
};
