import React from "react";
import styled from "styled-components";

const Section = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const Frame = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  max-width: 1249px;
  width: 100%;
`;

const TextColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 500px;
`;

const Title = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(28px, 4vw, 45px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: clamp(16px, 2vw, 24px);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.5;
  margin: 0;
`;

const Group = styled.div`
  position: relative;
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 690px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rectangle = styled.div`
  background-color: #f6be00;
  border-radius: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 87%;
  height: 75%;
  z-index: 0;
`;

const ChatImage = styled.img`
  width: 100%;
  max-width: 690px;
  height: auto;
  display: block;
  position: relative;
  z-index: 1;
`;

export const ConfiabilidadeSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <Frame>
        <TextColumn>
          <Title>
            Confiabilidade, segurança e qualidade na entrega dos nossos
            produtos!
          </Title>
          <Description>
            Garantindo o melhor desempenho, suporte especializado e
            tranquilidade para você em cada etapa.
          </Description>
        </TextColumn>
        <Group>
          <Rectangle />
          <ChatImage
            alt="Chatgpt image de"
            src="https://c.animaapp.com/Qnwadh4r/img/chatgpt-image-22-de-mai-1.png"
          />
        </Group>
      </Frame>
    </Section>
  );
};
