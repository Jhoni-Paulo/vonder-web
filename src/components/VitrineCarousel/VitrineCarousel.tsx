import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import vitrineImg from "../../assets/vitrine.png";
import vitrineHoverImg from "../../assets/OVERLAY-VITRINE-VONDER.png";
import "swiper/css";

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  @media (max-width: 600px) {
    gap: 24px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  max-width: 1292px;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin: 0;
`;

/* Cada slide: imagem base + imagem de hover sobreposta (cross-fade suave). */
const VitrineSlide = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  .frame-80 {
    width: 100%;
    height: auto;
    display: block;
  }

  .vitrine-hover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity;
    backface-visibility: hidden;
    pointer-events: none;
  }

  &:hover .vitrine-hover {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .vitrine-hover {
      transition: opacity 0.3s ease;
    }
  }
`;

/* Cada imagem tem sua própria imagem de hover. Mock: todas usam a mesma
   imagem de overlay por enquanto; na integração, trocar `hover` de cada item. */
const vitrineItems = [
  { img: vitrineImg, hover: vitrineHoverImg },
  { img: vitrineImg, hover: vitrineHoverImg },
  { img: vitrineImg, hover: vitrineHoverImg },
  { img: vitrineImg, hover: vitrineHoverImg },
  { img: vitrineImg, hover: vitrineHoverImg },
  { img: vitrineImg, hover: vitrineHoverImg },
];

export const VitrineCarousel = (): React.JSX.Element => {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          Vitrine
          <br />
          VONDER
        </Title>
      </TitleWrapper>
      <StyledSwiper
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={1.4}
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
      >
        {vitrineItems.map((item, i) => (
          <SwiperSlide key={i}>
            <VitrineSlide>
              <img className="frame-80" alt="Vitrine VONDER" src={item.img} />
              <img
                className="vitrine-hover"
                alt=""
                aria-hidden="true"
                src={item.hover}
              />
            </VitrineSlide>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default VitrineCarousel;
