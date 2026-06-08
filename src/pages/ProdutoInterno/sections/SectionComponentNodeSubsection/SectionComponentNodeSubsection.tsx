import React from "react";
import styled from "styled-components";

const SectionComponentNodeSubsectionContainer = styled.div`
  position: absolute;
  top: 3139px;
  left: 112px;
  width: 1216px;
  height: 525px;
`;

const Group29 = styled.div`
  position: absolute;
  top: 70px;
  left: calc(50.00% - 292px);
  width: 900px;
  height: 400px;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const Group30 = styled.div`
  position: relative;
  width: 504px;
  height: 288px;
  margin-left: 250px;
  margin-top: 56px;
`;

const Group31 = styled.div`
  position: absolute;
  top: 79.86%;
  left: 0;
  width: 59.92%;
  height: 20.14%;
`;

const Rectangle2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 99.34%;
  height: 100%;
  background-color: #000000;
  border-radius: 100px;
`;

const TextWrapper11 = styled.div`
  position: absolute;
  top: 29.31%;
  left: 27.15%;
  width: 45.08%;
  height: 41.38%;
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
`;

const TextWrapper12 = styled.div`
  position: absolute;
  top: 0;
  left: calc(50.00% - 252px);
  width: 452px;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const ContamosComUma = styled.p`
  position: absolute;
  top: 84px;
  left: calc(50.00% - 252px);
  width: 500px;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
`;

const PngMockVonder = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 567px;
  height: 525px;
  aspect-ratio: 1.08;
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <SectionComponentNodeSubsectionContainer>
      <Group29>
        <Group30>
          <Group31>
            <Rectangle2 />
            <TextWrapper11>Fale Conosco</TextWrapper11>
          </Group31>
          <TextWrapper12>Ainda tem dúvidas?</TextWrapper12>
          <ContamosComUma>
            Contamos com uma equipe de profissionais altamente capacitados e
            sempre à disposição para atendê-lo!
            <br />
            Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre
            nossos produtos.
          </ContamosComUma>
        </Group30>
      </Group29>
      <PngMockVonder
        alt="Png mock vonder"
        src="https://c.animaapp.com/C1uOODCl/img/png-mock-vonder-2.png"
      />
    </SectionComponentNodeSubsectionContainer>
  );
};
