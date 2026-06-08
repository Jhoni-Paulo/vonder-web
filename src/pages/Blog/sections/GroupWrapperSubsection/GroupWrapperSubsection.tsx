import React from "react";
import styled from "styled-components";

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <TitleRow>
        <Title>Descubra o</Title>
      </TitleRow>
      <Group3>
        <Group4>
          <Group4Title>BLOG</Group4Title>
          <Camada
            alt="Camada"
            src="https://c.animaapp.com/w4wnBid1/img/camada-1.svg"
          />
        </Group4>
      </Group3>
      <Description>
        Dicas, novidades e conteúdos sobre a VONDER, uso eficiente das
        ferramentas e inovações do setor. Mergulhe conosco nesse universo de
        ferramentas!
      </Description>
      <Group2>
        <Rectangle />
        <Group2Text>Ver todas as publicações</Group2Text>
      </Group2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: calc(50.00% - 400px);
  position: absolute;
  top: 766px;
  width: 804px;
`;

const TitleRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 100%;
`;

const Group2 = styled.div`
  align-self: center;
  height: 50px;
  margin-top: 16px;
  position: relative;
  width: 35.82%;
`;

const Rectangle = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.31%;
`;

const Group2Text = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`;

const Group3 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Group4 = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Group4Title = styled.div`
  color: #000000;
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-size: 80px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
`;

const Camada = styled.img`
  aspect-ratio: 3.59;
  flex-shrink: 0;
  height: 79px;
  margin-bottom: 24px;
  width: auto;
`;
