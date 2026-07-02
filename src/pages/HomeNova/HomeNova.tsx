import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import vitrineImg from "../../assets/vitrine.png";
import "swiper/css";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

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

  & .banner-institucional-wrapper {
    display: flex;
    width: 100%;
  }

  & .banner-institucional {
    aspect-ratio: 2.55;
    height: auto;
    object-fit: cover;
    width: 100%;
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

export const HomeNova = (): React.JSX.Element => {
  return (
    <StyledHOME data-model-id="126:1454">
      <div className="camada-5" />
      <div className="banner-institucional-wrapper">
        <img
          className="banner-institucional"
          alt="Banner institucional"
          src="https://c.animaapp.com/F8lHzCc8/img/banner-institucional-site-1.png"
        />
      </div>
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
