import React from "react";
import styled from "styled-components";

const GroupWrapperSubsectionContainer = styled.div`
  align-self: center;
  background-color: #f2f2f2;
  display: flex;
  height: 206px;
  justify-content: center;
  margin-top: 60px;
  width: 1440px;
`;

const Group2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 126px;
  margin-left: 2px;
  margin-top: 40px;
  width: 1022px;
`;

const TextWrapper2 = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 40px;
  font-style: italic;
  font-weight: 700;
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  text-align: center;
  white-space: nowrap;
  width: 1020px;
`;

const GroupWrapper = styled.div`
  display: flex;
  margin-left: 370px;
  width: 281px;
`;

const Group3 = styled.div`
  height: 58px;
  position: relative;
  width: 283px;
`;

const Rectangle2 = styled.div`
  background-color: #ffc600;
  border-radius: 100px;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 281px;
`;

const TextWrapper3 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  height: 43.1%;
  left: 12.37%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 31.03%;
  width: 74.2%;
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <GroupWrapperSubsectionContainer>
      <Group2>
        <TextWrapper2>
          Preencha o formulário, assista o vídeo e cadastre sua garantia!
        </TextWrapper2>
        <GroupWrapper>
          <Group3>
            <Rectangle2 />
            <TextWrapper3>Cadastrar Garantia</TextWrapper3>
          </Group3>
        </GroupWrapper>
      </Group2>
    </GroupWrapperSubsectionContainer>
  );
};
