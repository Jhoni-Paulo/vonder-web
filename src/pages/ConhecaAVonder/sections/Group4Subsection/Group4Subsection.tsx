import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 550px;
  left: 168px;
  position: absolute;
  top: 6894px;
  width: 1104px;
`;

const Group34 = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  height: 425px;
  left: calc(50.00% - 348px);
  position: absolute;
  top: 72px;
  width: 900px;
`;

const Group35 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 327.28px;
  margin-left: 242px;
  margin-top: 49px;
  width: 554px;
`;

const TextWrapper29 = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -44px;
  width: 510px;
`;

const TextWrapper30 = styled.p`
  align-self: center;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 116px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  width: 550px;
`;

const FrameImage = styled.img`
  height: 43.28px;
  position: relative;
  width: 159.84px;
`;

const BImage = styled.img`
  aspect-ratio: 0.7;
  height: 550px;
  left: 0;
  position: absolute;
  top: 0;
  width: 386px;
`;

export const Group4Subsection = (): React.JSX.Element => {
  return (
    <Container>
      <Group34>
        <Group35>
          <TextWrapper29>
            Acompanhe também as Redes Sociais da OVD!
          </TextWrapper29>
          <TextWrapper30>
            Vivencie nossas iniciativas, novidades, avanços e momentos
            importantes, e acompanhe de perto como o Grupo OVD segue construindo
            seu caminho de inovação e evolução rumo ao sucesso.
          </TextWrapper30>
          <FrameImage
            alt="Frame"
            src="https://c.animaapp.com/fomi9SZH/img/frame-69224.svg"
          />
        </Group35>
      </Group34>
      <BImage
        alt="B"
        src="https://c.animaapp.com/fomi9SZH/img/m011t0832-b-16pro-mockup-12sep24-1.png"
      />
    </Container>
  );
};
