import React from "react";
import styled from "styled-components";

const Section = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const Frame2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;

const TextWrapper2 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(20px, 3vw, 40px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
`;

const GroupWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const Group2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 283px;
  height: 58px;
  cursor: pointer;
`;

const Rectangle2 = styled.div`
  background-color: #ffc600;
  border-radius: 100px;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const TextWrapper3 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  z-index: 1;
`;

export const CadastrarGarantiaSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <Frame2>
        <TextWrapper2>
          Preencha o formulário, assista o vídeo e cadastre sua garantia!
        </TextWrapper2>
        <GroupWrapper>
          <Group2>
            <Rectangle2 />
            <TextWrapper3>Cadastrar Garantia</TextWrapper3>
          </Group2>
        </GroupWrapper>
      </Frame2>
    </Section>
  );
};
