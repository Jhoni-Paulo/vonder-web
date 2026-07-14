import React, { useState } from "react";
import styled from "styled-components";
import image111 from "../../assets/image 111.png";
import image112 from "../../assets/image 112.png";
import image116 from "../../assets/image 116.png";
import image137 from "../../assets/image 137.png";
import image138 from "../../assets/image 138.png";
import matriz18 from "../../assets/matriz_18.webp";
import {
  ImageCarousel,
  type ImageCarouselItem,
} from "../../components/ImageCarousel/ImageCarousel";
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
  align-items: center;
  aspect-ratio: 1;
  border-radius: 15px;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  overflow: hidden;
  width: 420px;

  @media (max-width: 600px) {
    width: 280px;
  }
`;

const StaticProductImage = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

const GalleryWrap = styled.div`
  box-sizing: border-box;
  max-width: 1244px;
  padding: 0 24px;
  width: 100%;
`;

const galleryImages: ImageCarouselItem[] = [
  {
    id: "116",
    src: image116,
    alt: "Foto do produto — visualização 360",
    is360: true,
    matrixSrc: matriz18,
  },
  { id: "111", src: image111, alt: "Foto do produto 1" },
  { id: "112", src: image112, alt: "Foto do produto 2" },
  { id: "137", src: image137, alt: "Foto do produto 3" },
  { id: "138", src: image138, alt: "Foto do produto 4" },
  { id: "111-dup", src: image111, alt: "Foto do produto 1" },
  { id: "112-dup", src: image112, alt: "Foto do produto 2" },
];

export const ProdutoInterno = (): React.JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<ImageCarouselItem>(
    galleryImages[0]
  );

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
          {selectedImage.is360 ? (
            <ProductViewer360
              key={selectedImage.matrixSrc}
              imageUrl={selectedImage.matrixSrc}
            />
          ) : (
            <StaticProductImage
              alt={selectedImage.alt}
              src={selectedImage.src}
            />
          )}
        </ViewerWrap>
        <GroupSubsection />
      </HeroRow>
      <GalleryWrap>
        <ImageCarousel
          items={galleryImages}
          selectedId={selectedImage.id}
          onItemSelect={setSelectedImage}
        />
      </GalleryWrap>
      <GroupWrapperSubsection />
      <DivWrapperSubsection />
      <DivSubsection />
      <SectionComponentNodeSubsection />
    </Container>
  );
};
