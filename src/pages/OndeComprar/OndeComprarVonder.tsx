import React from "react";
import styled from "styled-components";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { Group1Subsection } from "./sections/Group1Subsection/Group1Subsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const Container = styled.div`
  background-color: #ffffff;
  margin-top: -174px;
  min-height: 2493px;
  min-width: 1440px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Group38 = styled.img`
  height: 100px;
  left: calc(50.00% - 114px);
  position: absolute;
  top: 474px;
  width: 30px;
`;

const Title = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 45px;
  font-weight: 400;
  left: calc(50.00% - 209px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1428px;
`;

const TextWrapper30 = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const TextWrapper31 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const Vector5 = styled.img`
  height: 2px;
  left: calc(50.00% - 614px);
  position: absolute;
  top: calc(50.00% - 556px);
  width: 1228px;
`;

export const OndeComprarVonder = (): React.JSX.Element => {
  return (
    <Container data-model-id="1:8250">
      <GroupSubsection />
      <GroupWrapperSubsection />
      <Group38
        alt="Group"
        src="https://c.animaapp.com/ywgOupuM/img/group-69191@2x.png"
      />
      <DivWrapperSubsection />
      <DivSubsection />
      <Title>
        <TextWrapper30>
          Outras opções que você
          <br />
        </TextWrapper30>
        <TextWrapper31>pode estar buscando</TextWrapper31>
      </Title>
      <Vector5
        alt="Vector"
        src="https://c.animaapp.com/ywgOupuM/img/vector-7.svg"
      />
      <SectionComponentNodeSubsection />
      <Group1Subsection />
      <FrameSubsection />
    </Container>
  );
};
