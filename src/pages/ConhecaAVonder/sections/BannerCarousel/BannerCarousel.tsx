import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import banner1 from "../../../../assets/Rectangle 104.png";
import banner2 from "../../../../assets/Rectangle 105.png";
import banner3 from "../../../../assets/Rectangle 106.png";
import banner4 from "../../../../assets/Rectangle 107.png";
import banner5 from "../../../../assets/Rectangle 108.png";

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
    left: 24px;
  }

  &.arrow-right {
    right: 24px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Track = styled.div`
  width: 100%;

  .swiper {
    padding: 8px 0;
  }

  .swiper-slide {
    width: auto;
    height: auto;
  }
`;

const Slide = styled.img`
  height: 440px;
  object-fit: contain;
  width: auto;
  max-width: 100%;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const baseBanners = [banner1, banner2, banner3, banner4, banner5];

const banners = [...baseBanners, ...baseBanners, ...baseBanners];

export const BannerCarousel = (): React.JSX.Element => {
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
          spaceBetween={-30}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
        >
          {banners.map((src, i) => (
            <SwiperSlide key={i}>
              <Slide alt={`Imagem ${i + 1}`} src={src} />
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
