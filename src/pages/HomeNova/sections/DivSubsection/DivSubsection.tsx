import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: calc(445px + 55px + 8px);

  @media (max-width: 900px) {
    min-height: auto;
  }
`;

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  max-width: 1292px;
  padding: 0 24px;
  box-sizing: border-box;
  margin: 0 auto;
  pointer-events: none;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 28px;
    padding-bottom: 10px;
  }
`;

const TextCol = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 20px;
  margin-top: 55px;
  width: 333px;
  pointer-events: all;

  @media (max-width: 900px) {
    margin-top: 0;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.p`
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
`;

const ArrowsRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ArrowBtn = styled.img`
  height: 34px;
  width: 34px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const SeeMore = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 23px;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  padding: 0 40px;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileButtonRow = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    padding: 8px 24px 0;
    box-sizing: border-box;
  }
`;

const MobileSeeMore = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 19px;
  font-weight: 700;
  height: 52px;
  justify-content: center;
  padding: 0 40px;
  width: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const CardsTrack = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: calc(max(0px, (100% - 1292px) / 2) + 24px + 333px + 64px);
  display: flex;
  overflow: hidden;
  padding: 4px 0 8px 4px;

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    padding: 4px 4px 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const LaunchCard = styled.div<{ $hidden?: boolean }>`
  flex-shrink: 0;
  height: 445px;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  width: 286px;
  transform: scale(1);
  filter: brightness(1);
  will-change: opacity, margin-right, transform, filter;
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    margin-right 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 600px) {
    width: 230px;
  }

  ${({ $hidden }) =>
    $hidden &&
    `
      margin-right: -57px;
      opacity: 0.5;
      transform: scale(0.97);
      filter: brightness(0.85);

      @media (max-width: 600px) {
        margin-right: -46px;
      }
    `}
`;

const CardImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const CardOverlay = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.78) 100%
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const CardContent = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  left: 0;
  padding: 24px 20px;
  position: absolute;
  right: 0;
`;

const CardTitle = styled.p`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
`;

const CardDesc = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

const CardLink = styled.div`
  color: #f6be00;
  cursor: pointer;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
`;

const launches = [
  {
    img: "https://c.animaapp.com/ea7M9uhj/img/mask-group-4@2x.png",
    title: "Paleteira hidráulica elétrica 1,5 tf PE...",
    desc: "Robusta e durável. Indicada para movimentação de cargas acondicionadas em paletes...",
  },
  {
    img: "https://c.animaapp.com/ea7M9uhj/img/mask-group-5@2x.png",
    title: "Torquímetros Digitais com Torque Angular",
    desc: "Indicados para aperto de parafusos com controle preciso de torque e ângulo...",
  },
  {
    img: "https://c.animaapp.com/ea7M9uhj/img/mask-group-6@2x.png",
    title: "Pistolas para Solda PSV 130 e PSV 150",
    desc: "Produtos certificados, garantindo qualidade, eficiência e segurança para as mais diversas aplicações!",
  },
  {
    img: "https://c.animaapp.com/ea7M9uhj/img/mask-group-7@2x.png",
    title: "Bomba Recarregável para Galão de Água VONDER",
    desc: "Compacta, prática e portátil, solução ideal para facilitar o uso de galões de água",
  },
];

export const DivSubsection = (): React.JSX.Element => {
  const [items, setItems] = useState(launches);

  const rotateLeft = () => {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const rotateRight = () => {
    setItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  };

  return (
    <Wrapper>
      <Container>
        <TextCol>
          <Title>
            Fique por dentro dos nossos
            <br />
            Lançamentos
          </Title>
          <ArrowsRow>
            <ArrowBtn
              alt="Anterior"
              src="https://c.animaapp.com/ea7M9uhj/img/camada-1-2.svg"
              onClick={rotateLeft}
            />
            <ArrowBtn
              alt="Próximo"
              src="https://c.animaapp.com/ea7M9uhj/img/camada-1-3.svg"
              onClick={rotateRight}
            />
          </ArrowsRow>
          <SeeMore type="button">Veja mais</SeeMore>
        </TextCol>
      </Container>
      <CardsTrack>
        {items.map((item, i) => (
          <LaunchCard key={item.title} $hidden={i === 0}>
            <CardImage alt={item.title} src={item.img} />
            <CardOverlay />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.desc}</CardDesc>
              <CardLink>Ver mais</CardLink>
            </CardContent>
          </LaunchCard>
        ))}
      </CardsTrack>
      <MobileButtonRow>
        <MobileSeeMore type="button">Veja mais</MobileSeeMore>
      </MobileButtonRow>
    </Wrapper>
  );
};
