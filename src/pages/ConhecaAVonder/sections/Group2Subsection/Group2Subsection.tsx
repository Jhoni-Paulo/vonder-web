import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 660px;
  left: 0;
  position: absolute;
  top: 2854px;
  width: 1440px;
`;

const DivWrapper = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  height: 560px;
  left: 0;
  min-width: 1440px;
  padding: 44px 64px;
  position: absolute;
  top: 50px;
`;

const Group20 = styled.div`
  height: 472px;
  position: relative;
  width: 1266px;
`;

const Group21 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  left: calc(50% + 83px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 552px;
`;

const OAnoWrapper = styled.div`
  width: 552px;
`;

const Paragraph = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  margin-left: -2px;
  text-align: justify;
  width: 550px;
`;

const TextWrapperRegular = styled.span`
  font-weight: 300;
`;

const TextWrapperBold = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const TextWrapper22 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: justify;
  width: 550px;
`;

const Group22 = styled.img`
  height: 400px;
  left: 0;
  position: absolute;
  top: calc(50% - 200px);
  width: 666px;
`;

const Polygon = styled.img`
  height: 55px;
  left: 345px;
  position: absolute;
  top: 5px;
  width: 80px;
`;

export const Group2Subsection = (): React.JSX.Element => {
  return (
    <Container>
      <DivWrapper>
        <Group20>
          <Group21>
            <TextWrapper22>2013</TextWrapper22>
            <OAnoWrapper>
              <Paragraph>
                <TextWrapperRegular>
                  O ano marcou um passo estratégico e de grande impacto para a
                  consolidação da VONDER no cenário esportivo nacional. Foi
                  nesse período que a empresa iniciou formalmente a divulgação
                  de sua marca no{" "}
                </TextWrapperRegular>
                <TextWrapperBold>futebol</TextWrapperBold>
                <TextWrapperRegular>
                  , garantindo uma presença de altíssima visibilidade nos
                  principais campeonatos do país e em jogos da{" "}
                </TextWrapperRegular>
                <TextWrapperBold>Seleção Brasileira</TextWrapperBold>
                <TextWrapperRegular>
                  . Ao estampar suas icônicas placas publicitárias à beira do
                  gramado, a marca não apenas estreitou os laços com o público
                  apaixonado por esporte, mas também associou sua imagem de
                  força, precisão e alta performance ao espetáculo do futebol
                  profissional, transformando os estádios em uma poderosa
                  vitrine para suas ferramentas e equipamentos.
                </TextWrapperRegular>
              </Paragraph>
            </OAnoWrapper>
          </Group21>
          <Group22
            alt="Group"
            src="https://c.animaapp.com/fomi9SZH/img/group-462.png"
          />
        </Group20>
      </DivWrapper>
      <Polygon
        alt="Polygon"
        src="https://c.animaapp.com/fomi9SZH/img/polygon-4.svg"
      />
    </Container>
  );
};
