import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface ImageCarouselItem {
  id: string | number;
  src: string;
  alt: string;
  /** When true, selecting this item shows `matrixSrc` in a 360 viewer instead of a static image. */
  is360?: boolean;
  /** Sprite sheet used by the 360 viewer. Required when `is360` is true. */
  matrixSrc?: string;
}

interface ImageCarouselProps {
  items: ImageCarouselItem[];
  selectedId?: string | number;
  onItemSelect?: (item: ImageCarouselItem) => void;
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
  width: 44px;
  height: 44px;
  z-index: 2;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &.arrow-left {
    left: -60px;
  }

  &.arrow-right {
    right: -60px;
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

  .swiper-slide {
    width: auto;
    height: auto;
  }
`;

const Slide = styled.div<{ $active?: boolean }>`
  align-items: center;
  background-color: transparent;
  border: 2px solid ${({ $active }) => ($active ? "#f6be00" : "transparent")};
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 220px;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  transition: border-color 0.2s ease;
  width: 220px;

  @media (max-width: 600px) {
    height: 160px;
    width: 160px;
  }
`;

const SlideImage = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const ImageCarousel = ({
  items,
  selectedId,
  onItemSelect,
}: ImageCarouselProps): React.JSX.Element => {
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
            <SwiperSlide key={`${item.id}-${i}`}>
              <Slide
                $active={item.id === selectedId}
                onClick={() => onItemSelect?.(item)}
              >
                <SlideImage alt={item.alt} src={item.src} />
              </Slide>
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
