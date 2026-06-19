import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1228px;
`;

const Card = styled.div`
  align-items: stretch;
  background-color: #f6be00;
  border-radius: 16px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding: 48px 60px 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 32px 0;
    gap: 32px;
  }
`;

const Text = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.15;
  margin: 0;
  max-width: 497px;
  flex: 1;
  align-self: center;
  padding-bottom: 48px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const LightItalic = styled.span`
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-style: italic;
  font-weight: 300;
`;

const BoldItalic = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const Collage = styled.div`
  position: relative;
  flex-shrink: 0;
  align-self: flex-end;
  width: 460px;
  aspect-ratio: 587 / 388;

  @media (max-width: 1100px) {
    width: 380px;
  }

  @media (max-width: 600px) {
    width: 280px;
  }
`;

const ImgBack = styled.img`
  position: absolute;
  left: 0;
  top: 7.2%;
  width: 46.8%;
  height: auto;
`;

const ImgRight = styled.img`
  position: absolute;
  left: 60.6%;
  top: 6.2%;
  width: 39.4%;
  height: auto;
`;

const ImgFront = styled.img`
  position: absolute;
  left: 25.6%;
  top: 0;
  width: 51.1%;
  height: auto;
`;

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <Card>
        <Text>
          <LightItalic>Já pensou em trabalhar com </LightItalic>
          <BoldItalic>
            o maior e mais completo mix de ferramentas profissionais e
            industriais da América Latina?
          </BoldItalic>
        </Text>
        <Collage>
          <ImgBack alt="VONDER" src="https://c.animaapp.com/fkOynynE/img/c-2@2x.png" />
          <ImgRight alt="VONDER" src="https://c.animaapp.com/fkOynynE/img/c-3@2x.png" />
          <ImgFront alt="VONDER" src="https://c.animaapp.com/fkOynynE/img/c-1@2x.png" />
        </Collage>
      </Card>
    </Wrapper>
  );
};
