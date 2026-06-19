import React from "react";
import styled from "styled-components";

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <Group7>
        <PngMockVonder
          alt="Png mock vonder"
          src="https://c.animaapp.com/Qnwadh4r/img/png-mock-vonder-2.png"
        />
        <Group9>
          <TextWrapper20>Ainda precisa de ajuda?</TextWrapper20>
          <TextWrapper21>
            Se você não localizou uma revenda próxima ou não encontrou a opção
            ideal nos nossos revendedores online, não se preocupe! Clique no
            botão abaixo e nossa equipe estará pronta para orientá-lo e garantir
            que você tenha a melhor experiência com nossos produtos.
          </TextWrapper21>
          <Group10>
            <Rectangle6 />
            <TextWrapper19>Fale Conosco</TextWrapper19>
          </Group10>
        </Group9>
      </Group7>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
`;

const Group7 = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1120px;
  padding: 40px 32px;
  width: 100%;
  box-sizing: border-box;
`;

const Group8 = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`;

const Group9 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 280px;
  min-width: 260px;
  max-width: 520px;
`;

const Group10 = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
`;

const Rectangle6 = styled.div`
  background-color: #000000;
  border-radius: 100px;
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const TextWrapper19 = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  padding: 10px 24px;
  position: relative;
  text-align: center;
  z-index: 1;
  cursor: pointer;
`;

const TextWrapper20 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(26px, 4vw, 45px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const TextWrapper21 = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: clamp(16px, 2vw, 22px);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.5;
  margin: 0;
  max-width: 500px;
`;

const PngMockVonder = styled.img`
  flex: 0 0 auto;
  width: min(400px, 90vw);
  height: auto;
  display: block;
`;
