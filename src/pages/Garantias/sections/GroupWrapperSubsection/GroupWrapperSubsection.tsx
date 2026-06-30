import React from "react";
import styled from "styled-components";

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <HelpOuter>
        {/* Imagem fora do box cinza, à esquerda, 30% sobrepõe o box */}
        <ImageWrap>
          <HelpImage
            alt="Suporte Vonder"
            src="https://c.animaapp.com/Qnwadh4r/img/png-mock-vonder-2.png"
          />
        </ImageWrap>

        {/* Box cinza — padding-left acomoda os 30% de sobreposição */}
        <GrayBox>
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
        </GrayBox>
      </HelpOuter>
    </Wrapper>
  );
};

/* ── Layout ── */

const Wrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
`;

/* Row externo: imagem + box lado a lado */
const HelpOuter = styled.div`
  align-items: stretch;
  display: flex;
  max-width: 1120px;
  position: relative;
  width: 100%;
`;

/* Wrap da imagem: estica com o box + extrapola 50px acima/abaixo */
const ImageWrap = styled.div`
  flex-shrink: 0;
  margin: -50px 0;
  margin-right: -162px; /* 30% de 541px */
  position: relative;
  width: 541px;
  z-index: 1;

  /* Tablet: reduz proporcionalmente */
  @media (max-width: 1200px) {
    margin-right: -108px; /* 30% de 360px */
    width: 360px;
  }

  /* Mobile: esconde a imagem */
  @media (max-width: 900px) {
    display: none;
  }
`;

const HelpImage = styled.img`
  border-radius: 16px;
  display: block;
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

/* Box cinza */
const GrayBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 48px 48px 48px 226px; /* 162px overlap + 64px interno */
  position: relative;
  z-index: 0;

  /* Tablet: overlap menor */
  @media (max-width: 1200px) {
    padding: 40px 40px 40px 172px; /* 108px overlap + 64px interno */
  }

  /* Mobile: sem imagem, padding normal, alinha à esquerda */
  @media (max-width: 900px) {
    align-items: flex-start;
    padding: 40px 36px;
  }

  @media (max-width: 600px) {
    padding: 32px 20px;
  }
`;

/* ── Conteúdo do box ── */

const TextWrapper20 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(26px, 4vw, 45px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
  width: 100%;
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
  text-align: left;
  width: 100%;
`;

const Group10 = styled.div`
  align-self: flex-start;
  display: flex;
  position: relative;
  width: fit-content;
`;

const Rectangle6 = styled.div`
  background-color: #000000;
  border-radius: 100px;
  inset: 0;
  position: absolute;
  z-index: 0;
`;

const TextWrapper19 = styled.div`
  color: #f6be00;
  cursor: pointer;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  padding: 10px 24px;
  position: relative;
  text-align: center;
  z-index: 1;
`;
