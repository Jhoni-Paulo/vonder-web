import React from "react";
import styled from "styled-components";
import {
  TripleSlider,
  type TripleSliderItem,
} from "../../../../components/TripleSlider/TripleSlider";
import img0 from "../../../../assets/conheca-2013/img-0.png";
import img1 from "../../../../assets/conheca-2013/img-1.png";
import img2 from "../../../../assets/conheca-2013/img-2.png";
import setaEsquerda from "../../../../assets/seta_esquerda.svg";
import setaDireita from "../../../../assets/seta_direita.svg";

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const PolygonRow = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 60px;
  padding: 0 calc((100% - 1440px) / 2);
  width: 100%;

  @media (max-width: 1488px) {
    padding: 0 24px;
  }

  @media (max-width: 1440px) {
    display: none;
  }
`;

const PolygonSlot = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  width: 700px;
`;

const TextSpacer = styled.div`
  flex: 0 0 auto;
  width: 570px;
`;

const Polygon = styled.img`
  height: 54.73px;
  width: 80.19px;
`;

const Section = styled.div`
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 52px calc((100% - 1440px) / 2);
  position: relative;
  width: 100%;

  @media (max-width: 1488px) {
    padding: 52px 24px;
  }

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  max-width: 100%;
  width: 1440px;

  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const SliderWrap = styled.div`
  flex: 0 0 auto;
  width: 700px;

  @media (max-width: 1440px) {
    max-width: 100%;
    width: 560px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SlideImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Frame16 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 5px;
  max-width: 100%;
  position: relative;
  width: 570px;

  @media (max-width: 1440px) {
    width: 640px;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

const Frame17 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
  width: 100%;
`;

const TextWrapper16 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  text-align: justify;
  width: 550px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const OAnoMarcouUmWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  max-width: 100%;
  position: relative;
`;

const OAnoMarcouUm = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  text-align: justify;
  width: 550px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const TextWrapper17 = styled.span`
  font-weight: 300;
`;

const TextWrapper18 = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const sliderItems: TripleSliderItem[] = [
  { id: 0, content: <SlideImage alt="Seleção Brasileira" src={img0} /> },
  { id: 1, content: <SlideImage alt="Seleção Brasileira" src={img1} /> },
  { id: 2, content: <SlideImage alt="Seleção Brasileira" src={img2} /> },
];

export const DivSubsection = (): React.JSX.Element => {
  return (
    <Outer>
      <PolygonRow>
        <PolygonSlot>
          <Polygon
            alt="Polygon"
            src="https://c.animaapp.com/HXGo4e2k/img/polygon-4.svg"
          />
        </PolygonSlot>
        <TextSpacer />
      </PolygonRow>
      <Section>
        <Content>
          <SliderWrap>
            <TripleSlider
              items={sliderItems}
              showArrows
              prevArrowSrc={setaEsquerda}
              nextArrowSrc={setaDireita}
              size={440}
            />
          </SliderWrap>
        <Frame16>
          <Frame17>
            <TextWrapper16>2013</TextWrapper16>
          </Frame17>
          <OAnoMarcouUmWrapper>
            <OAnoMarcouUm>
              <TextWrapper17>
                O ano marcou um passo estratégico e de grande impacto para a
                consolidação da VONDER no cenário esportivo nacional. Foi nesse
                período que a empresa iniciou formalmente a divulgação de sua
                marca no{" "}
              </TextWrapper17>
              <TextWrapper18>futebol</TextWrapper18>
              <TextWrapper17>
                , garantindo uma presença de altíssima visibilidade nos
                principais campeonatos do país e em jogos da{" "}
              </TextWrapper17>
              <TextWrapper18>Seleção Brasileira</TextWrapper18>
              <TextWrapper17>
                . Ao estampar suas icônicas placas publicitárias à beira do
                gramado, a marca não apenas estreitou os laços com o público
                apaixonado por esporte, mas também associou sua imagem de força,
                precisão e alta performance ao espetáculo do futebol
                profissional, transformando os estádios em uma poderosa vitrine
                para suas ferramentas e equipamentos.
              </TextWrapper17>
            </OAnoMarcouUm>
          </OAnoMarcouUmWrapper>
          </Frame16>
        </Content>
      </Section>
    </Outer>
  );
};
