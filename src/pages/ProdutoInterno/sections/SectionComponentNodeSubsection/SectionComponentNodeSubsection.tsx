import React from "react";
import styled from "styled-components";

const Section = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1216px;
  padding: 0 24px;
  width: 100%;
`;

const PngMockVonder = styled.img`
  aspect-ratio: 1.08;
  flex: 0 0 auto;
  height: 525px;
  max-width: 100%;
  width: 567px;

  @media (max-width: 900px) {
    height: auto;
    width: 320px;
  }
`;

const Card = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 500px;
  justify-content: center;
  max-width: 900px;
  padding: 56px 24px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
  width: 100%;
`;

const FaleConoscoButton = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  padding: 15px 40px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const FaleConoscoText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
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

const ContamosComUma = styled.p`
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

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <PngMockVonder
        alt="Png mock vonder"
        src="https://c.animaapp.com/C1uOODCl/img/png-mock-vonder-2.png"
      />
      <Card>
        <CardContent>
          <FaleConoscoButton>
            <FaleConoscoText>Fale Conosco</FaleConoscoText>
          </FaleConoscoButton>
          <Title>Ainda tem dúvidas?</Title>
          <ContamosComUma>
            Contamos com uma equipe de profissionais altamente capacitados e
            sempre à disposição para atendê-lo!
            <br />
            Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre
            nossos produtos.
          </ContamosComUma>
        </CardContent>
      </Card>
    </Section>
  );
};
