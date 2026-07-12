import React from "react";
import styled from "styled-components";
import {
  ProductCarousel,
  type ProductCarouselItem,
} from "../../../../components/ProductCarousel/ProductCarousel";

const Section = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 56px 24px;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1338px;
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
  max-width: 404px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CarouselWrap = styled.div`
  max-width: 1338px;
  width: 100%;
`;

const baseProducts: ProductCarouselItem[] = [
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-115@2x.png",
    name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...",
    code: "60.01.112.000",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-116@2x.png",
    name: "Parafusadeira/furadeira de impacto a bateria, 20 V, fonte de...",
    code: "60.01.200.200",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-117@2x.png",
    name: "Parafusadeira furadeira a bateria, 18 V, com bateria e com...",
    code: "60.04.185.200",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-118@2x.png",
    name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...",
    code: "60.01.100.120",
  },
  {
    img: "https://c.animaapp.com/C1uOODCl/img/image-119@2x.png",
    name: "Parafusadeira/furadeira de impacto, bateria intercambiável de 18 V...",
    code: "60.04.181.900",
  },
];

const relatedProducts: ProductCarouselItem[] = [...baseProducts, ...baseProducts];

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <Header>
        <Title>
          Quem viu,
          <br />
          Viu também!
        </Title>
        <Description>
          Descubra outros produtos que você
          <br />
          também vai se surpreender
        </Description>
      </Header>
      <CarouselWrap>
        <ProductCarousel items={relatedProducts} />
      </CarouselWrap>
    </Section>
  );
};
