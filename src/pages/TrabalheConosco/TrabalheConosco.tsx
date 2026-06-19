import React, { useState } from "react";
import styled from "styled-components";
import { AVonderUmaMarcaWrapperSubsection } from "./sections/AVonderUmaMarcaWrapperSubsection";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import {
  FrameWrapperSubsection,
  tabs,
} from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";

export const TrabalheConosco = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTrabalheConosco data-model-id="1:8728">
      <div className="p-gina-inicial-wrapper">
        <p className="p-gina-inicial">
          <span className="text-wrapper-35">Página inicial &gt; </span>
          <span className="text-wrapper-36">Trabalhe conosco</span>
        </p>
      </div>
      <FrameSubsection />
      <div className="frame-104">
        <div className="text-wrapper-37">Sobre a VONDER</div>
      </div>
      <AVonderUmaMarcaWrapperSubsection />
      <img
        className="frame-105"
        alt="Frame"
        src="https://c.animaapp.com/fkOynynE/img/frame-236.svg"
      />
      <div className="frame-104">
        <p className="text-wrapper-37">
          Como é o dia a dia de trabalho na VONDER?
        </p>
      </div>
      <div className="frame-104">
        <p className="text-wrapper-38">
          Acreditamos que a chave para o sucesso está em um ambiente de trabalho
          colaborativo, inovador e respeitoso. Aqui, cada membro da equipe tem a
          liberdade de ser autêntico, desafiando o status quo e criando soluções
          extraordinárias para o mercado.
          <br />
          <br />
          Os pilares da nossa cultura são:
        </p>
      </div>
      <GroupSubsection />
      <div className="frame-104">
        <div className="text-wrapper-37">Diversidade e inclusão</div>
      </div>
      <div className="frame-104">
        <p className="text-wrapper-38">
          Criamos um ambiente de trabalho que celebra as diferenças, respeitando
          e acolhendo todos, independentemente de gênero, raça, orientação
          sexual ou deficiência.
          <br />
          Com isso, garantimos um ambiente mais inovador e colaborativo, onde
          todos têm a oportunidade de ser autênticos e contribuir para o
          crescimento da empresa.
          <br />
          Continuamos a trabalhar para construir um futuro mais plural, pois
          sabemos que a diversidade é a chave para nossa evolução e sucesso
          contínuos.
        </p>
      </div>
      <img
        className="frame-106"
        alt="Frame"
        src="https://c.animaapp.com/fkOynynE/img/frame-462.svg"
      />
      <FrameWrapperSubsection active={activeTab} onSelect={setActiveTab} />
      <GroupWrapperSubsection title={tabs[activeTab].strong} activeTab={activeTab} />
      <DivWrapperSubsection />
      <DivSubsection />
    </StyledTrabalheConosco>
  );
};

const StyledTrabalheConosco = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 32px 95px 80px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 24px 48px 64px;
  }

  @media (max-width: 600px) {
    padding: 20px 20px 48px;
    gap: 28px;
  }

  & .p-gina-inicial-wrapper {
    align-items: center;
    display: flex;
    gap: 10px;
    padding: 10px;
    width: 100%;
    max-width: 1228px;
  }

  & .p-gina-inicial {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin: 0;
  }

  & .text-wrapper-35 {
    font-weight: 300;
  }

  & .text-wrapper-36 {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  & .frame-104 {
    align-items: center;
    display: flex;
    gap: 10px;
    padding: 10px;
    width: 100%;
    max-width: 1228px;
    box-sizing: border-box;
  }

  & .text-wrapper-37 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin: 0;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  & .frame-105 {
    align-self: stretch;
    width: auto;
    max-width: none;
    margin-left: -95px;
    margin-right: -95px;
    height: auto;
    display: block;

    @media (max-width: 1024px) {
      margin-left: -48px;
      margin-right: -48px;
    }

    @media (max-width: 600px) {
      margin-left: -20px;
      margin-right: -20px;
    }
  }

  & .text-wrapper-38 {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.5;
    margin: 0;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  & .frame-106 {
    width: 100%;
    max-width: 1228px;
    height: auto;
  }
`;
