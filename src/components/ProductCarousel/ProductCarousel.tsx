import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface ProductCarouselItem {
  img: string;
  name: string;
  code: string;
}

interface ProductCarouselProps {
  items: ProductCarouselItem[];
}

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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 17px;
  height: 363px;
  padding: 16px 12px 20px;
  position: relative;
  scroll-snap-align: center;
  width: 223px;

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

export const ProductCarousel = ({ items }: ProductCarouselProps): React.JSX.Element => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
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
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <Card>
                <ProductImage alt={item.name} src={item.img} />
                <ProductInfo>
                  <ProductName>{item.name}</ProductName>
                  <ProductCode>{item.code}</ProductCode>
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
  );
};
