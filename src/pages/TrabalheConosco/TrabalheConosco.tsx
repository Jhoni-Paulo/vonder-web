import React from "react";
import styled, { css } from "styled-components";
import { AVonderUmaMarcaSubsection } from "./sections/AVonderUmaMarcaSubsection/AVonderUmaMarcaSubsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { Group1Subsection } from "./sections/Group1Subsection/Group1Subsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

export const TrabalheConosco = (): React.JSX.Element => {
  return (
    <Container data-model-id="1:9136">
      <Breadcrumb>
        <BreadcrumbText>Página inicial &gt; </BreadcrumbText>
        <BreadcrumbHighlight>Trabalhe conosco</BreadcrumbHighlight>
      </Breadcrumb>
      <GroupSubsection />
      <SectionHeading>Sobre a VONDER</SectionHeading>
      <AVonderUmaMarcaSubsection />
      <FullWidthImage
        className="group-46"
        alt="Group"
        src="https://c.animaapp.com/jIsSRIVa/img/group-236.png"
      />
      <SectionHeadingParagraph>
        Como é o dia a dia de trabalho na VONDER?
      </SectionHeadingParagraph>
      <StoryParagraph>
        Acreditamos que a chave para o sucesso está em um ambiente de trabalho
        colaborativo, inovador e respeitoso. Aqui, cada membro da equipe tem a
        liberdade de ser autêntico, desafiando o status quo e criando soluções
        extraordinárias para o mercado.
        <br />
        <br />
        Os pilares da nossa cultura são:
      </StoryParagraph>
      <GroupWrapperSubsection />
      <SectionHeadingSecondary>Diversidade e inclusão</SectionHeadingSecondary>
      <StoryParagraphShort>
        Criamos um ambiente de trabalho que celebra as diferenças, respeitando e
        acolhendo todos, independentemente de gênero, raça, orientação sexual ou
        deficiência.
        <br />
        Com isso, garantimos um ambiente mais inovador e colaborativo, onde
        todos têm a oportunidade de ser autênticos e contribuir para o
        crescimento da empresa.
        <br />
        Continuamos a trabalhar para construir um futuro mais plural, pois
        sabemos que a diversidade é a chave para nossa evolução e sucesso
        contínuos.
      </StoryParagraphShort>
      <ContentImage
        className="group-47"
        alt="Group"
        src="https://c.animaapp.com/jIsSRIVa/img/group-462.png"
      />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
      <Group1Subsection />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: -22px;
  min-height: 5730px;
  min-width: 1440px;
  width: 100%;
`;

const Breadcrumb = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  height: 22px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -993px;
  margin-top: 0;
  width: 235px;
`;

const BreadcrumbText = styled.span`
  font-weight: 300;
`;

const BreadcrumbHighlight = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const sectionHeadingStyles = css`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  width: 1228px;
`;

const SectionHeading = styled.div`
  ${sectionHeadingStyles}
  height: 54px;
  margin-top: 60px;
`;

const SectionHeadingParagraph = styled.p`
  ${sectionHeadingStyles}
  height: 54px;
  margin-top: 60px;
`;

const SectionHeadingSecondary = styled.div`
  ${sectionHeadingStyles}
  height: 54px;
  margin-top: 84px;
`;

const FullWidthImage = styled.img`
  height: 400px;
  margin-top: 60px;
  width: 1440px;
`;

const storyParagraphStyles = css`
  align-self: center;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 30px;
  width: 1228px;
`;

const StoryParagraph = styled.p`
  ${storyParagraphStyles}
  height: 96px;
`;

const StoryParagraphShort = styled(StoryParagraph)`
  height: 72px;
`;

const ContentImage = styled.img`
  height: 500px;
  margin-left: 106px;
  margin-top: 60px;
  width: 1228px;
`;
