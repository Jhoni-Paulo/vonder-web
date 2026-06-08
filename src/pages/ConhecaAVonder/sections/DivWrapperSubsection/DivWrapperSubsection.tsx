import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 290px;
  left: calc(50.00% - 614px);
  position: absolute;
  top: 760px;
  width: 1230px;
`;

const Group = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 202px;
  left: calc(50.00% - 615px);
  position: absolute;
  top: 44px;
  width: 404px;
`;

const Title = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 25px;
  font-weight: 700;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -261px;
  white-space: nowrap;
  width: 143px;
`;

const Subtitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 162px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  width: 400px;
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: calc(50.00% - 187px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: calc(50.00% - 145px);
  width: 800px;
`;

const LightText = styled.span`
  font-weight: 300;
`;

const BoldText = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Group>
        <Title>QUEM SOMOS</Title>
        <Subtitle>
          FORÇA BRASILEIRA
          <br />
          QUE CONSTRÓI
          <br />
          SOLUÇÕES.
        </Subtitle>
      </Group>
      <Description>
        <LightText>A </LightText>
        <BoldText>VONDER</BoldText>
        <LightText>
          {" "}
          é uma das marcas mais completas do Brasil em sua categoria, sendo
          detentora do melhor e mais completo mix de ferragens, ferramentas,
          máquinas e equipamentos para uso profissional do mercado. Um histórico
          de trabalho e crescimento muito expressivo, incrementando seus
          produtos ano a ano e surpreendendo por sua evolução e aprimoramento em
          diversos segmentos e linhas, sempre primando pela máxima qualidade de
          suas ferramentas e ampla variedade de produtos destinados a diferentes
          segmentos de atuação profissional.
          <br />
          <br />A VONDER é a principal marca do Grupo OVD, um dos maiores
          atacadistas de ferragens e ferramentas do país, com 55 anos de mercado
          e dedicação aos seus parceiros e clientes.
        </LightText>
      </Description>
    </Container>
  );
};
