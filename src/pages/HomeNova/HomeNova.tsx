import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import vitrineImg from "../../assets/vitrine.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

const BANNER_SRC = "https://c.animaapp.com/F8lHzCc8/img/banner-institucional-site-1.png";


const StyledHOME = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  gap: 40px;
  padding-bottom: 0;
  margin-top: -34px;

  @media (max-width: 600px) {
    gap: 24px;
  }

  & .camada-5 {
    display: none;
  }

  & .vitrine-title-wrapper {
    width: 100%;
    max-width: 1292px;
    padding: 0 24px;
    box-sizing: border-box;
  }

  & .vitrine-VONDER {
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
  }

  & .frame-80 {
    width: 100%;
    height: auto;
    display: block;
  }

  & .frame-80-swiper {
    width: 100%;
    margin: 0;
  }

  & .frame-81 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 100%;
    max-width: 1292px;
    box-sizing: border-box;
  }

  & .element-banner-principal-2 {
    aspect-ratio: 3.25;
    width: 100%;
    height: auto;
  }
`;

const HeroBanner = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  .hero-swiper {
    width: 100%;
  }

  .swiper-slide {
    overflow: hidden;
  }

  /* Gradient overlay inferior */
  .hero-slide::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 55%,
      rgba(0, 0, 0, 0.45) 100%
    );
    pointer-events: none;
  }

  /* Paginação */
  .swiper-pagination {
    bottom: 20px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 1;
    transition: background 0.3s, transform 0.3s;
  }

  .swiper-pagination-bullet-active {
    background: #f6be00;
    transform: scale(1.3);
  }

  @media (max-width: 600px) {
    .swiper-pagination {
      bottom: 12px;
    }
  }
`;

const HeroSlide = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const HeroImg = styled.img`
  aspect-ratio: 2.55;
  width: 100%;
  height: auto;
  max-height: 565px;
  object-fit: cover;
  display: block;

  @media (max-width: 600px) {
    aspect-ratio: 1.2;
    object-position: left center;
  }
`;

const banners = [BANNER_SRC, BANNER_SRC, BANNER_SRC];

export const HomeNova = (): React.JSX.Element => {
  return (
    <StyledHOME data-model-id="126:1454">
      <div className="camada-5" />

      <HeroBanner>
        <Swiper
          className="hero-swiper"
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          speed={900}
        >
          {banners.map((src, i) => (
            <SwiperSlide key={i}>
              <HeroSlide className="hero-slide">
                <HeroImg className="hero-img" alt={`Banner ${i + 1}`} src={src} />
              </HeroSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroBanner>

      <FrameSubsection />
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <GroupWrapperSubsection />
      <div className="vitrine-title-wrapper">
        <div className="vitrine-VONDER">
          Vitrine
          <br />
          VONDER
        </div>
      </div>
      <Swiper
        className="frame-80-swiper"
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={1.4}
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
      >
        {[vitrineImg, vitrineImg, vitrineImg, vitrineImg, vitrineImg, vitrineImg].map((img, i) => (
          <SwiperSlide key={i}>
            <img className="frame-80" alt="Vitrine VONDER" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SectionComponentNodeSubsection />
      <Frame1Subsection />
      <Frame2Subsection />
      <Frame3Subsection />
      <div className="frame-81">
        <img
          className="element-banner-principal-2"
          alt="Element banner principal"
          src="https://c.animaapp.com/F8lHzCc8/img/03-banner-principal-1920x480-px-aspiradores-2-1.png"
        />
      </div>
    </StyledHOME>
  );
};
