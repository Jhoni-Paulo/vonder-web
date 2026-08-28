import React from "react";
import styled from "styled-components";

const StyledFrame4Subsection = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 84px;
  position: relative;
  width: 1124px;

  @media (max-width: 1000px) {
    align-items: center;
    box-sizing: border-box;
    max-width: 640px;
    padding: 0 24px;
    width: 100%;
  }
`;

const Group23 = styled.div`
  height: 570px;
  position: relative;
  width: 1124px;

  @media (max-width: 1000px) {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    height: auto;
    width: 100%;
  }
`;

const Frame26 = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 445px;
  justify-content: center;
  left: 204px;
  padding: 39px 118px;
  position: absolute;
  /* Centraliza o card (445px) verticalmente no Group23 (570px):
     (570 - 445) / 2 = 62.5px em cima e embaixo. */
  top: 62.5px;
  width: 920px;

  @media (max-width: 1000px) {
    align-items: stretch;
    height: auto;
    left: auto;
    padding: 32px 24px;
    position: relative;
    top: auto;
    width: 100%;
  }
`;

const RectangleWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 920px;

  @media (max-width: 1000px) {
    inset: 0;
    padding: 0;
    width: 100%;
  }
`;

const Rectangle = styled.div`
  align-self: stretch;
  background-color: #f2f2f2;
  border-radius: 20px;
  height: 425px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

const Frame27 = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 550px;

  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Heading = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 510px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  align-self: stretch;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: relative;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const SocialMediaImage = styled.img`
  flex: 0 0 auto;
  max-width: 100%;
  position: relative;
`;

const BWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;

  @media (max-width: 1000px) {
    padding: 0;
    position: relative;
  }
`;

const PhoneImage = styled.img`
  aspect-ratio: 0.7;
  height: 550px;
  position: relative;
  width: 386px;

  @media (max-width: 1000px) {
    height: auto;
    max-width: 100%;
    width: 280px;
  }
`;

export const Frame4Subsection = (): React.JSX.Element => {
  return (
    <StyledFrame4Subsection>
      <Group23>
        <Frame26>
          <RectangleWrapper>
            <Rectangle />
          </RectangleWrapper>
          <Frame27>
            <Heading>Acompanhe também as Redes Sociais da OVD!</Heading>
            <Description>
              Vivencie nossas iniciativas, novidades, avanços e momentos
              importantes, e acompanhe de perto como o Grupo OVD segue
              construindo seu caminho de inovação e evolução rumo ao sucesso.
            </Description>
            <SocialMediaImage
              alt="Frame"
              src="https://c.animaapp.com/HXGo4e2k/img/frame-69224.svg"
            />
          </Frame27>
        </Frame26>
        <BWrapper>
          <PhoneImage
            alt="B"
            src="https://c.animaapp.com/HXGo4e2k/img/m011t0832-b-16pro-mockup-12sep24-1.png"
          />
        </BWrapper>
      </Group23>
    </StyledFrame4Subsection>
  );
};
