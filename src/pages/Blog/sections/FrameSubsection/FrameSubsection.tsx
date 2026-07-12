import React from "react";
import styled from "styled-components";

const FrameSubsectionContainer = styled.div`
  align-items: center;
  align-self: stretch;
  background-image: url(https://c.animaapp.com/bNHZtEYo/img/frame-419.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 0px 0px 15px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 39px;
  height: 564px;
  padding: 55px 696px 123px 96px;
  position: relative;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 55px 96px 123px;
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: 420px;
    padding: 32px 20px 40px;
  }
`;

const Frame = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

const BreadcrumbParagraph = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 628px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const LightText = styled.span`
  font-weight: 300;
`;

const BoldText = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 35px;
  max-width: 100%;
  position: relative;
  width: 600px;

  @media (max-width: 600px) {
    gap: 22px;
  }
`;

const Title = styled.p`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 60px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;

  @media (max-width: 900px) {
    font-size: 44px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const FrameWrapper = styled.div`
  align-items: flex-start;
  background-color: #f6be00;
  border-radius: 100px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50px;
  max-width: 100%;
  padding: 13px 108px;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  width: 286px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const InnerWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
`;

const FrameLinkText = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <FrameSubsectionContainer>
      <Frame>
        <BreadcrumbParagraph>
          <LightText>Página inicial &gt; </LightText>
          <BoldText>Blog VONDER</BoldText>
        </BreadcrumbParagraph>
      </Frame>
      <ContentWrapper>
        <Title>
          Qual a diferença entre Esmerilhadeira, Lixadeira e Politriz?
        </Title>
        <FrameWrapper>
          <InnerWrapper>
            <FrameLinkText>Ler mais</FrameLinkText>
          </InnerWrapper>
        </FrameWrapper>
      </ContentWrapper>
    </FrameSubsectionContainer>
  );
};
