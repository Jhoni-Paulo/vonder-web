import React from "react";
import styled from "styled-components";

export const Group1Subsection = (): React.JSX.Element => {
  return (
    <Container>
      <Group43>
        <Group44>
          <Group45>
            <Rectangle3 />
            <TextWrapper23>Fale Conosco</TextWrapper23>
          </Group45>
          <TextWrapper24>Ainda tem dúvidas?</TextWrapper24>
          <ContamosComUma>
            Contamos com uma equipe de profissionais altamente capacitados e
            sempre à disposição para atendê-lo!
            <br />
            Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre
            nossos produtos e serviços.
          </ContamosComUma>
        </Group44>
      </Group43>
      <PngMockVonder
        alt="Png mock vonder"
        src="https://c.animaapp.com/jIsSRIVa/img/png-mock-vonder-2.png"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 525px;
  margin-left: 116px;
  margin-top: 70px;
  position: relative;
  width: 1209px;
`;

const Group43 = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  height: 400px;
  justify-content: center;
  left: calc(50.00% - 296px);
  position: absolute;
  top: 70px;
  width: 900px;
`;

const Group44 = styled.div`
  height: 288px;
  margin-left: 264px;
  margin-top: 56px;
  position: relative;
  width: 504px;
`;

const Group45 = styled.div`
  height: 20.14%;
  left: 0;
  position: absolute;
  top: 79.86%;
  width: 59.92%;
`;

const Rectangle3 = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.34%;
`;

const TextWrapper23 = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 41.38%;
  left: 27.15%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 29.31%;
  width: 45.08%;
`;

const TextWrapper24 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 452px;
`;

const ContamosComUma = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 84px;
  width: 500px;
`;

const PngMockVonder = styled.img`
  aspect-ratio: 1.08;
  height: 525px;
  left: 0;
  position: absolute;
  top: 0;
  width: 567px;
`;
