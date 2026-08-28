import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* A imagem estoura 118px acima da seção (352px numa seção de 234px). Empurra
     a seção para baixo para deixar ~60px entre o breadcrumb e o topo da imagem
     (94px de sobreposição atual + 60px de folga). */
  margin-top: 154px;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

const Card = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 16px;
  display: flex;
  gap: 40px;
  height: 234px;
  overflow: visible;
  padding: 0 64px;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    height: auto;
    padding: 32px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: flex-end;
  justify-content: center;

  @media (max-width: 900px) {
    align-self: center;
  }
`;

const GeminiGeneratedImage = styled.img`
  aspect-ratio: 0.82;
  display: block;
  height: 352px;
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
