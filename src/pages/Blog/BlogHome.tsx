import React from "react";
import styled from "styled-components";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { Group1Subsection } from "./sections/Group1Subsection/Group1Subsection";
import { Group2Subsection } from "./sections/Group2Subsection/Group2Subsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const StyledBlogHome = styled.div`
  margin-top: -174px;
  background-color: #ffffff;
  min-height: 5333px;
  min-width: 1440px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Overlap = styled.div`
  height: 1426px;
  left: 106px;
  position: absolute;
  top: 1996px;
  width: 1266px;
`;

const Group45 = styled.div`
  height: 60px;
  left: 520px;
  position: absolute;
  top: 5163px;
  width: 402px;
`;

const Rectangle6 = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 60px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
`;

const TextWrapper29 = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 25px;
  font-weight: 700;
  left: calc(50.00% - 200px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50.00% - 15px);
  width: 398px;
`;

const StyledVector = styled.img`
  aspect-ratio: 0.82;
  height: 43px;
  left: 38.75%;
  position: absolute;
  top: calc(50.00% + 17px);
  width: 61.25%;
`;

export const BlogHome = (): React.JSX.Element => {
  return (
    <StyledBlogHome data-model-id="1:6818">
      <GroupSubsection />
      <GroupWrapperSubsection />
      <DivWrapperSubsection />
      <Overlap>
        <DivSubsection />
        <SectionComponentNodeSubsection />
      </Overlap>
      <Group1Subsection />
      <Group2Subsection />
      <Group45>
        <Rectangle6 />
        <TextWrapper29>Ver todos os conteúdos</TextWrapper29>
      </Group45>
      <StyledVector
        alt="Vector"
        src="https://c.animaapp.com/w4wnBid1/img/vector.svg"
      />
    </StyledBlogHome>
  );
};
