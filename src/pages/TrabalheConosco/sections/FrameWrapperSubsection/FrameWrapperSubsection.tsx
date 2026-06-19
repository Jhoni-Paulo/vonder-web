import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 1248px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
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
  text-align: center;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CardsRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
`;

const Card = styled.button<{ $active: boolean }>`
  align-items: stretch;
  background-color: ${({ $active }) => ($active ? "#f6be00" : "#f2f2f2")};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex: 1 1 360px;
  gap: 16px;
  max-width: 405px;
  min-width: 280px;
  overflow: hidden;
  padding: 24px 0 0 28px;
  text-align: left;
  box-sizing: border-box;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #f6be00;
  }
`;

const CardText = styled.div`
  align-self: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0 24px;
`;

const CardHeading = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.15;
  margin: 0;
`;

const CardHeadingStrong = styled.span`
  font-size: 25px;
`;

const CardDesc = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

const CardImage = styled.img`
  align-self: flex-end;
  flex-shrink: 0;
  height: auto;
  width: 150px;
  object-fit: contain;
`;

export const tabs = [
  {
    pre: "Seja um",
    strong: "COLABORADOR",
    desc: "A VONDER oferece oportunidades em diversas áreas, onde você pode crescer e contribuir para nossa busca constante pela excelência no mercado de ferramentas.",
    img: "https://c.animaapp.com/fkOynynE/img/h-1@2x.png",
  },
  {
    pre: "Seja um",
    strong: "REPRESENTANTE COMERCIAL",
    desc: "Ajude a expandir a presença da VONDER em todo o Brasil, conquistando novos clientes e fortalecendo nossa rede de parceiros.",
    img: "https://c.animaapp.com/fkOynynE/img/h-1-1@2x.png",
  },
  {
    pre: "Seja um",
    strong: "REVENDEDOR",
    desc: "Seja revendedor VONDER e cresça com a nossa marca, reconhecida pela qualidade e inovação, oferecendo as melhores soluções para seus clientes em todo o país.",
    img: "https://c.animaapp.com/fkOynynE/img/h-2@2x.png",
  },
];

interface FrameWrapperSubsectionProps {
  active: number;
  onSelect: (index: number) => void;
}

export const FrameWrapperSubsection = ({
  active,
  onSelect,
}: FrameWrapperSubsectionProps): React.JSX.Element => {
  return (
    <Wrapper>
      <TitleRow>
        <Title>Faça parte do nosso time!</Title>
      </TitleRow>
      <TitleRow>
        <Subtitle>
          Escolha abaixo a opção que mais se encaixa ao seu perfil e siga os
          passos:
        </Subtitle>
      </TitleRow>
      <CardsRow>
        {tabs.map((card, i) => (
          <Card
            key={card.strong}
            type="button"
            $active={active === i}
            onClick={() => onSelect(i)}
          >
            <CardText>
              <CardHeading>
                {card.pre}
                <br />
                <CardHeadingStrong>{card.strong}</CardHeadingStrong>
              </CardHeading>
              <CardDesc>{card.desc}</CardDesc>
            </CardText>
            <CardImage alt={card.strong} src={card.img} />
          </Card>
        ))}
      </CardsRow>
    </Wrapper>
  );
};
