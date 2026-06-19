import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1292px;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 32px;
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
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  padding: 15px 48px;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
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

const Card = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 280px;
  flex-direction: column;
  gap: 14px;
  max-width: 300px;
  min-width: 260px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 15px;
`;

const CardTitle = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
`;

const CardDesc = styled.p`
  color: #555a57;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

const CardLink = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto;
`;

const launches = [
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-5@2x.png",
    title: "Paleteira hidráulica elétrica 1,5 tf PE...",
    desc: "Robusta e durável. Indicada para movimentação de cargas acondicionadas em paletes...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-6@2x.png",
    title: "Torquímetros Digitais com Torque Angular",
    desc: "Indicados para aperto de parafusos com controle preciso de torque e ângulo...",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-7@2x.png",
    title: "Pistolas para Solda PSV 130 e PSV 150",
    desc: "Produtos certificados, garantindo qualidade, eficiência e segurança para as mais diversas aplicações!",
  },
  {
    img: "https://c.animaapp.com/F8lHzCc8/img/mask-group-8@2x.png",
    title: "Bomba Recarregável para Galão de Água VONDER",
    desc: "Compacta, prática e portátil, solução ideal para facilitar o uso de galões de água",
  },
];

export const DivSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>
          Fique por dentro dos nossos
          <br />
          Lançamentos
        </Title>
        <SeeMore type="button">Veja mais</SeeMore>
      </Header>
      <CardsRow>
        {launches.map((item) => (
          <Card key={item.title}>
            <CardImage alt={item.title} src={item.img} />
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
            <CardLink>Ver mais</CardLink>
          </Card>
        ))}
      </CardsRow>
    </Container>
  );
};
