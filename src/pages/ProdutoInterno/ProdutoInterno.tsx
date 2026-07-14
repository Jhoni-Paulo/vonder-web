import React from "react";
import styled from "styled-components";
import matriz18 from "../../assets/matriz_18.webp";
import { ProductViewer360 } from "../../components/ProductViewer360/ProductViewer360";
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

const ViewerWrap = styled.div`
  border-radius: 15px;
  flex: 0 0 auto;
  overflow: hidden;
  width: 420px;

  @media (max-width: 600px) {
    width: 280px;
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
        <ViewerWrap>
          <ProductViewer360 imageUrl={matriz18} />
        </ViewerWrap>
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
