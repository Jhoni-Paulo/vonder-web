import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import arrowLeft from "../../../../assets/Camada_1.png";
import camada11 from "../../../../assets/camada11.png";
import trenaBg from "../../../../assets/TRENA.png";

const Section = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  padding-left: calc((100% - 1440px) / 2);
  position: relative;
  width: 100%;

  @media (max-width: 1480px) {
    padding-left: 24px;
  }

  @media (max-width: 600px) {
    gap: 28px;
    padding-left: 20px;
  }
`;

const Header = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 282px;
`;

const Eyebrow = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.img`
  position: absolute;
  top: 68px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 33px;
  height: 33px;
  z-index: 2;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &.arrow-left {
    left: 24px;
  }

  &.arrow-right {
    right: 24px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Track = styled.div`
  width: 100%;

  .swiper {
    padding: 4px 0;
  }

  .swiper-wrapper {
    justify-content: space-between;
    background-image: url(${trenaBg});
    background-repeat: no-repeat;
  }

  .swiper-slide {
    width: auto;
    height: auto;
  }
`;

const Card = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 200px;
`;

const CardImage = styled.img`
  height: 150px;
  object-fit: contain;
  object-position: left center;
  width: auto;
  max-width: 100%;
`;

const Year = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 34px;
  }
`;

const Text = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

const milestones = [
  {
    img: camada11,
    year: "HOJE",
    text: "O primeiro perfil brasileiro oficial do segmento de ferragens e ferramentas a atingir 500 mil seguidores no Instagram.",
  },
  {
    img: "https://c.animaapp.com/HXGo4e2k/img/ellipse-5@2x.png",
    year: "2024",
    text: "Inauguração do CD-PE em Serra Talhada, consolidando a área Logística da VONDER nas principais regiões do Brasil.",
  },
  {
    img: "https://c.animaapp.com/HXGo4e2k/img/ellipse-6@2x.png",
    year: "2023",
    text: "Lançamento da linha de Máquinas de Pintura Airless, que trouxe ao mercado de equipamentos de pintura no Brasil uma nova perspectiva em termos de acabamento e performance.",
  },
  {
    img: "https://c.animaapp.com/HXGo4e2k/img/ellipse-7@2x.png",
    year: "2021",
    text: "Apoio à equipe da Stock Car como marca oficial de ferramentas de equipes com Pole Motorsport e Scuderia Bandeiras na principal categoria do automobilismo brasileiro.",
  },
  {
    img: "https://c.animaapp.com/HXGo4e2k/img/ellipse-8@2x.png",
    year: "2020",
    text: "Desengraxante VONDER eleito o melhor do Brasil na categoria pela coluna Palavra do Especialista da Revista Quatro Rodas.",
  },
  {
    img: "https://c.animaapp.com/HXGo4e2k/img/frame-69962.svg",
    year: "2016",
    text: "Primeira participação junto à Equipe SELF no Rally dos Sertões, numa categoria em que os pilotos participam da competição sem suporte mecânico, fazendo as próprias manutenções em suas motos",
  },
];

export const DivWrapperSubsection = (): React.JSX.Element => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section className="div-wrapper-subsection">
      <Header>
        <Eyebrow>NOSSA HISTÓRIA</Eyebrow>
        <Title>
          EVOLUÇÃO QUE
          <br />
          NOS MOVE.
        </Title>
      </Header>
      <Carousel>
        <Arrow
          className="arrow-left"
          alt="Anterior"
          src={arrowLeft}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Track>
          <Swiper
            grabCursor
            rewind
            slidesPerView="auto"
            spaceBetween={0}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
          >
            {milestones.map((m) => (
              <SwiperSlide key={m.year}>
                <Card>
                  <CardImage alt={m.year} src={m.img} />
                  <Year>{m.year}</Year>
                  <Text>{m.text}</Text>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Track>
        <Arrow
          className="arrow-right"
          alt="Próximo"
          src="https://c.animaapp.com/HXGo4e2k/img/camada-1.svg"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Carousel>
    </Section>
  );
};
