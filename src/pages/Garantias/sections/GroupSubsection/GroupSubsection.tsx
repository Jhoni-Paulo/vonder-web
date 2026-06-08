import React from "react";
import styled from "styled-components";

const StyledGroupSubsection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 106px;
  margin-top: 21px;
  width: 1249px;
`;

const Group = styled.div`
  height: 426px;
  position: relative;
  width: 1249px;
`;

const Rectangle = styled.div`
  background-color: #f6be00;
  border-radius: 16px;
  height: 322px;
  position: absolute;
  right: 21px;
  top: 57px;
  width: 600px;
`;

const Details = styled.div`
  height: 240px;
  left: calc(50.00% - 624px);
  position: absolute;
  top: 93px;
  width: 504px;
`;

const TextWrapper = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 182px;
  width: 500px;
`;

const HighlightedText = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: calc(50.00% - 120px);
  width: 497px;
`;

const ChatGPTImage = styled.img`
  height: 426px;
  left: 559px;
  position: absolute;
  top: 0;
  width: 690px;
`;

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupSubsection>
      <Group>
        <Rectangle />
        <Details>
          <TextWrapper>
            Garantindo o melhor desempenho, suporte especializado e
            tranquilidade para você em cada etapa.
          </TextWrapper>
          <HighlightedText>
            Confiabilidade, segurança e qualidade na entrega dos nossos
            produtos!
          </HighlightedText>
        </Details>
        <ChatGPTImage
          alt="Chatgpt image de"
          src="https://c.animaapp.com/uUmb9Vky/img/chatgpt-image-22-de-mai-1.png"
        />
      </Group>
    </StyledGroupSubsection>
  );
};
