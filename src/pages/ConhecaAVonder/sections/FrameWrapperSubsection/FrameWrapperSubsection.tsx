import React from "react";
import styled from "styled-components";

const StyledFrameWrapperSubsection = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  max-width: 1440px;
  padding: 0 24px;
  position: relative;
  width: 100%;

  & .frame-2 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 40px;
    justify-content: space-between;
    position: relative;
    width: 100%;

    @media (max-width: 1000px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 24px;
    }
  }

  & .frame-3 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
    position: relative;
    width: 400px;
  }

  & .text-wrapper-5 {
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

  & .FOR-a-BRASILEIRA-QUE {
    align-self: stretch;
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  & .a-VONDER-uma-das {
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
    width: 800px;

    @media (max-width: 1000px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  & .text-wrapper-6 {
    font-weight: 300;
  }

  & .text-wrapper-7 {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

export const FrameWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledFrameWrapperSubsection className="frame-wrapper-subsection">
      <div className="frame-2">
        <div className="frame-3">
          <div className="text-wrapper-5">QUEM SOMOS</div>
          <div className="FOR-a-BRASILEIRA-QUE">
            FORÇA BRASILEIRA
            <br />
            QUE CONSTRÓI
            <br />
            SOLUÇÕES.
          </div>
        </div>
        <p className="a-VONDER-uma-das">
          <span className="text-wrapper-6">A </span>
          <span className="text-wrapper-7">VONDER</span>
          <span className="text-wrapper-6">
            {" "}
            é uma das marcas mais completas do Brasil em sua categoria, sendo
            detentora do melhor e mais completo mix de ferragens, ferramentas,
            máquinas e equipamentos para uso profissional do mercado. Um
            histórico de trabalho e crescimento muito expressivo, incrementando
            seus produtos ano a ano e surpreendendo por sua evolução e
            aprimoramento em diversos segmentos e linhas, sempre primando pela
            máxima qualidade de suas ferramentas e ampla variedade de produtos
            destinados a diferentes segmentos de atuação profissional.
            <br />
            <br />A VONDER é a principal marca do Grupo OVD, um dos maiores
            atacadistas de ferragens e ferramentas do país, com 55 anos de
            mercado e dedicação aos seus parceiros e clientes.
          </span>
        </p>
      </div>
    </StyledFrameWrapperSubsection>
  );
};
