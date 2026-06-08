import React from "react";
import styled from "styled-components";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

const Container = styled.div`
  background-color: #ffffff;
  margin-top: -238px;
  min-height: 3664px;
  min-width: 1440px;
  position: relative;
  width: 100%;
`;

const Breadcrumb = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: calc(50.00% - 619px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 216px;
  width: 628px;
`;

const BreadcrumbLight = styled.span`
  font-weight: 300;
`;

const BreadcrumbBold = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const MainImage = styled.img`
  aspect-ratio: 0.63;
  height: 500px;
  left: 254px;
  object-fit: cover;
  position: absolute;
  top: 327px;
  width: 317px;
`;

const LayerImage = styled.img`
  height: 33px;
  left: 693px;
  position: absolute;
  top: 561px;
  width: 33px;
`;

const LayerImageTwo = styled.img`
  height: 33px;
  left: 100px;
  position: absolute;
  top: 561px;
  width: 33px;
`;

const GroupImage32 = styled.img`
  height: 33px;
  left: 95px;
  position: absolute;
  top: 931px;
  width: 1251px;
`;

const GroupImage33 = styled.img`
  height: 120px;
  left: 153px;
  position: absolute;
  top: 887px;
  width: 1135px;
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
      <MainImage
        alt="Image"
        src="https://c.animaapp.com/C1uOODCl/img/image-135.png"
      />
      <GroupSubsection />
      <LayerImage
        alt="Camada"
        src="https://c.animaapp.com/C1uOODCl/img/camada-1.svg"
      />
      <LayerImageTwo
        alt="Camada"
        src="https://c.animaapp.com/C1uOODCl/img/camada-1-1.svg"
      />
      <GroupImage32
        alt="Group"
        src="https://c.animaapp.com/C1uOODCl/img/group-307.png"
      />
      <GroupImage33
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
