import React from "react";
import styled from "styled-components";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { Group1Subsection } from "./sections/Group1Subsection";
import { Group2Subsection } from "./sections/Group2Subsection";
import { Group3Subsection } from "./sections/Group3Subsection/Group3Subsection";
import { Group4Subsection } from "./sections/Group4Subsection";
import { GroupSubsection } from "./sections/GroupSubsection/GroupSubsection";
import { ConfiraRedesSociais } from "../../components/ConfiraRedesSociais";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

const StyledConheaAVonder = styled.div`
  background-color: #ffffff;
  margin-top: -180px;
  min-height: 7494px;
  min-width: 1440px;
  overflow: hidden;
  position: relative;
  width: 100%;

  & .camada-3 {
    aspect-ratio: 5.46;
    height: 306px;
    left: 69px;
    position: absolute;
    top: 2408px;
    width: 1371px;
  }

  & .mask-group-5 {
    height: 500px;
    left: 0;
    position: absolute;
    top: 5282px;
    width: 1440px;
  }

  & .text-wrapper-36 {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    left: calc(50.00% - 614px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 5820px;
    width: 1228px;
  }

  & .group-52 {
    height: 420px;
    left: 0;
    position: absolute;
    top: 1152px;
    width: 1440px;
  }

  & .camada-4 {
    height: 33px;
    left: 1359px;
    position: absolute;
    top: 1345px;
    width: 33px;
  }

  & .group-53 {
    height: 400px;
    left: 0;
    position: absolute;
    top: 3818px;
    width: 1440px;
  }

  & .camada-5 {
    height: 33px;
    left: 53px;
    position: absolute;
    top: 1345px;
    width: 33px;
  }
`;

export const ConheaAVonder = (): React.JSX.Element => {
  return (
    <StyledConheaAVonder className="CONHEA-a-VONDER" data-model-id="1:5099">
      <img
        className="camada-3"
        alt="Camada"
        src="https://c.animaapp.com/fomi9SZH/img/camada-1-1.png"
      />
      <GroupSubsection />
      <img
        className="mask-group-5"
        alt="Mask group"
        src="https://c.animaapp.com/fomi9SZH/img/mask-group.png"
      />
      <GroupWrapperSubsection />
      <p className="text-wrapper-36">
        A evolução contínua de suas ferramentas comprova como é bom trabalhar
        com a VONDER, refletindo na satisfação de seus clientes e revendedores,
        um dos motivos que a tornaram uma das mais importantes marcas de
        ferramentas do mercado brasileiro.
      </p>
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <Group1Subsection />
      <img
        className="group-52"
        alt="Group"
        src="https://c.animaapp.com/fomi9SZH/img/group-69271.png"
      />
      <Group2Subsection />
      <img
        className="camada-4"
        alt="Camada"
        src="https://c.animaapp.com/fomi9SZH/img/camada-1.svg"
      />
      <img
        className="group-53"
        alt="Group"
        src="https://c.animaapp.com/fomi9SZH/img/group-69297.png"
      />
      <img
        className="camada-5"
        alt="Camada"
        src="https://c.animaapp.com/fomi9SZH/img/camada-1-2.svg"
      />
      <Group3Subsection />
      <Group4Subsection />
      <ConfiraRedesSociais top="5980px" />
    </StyledConheaAVonder>
  );
};
