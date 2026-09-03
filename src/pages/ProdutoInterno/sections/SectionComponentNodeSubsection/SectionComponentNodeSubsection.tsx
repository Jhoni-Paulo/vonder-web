import React from "react";
import styled from "styled-components";

/* Mesmo layout de "Acompanhe também as Redes Sociais da OVD!" */
const Section = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 1124px;
  max-width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
    box-sizing: border-box;
    max-width: 640px;
    padding: 0 24px;
    width: 100%;
  }
`;

const CtaGroup = styled.div`
  height: 570px;
  position: relative;
  width: 1124px;
  max-width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    height: auto;
    width: 100%;
  }
`;

const CtaFrame = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 445px;
  justify-content: center;
  left: 204px;
  padding: 39px 40px;
  position: absolute;
  /* Centraliza o card (445px) verticalmente no CtaGroup (570px):
     (570 - 445) / 2 = 62.5px em cima e embaixo. */
  top: 62.5px;
  width: 920px;

  @media (max-width: 1000px) {
    align-items: stretch;
    height: auto;
    left: auto;
    padding: 32px 24px;
    position: relative;
    top: auto;
    width: 100%;
  }
`;

const RectangleWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 920px;

  @media (max-width: 1000px) {
    inset: 0;
    padding: 0;
    width: 100%;
  }
`;

const Rectangle = styled.div`
  align-self: stretch;
  background-color: #f2f2f2;
  border-radius: 20px;
  height: 425px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

const CardContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding-left: 40px;
  position: relative;
  width: 550px;

  @media (max-width: 1000px) {
    max-width: 100%;
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
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 510px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const ContamosComUma = styled.p`
  align-self: stretch;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: relative;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const FaleConoscoButton = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  height: 60px;
  justify-content: center;
  padding: 15px 40px;
  position: relative;
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

const CtaImageWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;

  @media (max-width: 1000px) {
    padding: 0;
    position: relative;
  }
`;

const PngMockVonder = styled.img`
  aspect-ratio: 1.08;
  height: auto;
  position: relative;
  width: 526px;

  @media (max-width: 1000px) {
    height: auto;
    max-width: 100%;
    width: 280px;
  }
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <CtaGroup>
        <CtaFrame>
          <RectangleWrapper>
            <Rectangle />
          </RectangleWrapper>
          <CardContent>
            <Title>Ainda tem dúvidas?</Title>
            <ContamosComUma>
              Contamos com uma equipe de profissionais altamente capacitados e
              sempre à disposição para atendê-lo!
              <br />
              Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre
              nossos produtos.
            </ContamosComUma>
            <FaleConoscoButton>
              <FaleConoscoText>Fale Conosco</FaleConoscoText>
            </FaleConoscoButton>
          </CardContent>
        </CtaFrame>
        <CtaImageWrapper>
          <PngMockVonder
            alt="Png mock vonder"
            src="https://c.animaapp.com/C1uOODCl/img/png-mock-vonder-2.png"
          />
        </CtaImageWrapper>
      </CtaGroup>
    </Section>
  );
};
