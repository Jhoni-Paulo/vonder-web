import React, { useState } from "react";
import styled from "styled-components";
import setaEsquerda from "../../../../assets/seta_esquerda.svg";
import setaDireita from "../../../../assets/seta_direita.svg";

const Section = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  max-width: 1440px;
  padding: 0 24px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: stretch;
    flex-direction: column;
    gap: 28px;
  }
`;

const TextCol = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 24px;
  max-width: 100%;
  width: 425px;

  @media (max-width: 1000px) {
    width: 100%;
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

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  max-width: 100%;
  width: 400px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Arrows = styled.div`
  display: flex;
  gap: 12px;
`;

const ArrowBtn = styled.img`
  cursor: pointer;
  height: 44px;
  transition: opacity 0.2s ease;
  width: 44px;

  &:hover {
    opacity: 0.7;
  }
`;

const CardsTrack = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  padding: 4px 0;

  @media (max-width: 1000px) {
    overflow-x: auto;
    padding-bottom: 8px;
    scrollbar-width: none;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Card = styled.div<{ $hidden?: boolean }>`
  border-radius: 15px;
  filter: brightness(1);
  flex-shrink: 0;
  height: 445px;
  margin-right: 16px;
  overflow: hidden;
  position: relative;
  transform: scale(1);
  width: 286px;
  will-change: opacity, margin-right, transform, filter;
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    margin-right 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $hidden }) =>
    $hidden &&
    `
      /* Mesmo layout do card escondido do carrossel "Lançamentos" da home:
         aparece pela metade (286px / 2 = 143px), mais baixo (365px) e
         centralizado verticalmente ((445 - 365) / 2 = 40px). */
      margin-right: -143px;
      height: 365px;
      margin-top: 40px;
      opacity: 0.5;
      transform: scale(0.97);
      filter: brightness(0.85);

      @media (max-width: 600px) {
        margin-right: -115px;
      }
    `}
`;

const CardBg = styled.img`
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

const CardTrophy = styled.img`
  height: 250px;
  left: 50%;
  object-fit: contain;
  position: absolute;
  top: 24px;
  transform: translateX(-50%);
`;

const CardText = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
`;

const CardTitle = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #f6be00;
  display: -webkit-box;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDesc = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #ffffff;
  display: -webkit-box;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const awards = [
  {
    bg: "https://c.animaapp.com/HXGo4e2k/img/mask-group@2x.png",
    trophy:
      "https://c.animaapp.com/HXGo4e2k/img/gemini-generated-image-fxp88sfxp88sfxp8png-1@2x.png",
    title: "Prêmio ABC das Ferramentas 2025",
    desc: "É o maior reconhecimento de reputação e atendimento do Brasil.",
  },
  {
    bg: "https://c.animaapp.com/HXGo4e2k/img/mask-group-1@2x.png",
    trophy: "https://c.animaapp.com/HXGo4e2k/img/trofeus-1@2x.png",
    title: "PRÊMIO Reclame AQUI 2026 - Melhor Atendimento",
    desc: "É o maior reconhecimento de reputação e atendimento do Brasil.",
  },
  {
    bg: "https://c.animaapp.com/HXGo4e2k/img/mask-group-2@2x.png",
    trophy:
      "https://c.animaapp.com/HXGo4e2k/img/trofeu-top-of-mind-2022-1@2x.png",
    title: "Prêmio TOP of Mind 2022 - Melhores Ferramentas Elétricas",
    desc: "Eleita a Melhor Marca de Ferramentas Elétricas do Brasil no ano de 2022.",
  },
  {
    bg: "https://c.animaapp.com/HXGo4e2k/img/mask-group-3@2x.png",
    trophy:
      "https://c.animaapp.com/HXGo4e2k/img/trofeu-melhor-do-ano-revenda-2024-1@2x.png",
    title: "Prêmio Melhor do Ano Revenda 2025",
    desc: "De revenda a gente entende! Sexto ano seguido premiada como Melhor Revenda.",
  },
];

export const Frame1Subsection = (): React.JSX.Element => {
  const [items, setItems] = useState(awards);

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
    <Section className="frame-1-subsection">
      <TextCol>
        <Title>A MARCA DE FERRAMENTAS MAIS PREMIADA DO BRASIL</Title>
        <Desc>
          São mais de 1.000 premiações conquistadas das revistas especializadas
          por todo o Brasil. Confira os últimos troféus :
        </Desc>
        <Arrows>
          <ArrowBtn alt="Anterior" src={setaEsquerda} onClick={rotateLeft} />
          <ArrowBtn alt="Próximo" src={setaDireita} onClick={rotateRight} />
        </Arrows>
      </TextCol>
      <CardsTrack>
        {items.map((award, i) => (
          <Card key={award.title} $hidden={i === 0}>
            <CardBg alt="" src={award.bg} />
            <CardTrophy alt={award.title} src={award.trophy} />
            <CardText>
              <CardTitle>{award.title}</CardTitle>
              <CardDesc>{award.desc}</CardDesc>
            </CardText>
          </Card>
        ))}
      </CardsTrack>
    </Section>
  );
};
