import React from "react";
import styled from "styled-components";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection/Frame1Subsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const StyledBlogHome = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 56px;
  overflow-x: hidden;
  padding-bottom: 96px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    gap: 40px;
    padding-bottom: 56px;
  }

  & .frame-42 {
    align-items: center;
    background-color: #000000;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    height: 60px;
    justify-content: center;
    max-width: 100%;
    padding: 15px 1px;
    position: relative;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    width: 400px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px #00000040;
    }
  }

  & .text-wrapper-30 {
    color: #f6be00;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 398px;

    @media (max-width: 600px) {
      font-size: 20px;
      width: auto;
    }
  }
`;

export const BlogHome = (): React.JSX.Element => {
  return (
    <StyledBlogHome data-model-id="272:1473">
      <FrameSubsection />
      <FrameWrapperSubsection />
      <DivWrapperSubsection />
      <GroupWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <Frame1Subsection />
      <div className="frame-42">
        <div className="text-wrapper-30">Ver todos os conteúdos</div>
      </div>
    </StyledBlogHome>
  );
};
