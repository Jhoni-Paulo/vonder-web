import React from "react";
import styled from "styled-components";
import { BeneficiosSection } from "./sections/BeneficiosSection";
import { CtaDuvidas } from "../../components/CtaDuvidas/CtaDuvidas";
import { FbtsSobreSection } from "./sections/FbtsSobreSection";
import { FbtsSoldaSection } from "./sections/FbtsSoldaSection";
import { GenteSection } from "./sections/GenteSection";
import { HeroSection } from "./sections/HeroSection";
import { OvdReciclaSection } from "./sections/OvdReciclaSection";
import { RohsSection } from "./sections/RohsSection";
import { SegmentosSection } from "./sections/SegmentosSection";
import { SustentabilidadeSection } from "./sections/SustentabilidadeSection";
import { Conteudo } from "./styles";

const Pagina = styled.main`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 88px;
  overflow-x: hidden;
  padding-bottom: 96px;
  width: 100%;

  @media (max-width: 900px) {
    gap: 56px;
    padding-bottom: 56px;
  }
`;

const Divisor = styled.img`
  height: auto;
  width: 100%;
`;

export const NossosDiferenciais = (): React.JSX.Element => {
  return (
    <Pagina>
      <HeroSection />
      <GenteSection />
      <SustentabilidadeSection />
      <RohsSection />
      <OvdReciclaSection />
      <Conteudo>
        <Divisor
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/GpZzux2v/img/frame-70005.svg"
        />
      </Conteudo>
      <FbtsSoldaSection />
      <FbtsSobreSection />
      <SegmentosSection />
      <BeneficiosSection />
      <Conteudo>
        <CtaDuvidas />
      </Conteudo>
    </Pagina>
  );
};

export default NossosDiferenciais;
