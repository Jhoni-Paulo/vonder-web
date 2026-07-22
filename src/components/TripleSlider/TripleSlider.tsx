import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Controller, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/controller";

export interface TripleSliderItem {
  id: string | number;
  content: React.ReactNode;
}

interface TripleSliderProps {
  items: TripleSliderItem[];
  showArrows?: boolean;
  prevArrowSrc?: string;
  nextArrowSrc?: string;
  /** Size (px) of the main slide (width & height). Defaults to 500. */
  size?: number;
}

const Root = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 32px 0;
  position: relative;
  width: 100%;
`;

const CenterStack = styled.div`
  flex: 1 1 0;
  min-width: 0;
  perspective: 1200px;
  position: relative;
`;

const Arrow = styled.img`
  cursor: pointer;
  flex: 0 0 auto;
  height: 44px;
  transition: opacity 0.2s ease;
  width: 44px;
  z-index: 20;

  &:hover {
    opacity: 0.7;
  }
`;

const MainSwiperWrap = styled.div<{ $size: number }>`
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  height: ${({ $size }) => $size}px;
  margin: 0 auto;
  max-width: ${({ $size }) => $size}px;
  position: relative;
  width: 100%;
  z-index: 10;

  .swiper {
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    border-radius: 15px;
    height: 100%;
    mask-image: radial-gradient(white, black);
    width: 100%;
  }

  @media (max-width: 900px) {
    height: 380px;
    max-width: 380px;
  }

  @media (max-width: 600px) {
    height: 300px;
    max-width: 300px;
  }
`;

const SideSwiperWrap = styled.div<{ $side: "prev" | "next"; $size: number }>`
  cursor: pointer;
  height: ${({ $size }) => $size}px;
  opacity: 0.25;
  position: absolute;
  top: 50%;
  transition: opacity 0.25s ease;
  user-select: none;
  width: ${({ $size }) => $size}px;

  .swiper {
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    border-radius: 15px;
    height: 100%;
    mask-image: radial-gradient(white, black);
    width: 100%;
  }

  ${({ $side }) =>
    $side === "prev"
      ? "right: 50%; transform: translateY(-50%) scale(0.75) rotateY(10deg);"
      : "left: 50%; transform: translateY(-50%) scale(0.75) rotateY(-10deg);"}

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: 900px) {
    height: 380px;
    width: 380px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const rotateToFront = <T,>(arr: T[]): T[] =>
  arr.length > 1 ? [arr[arr.length - 1], ...arr.slice(0, -1)] : arr;

const rotateToBack = <T,>(arr: T[]): T[] =>
  arr.length > 1 ? [...arr.slice(1), arr[0]] : arr;

export const TripleSlider = ({
  items,
  showArrows = false,
  prevArrowSrc = "https://c.animaapp.com/F8lHzCc8/img/camada-1-2.svg",
  nextArrowSrc = "https://c.animaapp.com/F8lHzCc8/img/camada-1-3.svg",
  size = 500,
}: TripleSliderProps): React.JSX.Element => {
  const mainRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<SwiperType | null>(null);
  const nextRef = useRef<SwiperType | null>(null);
  const [readyTick, setReadyTick] = useState(0);

  const prevItems = rotateToFront(items);
  const nextItems = rotateToBack(items);

  useEffect(() => {
    const main = mainRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;
    if (!main || !prev || !next) return;
    main.controller.control = [prev, next];
    prev.controller.control = main;
    next.controller.control = main;
  }, [readyTick]);

  const bumpReady = () => setReadyTick((t) => t + 1);

  return (
    <Root>
      {showArrows && (
        <Arrow
          alt="Anterior"
          src={prevArrowSrc}
          onClick={() => mainRef.current?.slidePrev()}
        />
      )}
      <CenterStack>
        <SideSwiperWrap
          $side="prev"
          $size={size}
          onClick={() => mainRef.current?.slidePrev()}
        >
          <Swiper
            modules={[Controller, Parallax]}
            speed={600}
            loop
            parallax
            allowTouchMove={false}
            onSwiper={(s) => {
              prevRef.current = s;
              bumpReady();
            }}
          >
            {prevItems.map((item) => (
              <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
            ))}
          </Swiper>
        </SideSwiperWrap>
        <MainSwiperWrap $size={size}>
          <Swiper
            modules={[Controller, Parallax]}
            speed={600}
            loop
            parallax
            grabCursor
            onSwiper={(s) => {
              mainRef.current = s;
              bumpReady();
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
            ))}
          </Swiper>
        </MainSwiperWrap>
        <SideSwiperWrap
          $side="next"
          $size={size}
          onClick={() => mainRef.current?.slideNext()}
        >
          <Swiper
            modules={[Controller, Parallax]}
            speed={600}
            loop
            parallax
            allowTouchMove={false}
            onSwiper={(s) => {
              nextRef.current = s;
              bumpReady();
            }}
          >
            {nextItems.map((item) => (
              <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
            ))}
          </Swiper>
        </SideSwiperWrap>
      </CenterStack>
      {showArrows && (
        <Arrow
          alt="Próximo"
          src={nextArrowSrc}
          onClick={() => mainRef.current?.slideNext()}
        />
      )}
    </Root>
  );
};
