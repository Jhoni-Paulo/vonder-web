import React from "react";
import styled from "styled-components";
import {
  ProductCarousel,
  type ProductCarouselItem,
} from "../../../../components/ProductCarousel/ProductCarousel";

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1338px;
  padding: 0 24px;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;

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
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const baseProducts: ProductCarouselItem[] = [
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-120@2x.png",
    name: "Bateria 12,0 V, íons de lítio, para parafusadeira, furadeira, PFV 012...",
    code: "93.06.012.038",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-121@2x.png",
    name: "Fonte de carregamento 12 V, para PFV010, PFV012 e PFD 012...",
    code: "93.06.010.035",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-122@2x.png",
    name: "Eixo flexível para furadeira e parafusadeira...",
    code: "35.99.024.110",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-123@2x.png",
    name: "Broca 3 pontas para madeira, 13 mm, VONDER",
    code: "53.01.130.000",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-124@2x.png",
    name: "Mandril de aperto rápido, 0,8 mm - 10,0 mm, 3/8\" x 24 fios...",
    code: "66.70.210.380",
  },
];

const relatedProducts: ProductCarouselItem[] = [...baseProducts, ...baseProducts];

export const DivSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>
          Produtos
          <br />
          Relacionados
        </Title>
        <Description>
          Confira outros itens e acessórios essenciais para potencializar suas
          ferramentas
        </Description>
      </Header>
      <ProductCarousel items={relatedProducts} />
    </Container>
  );
};
