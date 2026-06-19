import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CtaWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1229px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CtaImage = styled.img`
  aspect-ratio: 1.08;
  height: auto;
  width: 480px;
  max-width: 100%;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 360px;
  }
`;

const CtaCard = styled.div`
  align-items: flex-start;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  padding: 56px 80px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 40px 28px;
    align-items: center;
    text-align: center;
  }
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

const Text = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Button = styled(Link)`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  color: #f6be00;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  padding: 17px 60px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DivSubsection = (): React.JSX.Element => {
  return (
    <CtaWrapper>
      <CtaImage
        alt="VONDER"
        src="https://c.animaapp.com/fkOynynE/img/png-mock-vonder-2.png"
      />
      <CtaCard>
        <Title>Ainda tem dúvidas?</Title>
        <Text>
          Contamos com uma equipe de profissionais altamente capacitados e
          sempre à disposição para atendê-lo!
          <br />
          Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre nossos
          produtos e serviços.
        </Text>
        <Button to="/fale-conosco">Fale Conosco</Button>
      </CtaCard>
    </CtaWrapper>
  );
};
