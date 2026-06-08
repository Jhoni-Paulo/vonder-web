import React from "react";
import styled, { css } from "styled-components";

export interface Group239Props {
  className: string;
}

const StyledGroup239 = styled.div`
  height: 343px;
  left: 129px;
  position: relative;
  top: 7254px;
  width: 1194px;
`;

const Group60 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 25.46%;
`;

const SempreComVoc = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  width: 98.68%;
`;

const baseDescriptionStyle = css`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
`;

const TextWrapper33 = styled.p`
  ${baseDescriptionStyle}
  width: 98.68%;
`;

const Group61 = styled.div`
  display: flex;
  height: 58px;
  margin-top: auto;
  width: 300px;
`;

const Group62 = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
  width: 302px;
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

const baseButtonText = css`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  z-index: 1;
`;

const TextWrapper34 = styled.div`
  ${baseButtonText}
`;

const Group63 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  left: 37.35%;
  position: absolute;
  top: 0;
  width: 25.63%;
`;

const SectionTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  width: 98.04%;
`;

const AVONDERParagraph = styled.p`
  ${baseDescriptionStyle}
  width: 98.04%;
`;

const Group64 = styled.div`
  align-items: center;
  display: flex;
  height: 58px;
  justify-content: center;
  margin-top: auto;
  position: relative;
  width: 98.69%;
`;

const TextWrapper36 = styled.div`
  ${baseButtonText}
`;

const Group65 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  left: 74.71%;
  position: absolute;
  top: 0;
  width: 25.63%;
`;

const ContamosComUma = styled.p`
  ${baseDescriptionStyle}
  width: 98.04%;
`;

const TextWrapper37 = styled.div`
  ${baseButtonText}
`;

export const Group239 = ({ className }: Group239Props): React.JSX.Element => {
  return (
    <StyledGroup239 className={className}>
      <Group60>
        <SempreComVoc>
          Sempre
          <br />
          com você
        </SempreComVoc>
        <TextWrapper33>
          Oferecemos soluções completas em manutenção, reposição de peças e
          acessórios, visando maximizar o rendimento e a vida útil dos produtos,
          além de suporte ao cliente para eventuais dúvidas no manuseio das
          ferramentas.
        </TextWrapper33>
        <Group61>
          <Group62>
            <Rectangle9 />
            <TextWrapper34>Assistência técnica</TextWrapper34>
          </Group62>
        </Group61>
      </Group60>
      <Group63>
        <SectionTitle>
          Saiba onde
          <br />
          comprar
        </SectionTitle>
        <AVONDERParagraph>
          A VONDER não trabalha com vendas diretas para consumidores finais.
          <br />
          Por isso, indicaremos sempre um revendedor dos nossos produtos que
          esteja próximo da sua localidade.
        </AVONDERParagraph>
        <Group64>
          <Rectangle9 />
          <TextWrapper36>Encontre um distribuidor</TextWrapper36>
        </Group64>
      </Group63>
      <Group65>
        <SectionTitle>
          Entre em
          <br />
          contato
        </SectionTitle>
        <ContamosComUma>
          Contamos com uma equipe de profissionais altamente capacitados e
          sempre à disposição para atendê-lo!
          <br />
          Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre nossos
          produtos.
        </ContamosComUma>
        <Group64>
          <Rectangle9 />
          <TextWrapper37>Fale Conosco</TextWrapper37>
        </Group64>
      </Group65>
    </StyledGroup239>
  );
};
