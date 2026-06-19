import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  gap: 40px;
  justify-content: center;
  width: 100%;
  padding: 40px 5%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1164px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const Title = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 50px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.25;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Light = styled.span`
  font-weight: 300;
`;

const Bold = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const Button = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 28px;
  font-weight: 700;
  justify-content: center;
  padding: 15px 60px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 22px;
  }
`;

const ProductImage = styled.img`
  width: 560px;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  object-fit: contain;
`;

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Banner>
      <Inner>
        <Content>
          <Title>
            Lavadora e Aspirador
            <br />2 em 1 LAV 1580
          </Title>
          <Description>
            <Light>Design </Light>
            <Bold>compacto</Bold>
            <Light>
              .<br />
              Desempenho{" "}
            </Light>
            <Bold>surpreendente</Bold>
            <Light>.</Light>
          </Description>
          <Button type="button">Conheça</Button>
        </Content>
        <ProductImage
          alt="Lavadora e Aspirador LAV 1580"
          src="https://c.animaapp.com/F8lHzCc8/img/prancheta-1-5.png"
        />
      </Inner>
    </Banner>
  );
};
