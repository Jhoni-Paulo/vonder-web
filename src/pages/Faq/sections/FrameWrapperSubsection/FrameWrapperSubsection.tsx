import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const Card = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #00000026;
  display: flex;
  flex: 1 1 380px;
  gap: 16px;
  max-width: 400px;
  min-width: 280px;
  padding: 28px 30px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px #00000033;
  }
`;

const Icon = styled.img`
  flex-shrink: 0;
  height: 50px;
  width: auto;
  object-fit: contain;
`;

const Label = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const navCards = [
  { img: "https://c.animaapp.com/lFhe4nh2/img/group-69132@2x.png", label: "PRODUTOS VONDER" },
  { img: "https://c.animaapp.com/lFhe4nh2/img/group-69132-1@2x.png", label: "GARANTIA E SUPORTE" },
  { img: "https://c.animaapp.com/lFhe4nh2/img/group-69132-2@2x.png", label: "COMPRAR E REVENDER" },
  { img: "https://c.animaapp.com/lFhe4nh2/img/group-69132-3@2x.png", label: "SEGURANÇA E CONFIABILIDADE" },
  { img: "https://c.animaapp.com/lFhe4nh2/img/group-69132-4@2x.png", label: "TRABALHE CONOSCO" },
  { img: "https://c.animaapp.com/lFhe4nh2/img/group-69132-5@2x.png", label: "CONTATO" },
];

export const FrameWrapperSubsection = (): React.JSX.Element => {
  return (
    <Container>
      {navCards.map((card) => (
        <Card key={card.label}>
          <Icon alt={card.label} src={card.img} />
          <Label>{card.label}</Label>
        </Card>
      ))}
    </Container>
  );
};
