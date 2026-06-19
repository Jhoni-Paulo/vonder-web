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

const ColumnsWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  position: relative;

  @media (max-width: 1280px) {
    gap: 16px;
  }
`;

const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 320px;
  flex-direction: column;
  gap: 18px;
  position: relative;
  max-width: 400px;
`;

const Image = styled.img`
  align-self: stretch;
  height: 150px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

const TitleText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  flex: 1;
`;

const ButtonBase = `
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 8px 16px;
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

const ButtonLink = styled(Link)`
  ${ButtonBase}
`;

const ButtonText = styled.div`
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  text-align: center;
  white-space: nowrap;
`;

const cards = [
  {
    img: "https://c.animaapp.com/tE2W9na7/img/05-1@2x.png",
    title: "Nossa história",
    description:
      "Explore a jornada da VONDER, destacando marcos importantes e a trajetória que nos tornou referência no setor de ferramentas.",
    action: "Conheça nossa trajetória",
    link: "/conheca-a-vonder",
  },
  {
    img: "https://c.animaapp.com/tE2W9na7/img/05-2@2x.png",
    title: "Nossos diferenciais",
    description:
      "Conheça os diferenciais que nos destacam, incluindo nossas ações em sustentabilidade e os certificados que comprovam a qualidade de nossos produtos.",
    action: "Veja o que nos destaca",
    link: "/conheca-a-vonder",
  },
  {
    img: "https://c.animaapp.com/tE2W9na7/img/05-3@2x.png",
    title: "Nossa presença",
    description:
      "Percorra toda a nossa ampla cobertura comercial e logística, na qual garantimos excelência em cada etapa da nossa rede de distribuição.",
    action: "Explore nossa atuação",
    link: "/conheca-a-vonder",
  },
];

export function ConhecaVonderMega(): React.JSX.Element {
  return (
    <Root>
      <ColumnsWrapper>
        {cards.map((card) => (
          <Column key={card.title}>
            <Image alt={card.title} src={card.img} />
            <TitleText>{card.title}</TitleText>
            <DescriptionText>{card.description}</DescriptionText>
            <ButtonLink to={card.link}>
              <ButtonText>{card.action}</ButtonText>
            </ButtonLink>
          </Column>
        ))}
      </ColumnsWrapper>
    </Root>
  );
}

export default ConhecaVonderMega;
