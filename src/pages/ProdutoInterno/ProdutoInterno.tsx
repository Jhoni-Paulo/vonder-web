import React from "react";
import styled from "styled-components";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const Container = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 64px;
  overflow-x: hidden;
  padding: 40px 0 96px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    gap: 40px;
    padding: 24px 0 56px;
  }
`;

const Breadcrumb = styled.p`
  box-sizing: border-box;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  max-width: 1244px;
  padding: 0 24px;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const BreadcrumbLight = styled.span`
  font-weight: 300;
`;

const BreadcrumbBold = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const HeroRow = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  max-width: 1244px;
  padding: 0 24px;
  width: 100%;
`;

const ImageRow = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
`;

const NavArrow = styled.img`
  cursor: pointer;
  flex: 0 0 auto;
  height: 33px;
  transition: opacity 0.2s ease;
  width: 33px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    height: 24px;
    width: 24px;
  }
`;

const MainImage = styled.img`
  aspect-ratio: 0.63;
  border-radius: 15px;
  height: 500px;
  object-fit: cover;
  width: 317px;

  @media (max-width: 600px) {
    height: 340px;
    width: 214px;
  }
`;

const DividerImage = styled.img`
  height: 33px;
  max-width: 1251px;
  width: 100%;
`;

const FeatureIcons = styled.img`
  height: auto;
  max-width: 1135px;
  width: 100%;
`;

export const ProdutoInterno = (): React.JSX.Element => {
  return (
    <Container data-model-id="1:5723">
      <Breadcrumb>
        <BreadcrumbLight>
          Página inicial &gt; Nossos produtos &gt; Ferramentas elétricas &gt;{" "}
        </BreadcrumbLight>
        <BreadcrumbBold>6864222220</BreadcrumbBold>
      </Breadcrumb>
      <HeroRow>
        <ImageRow>
          <NavArrow
            alt="Anterior"
            src="https://c.animaapp.com/C1uOODCl/img/camada-1-1.svg"
          />
          <MainImage
            alt="Image"
            src="https://c.animaapp.com/C1uOODCl/img/image-135.png"
          />
          <NavArrow
            alt="Próximo"
            src="https://c.animaapp.com/C1uOODCl/img/camada-1.svg"
          />
        </ImageRow>
        <GroupSubsection />
      </HeroRow>
      <DividerImage
        alt="Group"
        src="https://c.animaapp.com/C1uOODCl/img/group-307.png"
      />
      <FeatureIcons
        alt="Group"
        src="https://c.animaapp.com/C1uOODCl/img/group-362.png"
      />
      <GroupWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
    </Container>
  );
};
