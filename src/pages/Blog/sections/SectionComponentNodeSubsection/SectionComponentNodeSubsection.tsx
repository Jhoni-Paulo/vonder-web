import React from "react";
import styled from "styled-components";
import {
  TripleSlider,
  type TripleSliderItem,
} from "../../../../components/TripleSlider/TripleSlider";

const SectionComponentNodeSubsectionWrapper = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  max-width: 1228px;
  padding: 0 24px;
  position: relative;
  width: 100%;
`;

const Frame28 = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  position: relative;
  width: 452px;
`;

const SectionTitle = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  max-width: 100%;
  position: relative;
  width: 400px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const SlideImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const NameBadge = styled.div`
  -webkit-backdrop-filter: blur(30px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(30px) brightness(100%);
  background-color: #0e0e0e99;
  border-radius: 100px;
  bottom: 24px;
  display: flex;
  justify-content: center;
  left: 50%;
  max-width: calc(100% - 32px);
  padding: 15px 24px;
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const NameText = styled.p`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const TextWrapper23 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const TextWrapper24 = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const supporters: { id: string; img: string; name: string; handle: string }[] = [
  {
    id: "sylvio",
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-8@2x.png",
    name: "Sylvio Guisard",
    handle: "@plantascomalegria_",
  },
  {
    id: "alexsandra",
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-9@2x.png",
    name: "Alexsandra",
    handle: "@umagurianamarcenaria",
  },
  {
    id: "mari",
    img: "https://c.animaapp.com/bNHZtEYo/img/mask-group-10.png",
    name: "Mari Pavan",
    handle: "@agilizalab",
  },
];

const sliderItems: TripleSliderItem[] = supporters.map((supporter) => ({
  id: supporter.id,
  content: (
    <>
      <SlideImage alt={supporter.name} src={supporter.img} />
      <NameBadge>
        <NameText>
          <TextWrapper23>{supporter.name} </TextWrapper23>
          <TextWrapper24>do</TextWrapper24>
          <TextWrapper23> {supporter.handle}</TextWrapper23>
        </NameText>
      </NameBadge>
    </>
  ),
}));

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <SectionComponentNodeSubsectionWrapper>
      <Frame28>
        <SectionTitle>
          Quem apoia
          <br />a VONDER
        </SectionTitle>
        <Description>
          Influenciadores e profissionais renomados
          <br />
          que confiam, usam e recomendam VONDER
        </Description>
      </Frame28>
      <TripleSlider items={sliderItems} />
    </SectionComponentNodeSubsectionWrapper>
  );
};
