import React from "react";
import styled from "styled-components";
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
  padding-bottom: 60px;

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

  & .frame-79 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 1292px;
  }

  & .vitrine-VONDER-wrapper {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    width: 100%;
  }

  & .vitrine-VONDER {
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
  }

  & .frame-80 {
    width: 100%;
    height: auto;
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
      <div className="frame-79">
        <div className="vitrine-VONDER-wrapper">
          <div className="vitrine-VONDER">
            Vitrine
            <br />
            VONDER
          </div>
        </div>
        <img
          className="frame-80"
          alt="Frame"
          src="https://c.animaapp.com/F8lHzCc8/img/frame-235.svg"
        />
      </div>
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
