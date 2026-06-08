import React from "react";
import styled from "styled-components";

const StyledGroupWrapperSubsection = styled.div`
  height: 319px;
  left: 106px;
  position: absolute;
  top: 4863px;
  width: 1230px;
`;

const Group3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.6px;
  height: 200px;
  left: calc(50.00% + 213px);
  position: absolute;
  top: 44px;
  width: 404px;
`;

const TextWrapper5 = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 25px;
  font-weight: 700;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 260px;
`;

const ASolucaoInteligente = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 160.4px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  width: 400px;
`;

const AVonderAcredita = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: calc(50.00% - 160px);
  width: 750px;
`;

const TextWrapper6 = styled.span`
  font-weight: 300;
`;

const TextWrapper7 = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupWrapperSubsection>
      <Group3>
        <TextWrapper5>TECNOLOGIA E INOVAÇÃO</TextWrapper5>
        <ASolucaoInteligente>
          A SOLUÇÃO INTELIGENTE DO
          <br />
          SEU SUCESSO
        </ASolucaoInteligente>
      </Group3>
      <AVonderAcredita>
        <TextWrapper6>A </TextWrapper6>
        <TextWrapper7>VONDER</TextWrapper7>
        <TextWrapper6>
          {" "}
          acredita que a tecnologia e uma forte infraestrutura são a base para o
          desenvolvimento de novos produtos, além do acompanhamento técnico e
          aprimoramento constante de cada uma das suas linhas.
          <br />
          Cada produto passa por um crivo técnico que acompanha todo processo de
          desenvolvimento, desde a análise do projeto até a aceitação e
          necessidade do mercado. Além disso, a VONDER acredita que uma marca
          forte investe constantemente na exposição dos produtos no ponto de
          venda, proporcionando ao revendedor uma apresentação estratégica e
          atrativa, assegurando ótimo retorno comercial, através de projetos e
          consultoria técnica de Comunicação, Marketing e Vendas para nortear
          suas ações de Trade no mercado.
        </TextWrapper6>
      </AVonderAcredita>
    </StyledGroupWrapperSubsection>
  );
};
