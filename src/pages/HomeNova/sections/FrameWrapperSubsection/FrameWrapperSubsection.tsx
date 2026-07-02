import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1292px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    gap: 16px;
  }
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

const Subtitle = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 52px;
  height: 52px;
  z-index: 2;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &.arrow-left {
    left: -82px;
  }

  &.arrow-right {
    right: -82px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Track = styled.div`
  width: 100%;

  .swiper {
    padding: 8px 4px;
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    width: auto;
    height: auto;
  }
`;

const Card = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 17px;
  padding: 16px 12px 20px;
  position: relative;
  width: 223px;
  scroll-snap-align: center;
  box-sizing: border-box;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(102, 102, 102, 1) 100%
    );
    border-radius: 15px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 600px) {
    width: 190px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const ProductName = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #000000;
  display: -webkit-box;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductCode = styled.div`
  color: #555a57;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 700;
`;

const products = [
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-115@2x.png",
    name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...",
    code: "60.01.112.000",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-116@2x.png",
    name: "Parafusadeira/furadeira de impacto a bateria, 20 V, fonte de...",
    code: "60.01.200.200",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-117@2x.png",
    name: "Parafusadeira furadeira a bateria, 18 V, com bateria e com...",
    code: "60.04.185.200",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-118@2x.png",
    name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...",
    code: "60.01.100.120",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-119@2x.png",
    name: "Parafusadeira/furadeira de impacto, bateria intercambiável de 18 V...",
    code: "60.04.181.900",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-115@2x.png",
    name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...",
    code: "60.01.112.000",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-116@2x.png",
    name: "Parafusadeira/furadeira de impacto a bateria, 20 V, fonte de...",
    code: "60.01.200.200",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/image-117@2x.png",
    name: "Parafusadeira furadeira a bateria, 18 V, com bateria e com...",
    code: "60.04.185.200",
  },
];

export const FrameWrapperSubsection = (): React.JSX.Element => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Container>
      <Title>
        Seleção
        <br />
        Especial VONDER
      </Title>
      <Subtitle>
        Conheça e surpreenda-se com os best-sellers da VONDER
      </Subtitle>
      <Carousel>
        <Arrow
          className="arrow-left"
          alt="Anterior"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-2.svg"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Track>
          <Swiper
            grabCursor
            rewind
            slidesPerView="auto"
            spaceBetween={16}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
          >
            {products.map((product, i) => (
              <SwiperSlide key={i}>
                <Card>
                  <ProductImage alt={product.name} src={product.img} />
                  <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductCode>{product.code}</ProductCode>
                  </ProductInfo>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Track>
        <Arrow
          className="arrow-right"
          alt="Próximo"
          src="https://c.animaapp.com/F8lHzCc8/img/camada-1-3.svg"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Carousel>
    </Container>
  );
};
