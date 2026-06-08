import React from "react";
import styled from "styled-components";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";

const StyledFAQ = styled.div`
  margin-top: -238px;
  background-color: #ffffff;
  min-height: 5581px;
  min-width: 1440px;
  position: relative;
  width: 100%;
`;

const PGinaInicialFAQ = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: calc(50.00% - 614px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 216px;
  width: 628px;
`;

const Span = styled.span`
  font-weight: 300;
`;

const TextWrapper12 = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const TextWrapper13 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  left: calc(50.00% - 184px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: calc(50.00% - 2652px);
  white-space: nowrap;
`;

const GeminiGenerated = styled.img`
  aspect-ratio: 0.82;
  height: 352px;
  left: 194px;
  position: absolute;
  top: 216px;
  width: 289px;
`;

export const Faq = (): React.JSX.Element => {
  return (
    <StyledFAQ data-model-id="1:10631">
      <PGinaInicialFAQ>
        <Span>Página inicial &gt; </Span>
        <TextWrapper12>FAQ</TextWrapper12>
      </PGinaInicialFAQ>
      <FrameSubsection />
      <GroupSubsection />
      <TextWrapper13>O que você procura?</TextWrapper13>
      <GeminiGenerated
        alt="Gemini generated"
        src="https://c.animaapp.com/ABVT0Ado/img/gemini-generated-image-9f5rdc9f5rdc9f5r-1@2x.png"
      />
      <FrameWrapperSubsection />
    </StyledFAQ>
  );
};
