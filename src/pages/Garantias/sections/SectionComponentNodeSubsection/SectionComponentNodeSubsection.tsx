import React from "react";
import styled from "styled-components";

const SectionComponentNodeSubsectionContainer = styled.div`
  height: 500px;
  margin-left: 160px;
  margin-top: 90px;
  position: relative;
  width: 1120px;
`;

const Group20 = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  height: 400px;
  justify-content: center;
  left: calc(50.00% - 340px);
  position: absolute;
  top: 70px;
  width: 900px;
`;

const Group21 = styled.div`
  height: 302px;
  margin-left: 234px;
  margin-top: 49px;
  position: relative;
  width: 504px;
`;

const Group22 = styled.div`
  height: 19.21%;
  left: 0;
  position: absolute;
  top: 80.79%;
  width: 59.92%;
`;

const Rectangle9 = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.34%;
`;

const TextWrapper18 = styled.div`
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

const TextWrapper19 = styled.div`
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
  white-space: nowrap;
`;

const TextWrapper20 = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 22px;
  font-weight: 300;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 84px;
  width: 500px;
`;

const PngMockVonder = styled.img`
  aspect-ratio: 1;
  height: 500px;
  left: 0;
  position: absolute;
  top: 0;
  width: 500px;
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <SectionComponentNodeSubsectionContainer>
      <Group20>
        <Group21>
          <Group22>
            <Rectangle9 />
            <TextWrapper18>Fale Conosco</TextWrapper18>
          </Group22>
          <TextWrapper19>Ainda precisa de ajuda?</TextWrapper19>
          <TextWrapper20>
            Se você não localizou uma revenda próxima ou não encontrou a opção
            ideal nos nossos revendedores online, não se preocupe! Clique no
            botão abaixo e nossa equipe estará pronta para orientá-lo e garantir
            que você tenha a melhor experiência com nossos produtos.
          </TextWrapper20>
        </Group21>
      </Group20>
      <PngMockVonder
        alt="Png mock vonder"
        src="https://c.animaapp.com/uUmb9Vky/img/png-mock-vonder-2.png"
      />
    </SectionComponentNodeSubsectionContainer>
  );
};
