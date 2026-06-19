import React from "react";
import styled from "styled-components";

const StyledAVonderUmaMarcaWrapperSubsection = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  width: 100%;
  max-width: 1228px;
  box-sizing: border-box;

  & .a-VONDER-uma-marca {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5;
    margin: 0;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  & .text-wrapper-2 {
    font-weight: 300;
  }

  & .text-wrapper-3 {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

export const AVonderUmaMarcaWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledAVonderUmaMarcaWrapperSubsection>
      <p className="a-VONDER-uma-marca">
        <span className="text-wrapper-2">A </span>
        <span className="text-wrapper-3">VONDER</span>
        <span className="text-wrapper-2">
          {" "}
          é uma marca que, desde 1997, transforma o mercado de ferramentas com
          qualidade, inovação e um compromisso contínuo com a evolução. Fazemos
          parte do{" "}
        </span>
        <span className="text-wrapper-3">Grupo OVD</span>
        <span className="text-wrapper-2">
          , um dos maiores e mais conceituados distribuidores atacadistas de
          ferragens, ferramentas, máquinas e equipamentos do Brasil. O grupo
          também possui um portfólio de marcas próprias que são referência no
          mercado, como VONDER, DWT e NOVE54.
          <br />
          <br />
          Com a expertise de mais de 3.000 colaboradores, nossa equipe está
          espalhada por regiões estratégicas do Brasil, garantindo que nossos
          produtos cheguem com confiabilidade a todas as partes do território
          nacional. Estamos sempre em busca de pessoas que compartilhem da nossa
          paixão pela excelência e pelo bom desempenho.
          <br />
          VONDER e Grupo OVD acreditam que o sucesso de nossa trajetória vem da
          união entre dedicação e profissionalismo. Estamos comprometidos em
          oferecer mais do que apenas produtos: proporcionamos soluções que
          fazem a diferença no dia a dia de nossos clientes, sempre buscando
          superar suas expectativas.
          <br />
          <br />
          Mais de 50 anos de história e o empenho da nossa equipe garantem que o
          futuro da VONDER continue a ser impulsionado por quem tem verdadeira
          paixão pelo que faz.
        </span>
      </p>
    </StyledAVonderUmaMarcaWrapperSubsection>
  );
};
