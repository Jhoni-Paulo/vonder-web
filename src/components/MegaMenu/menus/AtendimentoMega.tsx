import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 5%;
`;

const FrameContainer = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

const CardsRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  justify-content: center;
  position: relative;
  width: 100%;

  @media (max-width: 1280px) {
    gap: 28px;
  }
`;

const Card = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  gap: 18px;
  position: relative;
  max-width: 380px;

  @media (max-width: 1280px) {
    gap: 14px;
  }
`;

const CardImage = styled.img`
  align-self: stretch;
  height: 150px;
  position: relative;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.div`
  align-items: center;
  align-self: stretch;
  color: #f6be00;
  display: flex;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
`;

const Description = styled.p`
  align-self: stretch;
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  position: relative;
`;

const cardActionStyles = `
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 8px 16px;
  position: relative;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  margin-top: auto;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000059;
  }
`;

const CardAction = styled.div`
  ${cardActionStyles}
`;

const CardActionLink = styled(Link)`
  ${cardActionStyles}
`;

const CardActionText = styled.div`
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

type CardData = {
  image: string;
  heading: string;
  description: string;
  actionText: string;
  link?: string;
};

const cardData: CardData[] = [
  {
    image: "https://c.animaapp.com/IEFXtDMz/img/05-1@2x.png",
    heading: "Fale conosco",
    description:
      "Nosso time está pronto para atender você! Entre em contato com nossa equipe e vamos encontrar a melhor solução para você.",
    actionText: "Entre em contato",
    link: "/fale-conosco",
  },
  {
    image: "https://c.animaapp.com/IEFXtDMz/img/05-2@2x.png",
    heading: "Trabalhe conosco",
    description:
      "Estamos sempre em busca de talentos para fazer parte do nosso time. Se você é apaixonado por inovação e excelência, venha crescer com a gente!",
    actionText: "Veja as oportunidades",
    link: "/trabalhe-conosco",
  },
  {
    image: "https://c.animaapp.com/IEFXtDMz/img/05-3@2x.png",
    heading: "FAQ",
    description:
      "Tem alguma dúvida? Confira nossa seção de perguntas mais frequentes para encontrar as respostas de forma simples e rápida!",
    actionText: "Confira as perguntas",
    link: "/faq",
  },
];

export function AtendimentoMega(): React.JSX.Element {
  return (
    <Root>
      <FrameContainer>
        <CardsRow>
          {cardData.map((card) => (
            <Card key={card.heading}>
              <CardImage alt={card.heading} src={card.image} />
              <Title>{card.heading}</Title>
              <Description>{card.description}</Description>
              {card.link ? (
                <CardActionLink to={card.link}>
                  <CardActionText>{card.actionText}</CardActionText>
                </CardActionLink>
              ) : (
                <CardAction>
                  <CardActionText>{card.actionText}</CardActionText>
                </CardAction>
              )}
            </Card>
          ))}
        </CardsRow>
      </FrameContainer>
    </Root>
  );
}

export default AtendimentoMega;
