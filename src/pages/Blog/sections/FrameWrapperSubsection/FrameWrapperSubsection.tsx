import React from "react";
import styled from "styled-components";

const StyledFrameWrapperSubsection = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;
  max-width: 820px;
  padding: 0 24px;
  position: relative;
  width: 100%;

  & .frame-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    position: relative;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Swis721 Cn BT-Italic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  & .frame-3 {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
    position: relative;
    width: 428px;
  }

  & .frame-4 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-right: -10px;
    position: relative;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
    font-size: 80px;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;

    @media (max-width: 600px) {
      font-size: 52px;
    }
  }

  & .camada {
    max-width: 150px;
    position: relative;
    width: 250px;

    @media (max-width: 600px) {
      width: 130px;
    }
  }

  & .frame-5 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-5 {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    max-width: 100%;
    position: relative;
    text-align: center;
    width: 800px;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  & .frame-6 {
    align-items: center;
    background-color: #000000;
    border-radius: 100px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    gap: 10px;
    height: 50px;
    justify-content: center;
    max-width: 100%;
    padding: 15px 45px 11px 43px;
    position: relative;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    width: 286px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px #00000040;
    }
  }

  & .text-wrapper-6 {
    color: #f6be00;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const FrameWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledFrameWrapperSubsection>
      <div className="frame-2">
        <div className="text-wrapper-3">Descubra o</div>
      </div>
      <div className="frame-3">
        <div className="frame-4">
          <div className="frame-2">
            <div className="text-wrapper-4">BLOG</div>
          </div>
          <img
            className="camada"
            alt="Camada"
            src="https://c.animaapp.com/bNHZtEYo/img/camada-1.svg"
          />
        </div>
      </div>
      <div className="frame-5">
        <p className="text-wrapper-5">
          Dicas, novidades e conteúdos sobre a VONDER, uso eficiente das
          ferramentas e inovações do setor. Mergulhe conosco nesse universo de
          ferramentas!
        </p>
      </div>
      <div className="frame-6">
        <div className="text-wrapper-6">Ver todas as publicações</div>
      </div>
    </StyledFrameWrapperSubsection>
  );
};
