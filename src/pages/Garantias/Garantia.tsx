import React from "react";
import styled from "styled-components";
import { CadastrarGarantiaSubsection } from "./sections/CadastrarGarantiaSubsection/CadastrarGarantiaSubsection";
import { ConfiabilidadeSubsection } from "./sections/ConfiabilidadeSubsection";
import { ConfianaSuporteESubsection } from "./sections/ConfianaSuporteESubsection/ConfianaSuporteESubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { OutrasOpEsQueVocWrapperSubsection } from "./sections/OutrasOpEsQueVocWrapperSubsection";

const Container = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 62px;
  padding: 0 0 80px;
  width: 100%;
  box-sizing: border-box;
`;

export const Garantia = (): React.JSX.Element => {
  return (
    <Container className="GARANTIA" data-model-id="57:1478">
      <ConfiabilidadeSubsection />
      <CadastrarGarantiaSubsection />
      <ConfianaSuporteESubsection />
      <FrameSubsection />
      <OutrasOpEsQueVocWrapperSubsection />
      <FrameWrapperSubsection />
      <GroupWrapperSubsection />
    </Container>
  );
};
