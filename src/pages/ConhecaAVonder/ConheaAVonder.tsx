import React from "react";
import styled from "styled-components";
import { BannerCarousel } from "./sections/BannerCarousel";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { Frame4Subsection } from "./sections/Frame4Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import { VitrineCarousel } from "../../components/VitrineCarousel/VitrineCarousel";

const StyledConheaAVonder = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 107px;
  /* clip horizontal overflow (wide/full-bleed sections) but keep vertical
     visible so the hero's -20px overlap can sit behind the sticky header. */
  overflow-x: clip;
  position: relative;
  width: 100%;

  .frame-29 {
    align-self: stretch;
    height: 440px;
    position: relative;
    width: 100%;
  }

  .mask-group-wrapper {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 100%;
  }

  .video-embed {
    aspect-ratio: 16 / 9;
    position: relative;
    width: 100%;
  }

  .video-embed iframe {
    border: 0;
    display: block;
    height: 100%;
    inset: 0;
    position: absolute;
    width: 100%;
  }

  .frame-30 {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
    padding: 10px 24px;
    position: relative;
  }

  .text-wrapper-36 {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    max-width: 100%;
    position: relative;
    text-align: center;
    width: 1228px;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  @media (max-width: 900px) {
    gap: 72px;
  }

  @media (max-width: 600px) {
    gap: 48px;
  }
`;

export const ConheaAVonder = (): React.JSX.Element => {
  return (
    <StyledConheaAVonder className="CONHEA-a-VONDER" data-model-id="298:1266">
      <FrameSubsection />
      <FrameWrapperSubsection />
      <BannerCarousel />
      <GroupWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <VitrineCarousel />
      <Frame1Subsection />
      <Frame2Subsection />
      <div className="mask-group-wrapper">
        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/xCqS9DO0Nzg"
            title="Vídeo institucional VONDER"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <div className="frame-30">
        <p className="text-wrapper-36">
          A evolução contínua de suas ferramentas comprova como é bom trabalhar
          com a VONDER, refletindo na satisfação de seus clientes e
          revendedores, um dos motivos que a tornaram uma das mais importantes
          marcas de ferramentas do mercado brasileiro.
        </p>
      </div>
      <Frame3Subsection />
      <Frame4Subsection />
    </StyledConheaAVonder>
  );
};

export default ConheaAVonder;
