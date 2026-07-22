import React from "react";
import styled from "styled-components";

const StyledFrame2Subsection = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: space-between;
  max-width: 1440px;
  padding: 0 24px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 28px;
  }

  & .a-VONDER-acredita-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    position: relative;
  }

  & .a-VONDER-acredita {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    max-width: 100%;
    position: relative;
    text-align: justify;
    width: 750px;

    @media (max-width: 1000px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  & .text-wrapper-26 {
    font-weight: 300;
  }

  & .text-wrapper-27 {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  & .frame-25 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
    position: relative;
    width: 400px;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  & .text-wrapper-28 {
    align-self: stretch;
    color: #f6be00;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
  }

  & .a-SOLU-o-INTELIGENTE {
    align-self: stretch;
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    height: 160.4px;
    letter-spacing: 0;
    line-height: normal;
    position: relative;

    @media (max-width: 600px) {
      font-size: 32px;
      height: auto;
    }
  }
`;

export const Frame2Subsection = (): React.JSX.Element => {
  return (
    <StyledFrame2Subsection className="frame-2-subsection">
      <div className="a-VONDER-acredita-wrapper">
        <p className="a-VONDER-acredita">
          <span className="text-wrapper-26">A </span>
          <span className="text-wrapper-27">VONDER</span>
          <span className="text-wrapper-26">
            {" "}
            acredita que a tecnologia e uma forte infraestrutura são a base para
            o desenvolvimento de novos produtos, além do acompanhamento técnico
            e aprimoramento constante de cada uma das suas linhas.
            <br />
            Cada produto passa por um crivo técnico que acompanha todo processo
            de desenvolvimento, desde a análise do projeto até a aceitação e
            necessidade do mercado. Além disso, a VONDER acredita que uma marca
            forte investe constantemente na exposição dos produtos no ponto de
            venda, proporcionando ao revendedor uma apresentação estratégica e
            atrativa, assegurando ótimo retorno comercial, através de projetos e
            consultoria técnica de Comunicação, Marketing e Vendas para nortear
            suas ações de Trade no mercado.
          </span>
        </p>
      </div>
      <div className="frame-25">
        <div className="text-wrapper-28">TECNOLOGIA E INOVAÇÃO</div>
        <p className="a-SOLU-o-INTELIGENTE">
          A SOLUÇÃO INTELIGENTE DO
          <br />
          SEU SUCESSO
        </p>
      </div>
    </StyledFrame2Subsection>
  );
};
