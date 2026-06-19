import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 16px;
  display: flex;
  gap: 40px;
  padding: 32px 64px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    padding: 32px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

const GeminiGeneratedImage = styled.img`
  aspect-ratio: 0.82;
  height: 300px;
  width: auto;
  object-fit: contain;

  @media (max-width: 900px) {
    height: 240px;
  }
`;

const FrameContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const TextTitle = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const TextSubtitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  max-width: 620px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <Card>
        <ImageWrapper>
          <GeminiGeneratedImage
            alt="FAQ VONDER"
            src="https://c.animaapp.com/lFhe4nh2/img/gemini-generated-image-9f5rdc9f5rdc9f5r-1@2x.png"
          />
        </ImageWrapper>
        <FrameContent>
          <TextTitle>FAQ</TextTitle>
          <TextSubtitle>DÚVIDAS FREQUENTES</TextSubtitle>
          <Description>
            Encontre respostas rápidas para as principais perguntas sobre
            produtos, garantia, assistência técnica, revenda e muito mais!
          </Description>
        </FrameContent>
      </Card>
    </Wrapper>
  );
};
