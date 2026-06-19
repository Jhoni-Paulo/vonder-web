import React from "react";
import styled from "styled-components";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";

const StyledFAQ = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 95px 80px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 24px 48px 64px;
  }

  @media (max-width: 600px) {
    padding: 20px 20px 48px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1230px;
`;

const BreadcrumbWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  width: 100%;
`;

const BreadcrumbText = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

const BreadcrumbSpan = styled.span`
  font-weight: 300;
`;

const BreadcrumbTitle = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const SearchTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const Faq = (): React.JSX.Element => {
  return (
    <StyledFAQ data-model-id="1:10631">
      <Content>
        <BreadcrumbWrapper>
          <BreadcrumbText>
            <BreadcrumbSpan>Página inicial &gt; </BreadcrumbSpan>
            <BreadcrumbTitle>FAQ</BreadcrumbTitle>
          </BreadcrumbText>
        </BreadcrumbWrapper>
        <FrameSubsection />
        <SearchTitle>O que você procura?</SearchTitle>
        <FrameWrapperSubsection />
        <DivWrapperSubsection />
      </Content>
    </StyledFAQ>
  );
};
