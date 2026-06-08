import React from "react";
import styled from "styled-components";

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <FrameSubsectionWrapper>
      <Group35>
        <Group36>
          <Group37>
            <Rectangle6 />
            <TextWrapper27>Busque por endereço, CEP ou local</TextWrapper27>
            <Rectangle7 />
            <Vector4
              alt="Vector"
              src="https://c.animaapp.com/ywgOupuM/img/vector-5.svg"
            />
          </Group37>
          <EncontreUm2>
            <TextWrapper28>Encontre um </TextWrapper28>
            <TextWrapper29>Revendedor VONDER</TextWrapper29>
          </EncontreUm2>
        </Group36>
      </Group35>
    </FrameSubsectionWrapper>
  );
};

const FrameSubsectionWrapper = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #00000040;
  display: flex;
  filter: blur(5px);
  height: 151px;
  left: -424px;
  min-width: 500px;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
  top: 275px;
`;

const Group35 = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
`;

const Group36 = styled.div`
  height: 101px;
  margin-left: 2px;
  position: relative;
  width: 452px;
`;

const Group37 = styled.div`
  height: 60px;
  left: calc(50.00% - 226px);
  position: absolute;
  top: calc(50.00% - 10px);
  width: 452px;
`;

const Rectangle6 = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #979797;
  border-radius: 15px;
  height: 60px;
  left: calc(50.00% - 226px);
  position: absolute;
  top: calc(50.00% - 30px);
  width: 450px;
`;

const TextWrapper27 = styled.p`
  color: #666666;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  left: calc(50.00% - 163px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: calc(50.00% - 11px);
`;

const Rectangle7 = styled.div`
  background-color: #f6be00;
  border-radius: 100px;
  height: 40px;
  left: 400px;
  position: absolute;
  top: 10px;
  width: 40px;
`;

const Vector4 = styled.img`
  height: 20px;
  left: calc(50.00% + 186px);
  position: absolute;
  top: calc(50.00% - 10px);
  width: 16px;
`;

const EncontreUm2 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: calc(50.00% - 226px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
`;

const TextWrapper28 = styled.span`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
`;

const TextWrapper29 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;
