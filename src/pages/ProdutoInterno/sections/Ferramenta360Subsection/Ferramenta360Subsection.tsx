import React from "react";
import styled from "styled-components";
import matriz18 from "../../../../assets/matriz_18.webp";
import { ProductViewer360 } from "../../../../components/ProductViewer360/ProductViewer360";

/* Mesmas medidas das seções vizinhas ("Características do produto" e
   "Produtos Relacionados"), para os títulos alinharem na mesma coluna. */

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1244px;
  padding: 0 24px;
  width: 100%;
`;

const Header = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  max-width: 500px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

/* O visualizador já é quadrado e ocupa 100% da largura do pai: aqui só
   definimos até onde ele pode crescer. */
const ViewerWrap = styled.div`
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 560px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Ferramenta360Subsection = (): React.JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>Ferramenta 360º</Title>
        <Description>
          Explore a ferramenta em detalhes: Rotacione 360° e dê zoom para
          visualizar cada ângulo!
        </Description>
      </Header>
      <ViewerWrap>
        <ProductViewer360 imageUrl={matriz18} />
      </ViewerWrap>
    </Container>
  );
};

export default Ferramenta360Subsection;
