import React from "react";
import styled from "styled-components";

export const Frame1Subsection = (): React.JSX.Element => {
  return (
    <StyledFrame1Subsection>
      <div className="frame-55">
        <div className="element-banner-principal-wrapper">
          <img
            className="element-banner-principal"
            alt="Element banner principal"
            src="https://c.animaapp.com/F8lHzCc8/img/02-banner-principal-5-1920x480-pxaa-1.png"
          />
        </div>
        <div className="frame-56">
          <div className="PFV-e-PFV">
            PFV 238
            <br />E PFV 238I
          </div>
          <p className="maior-autonomia-e">
            <span className="text-wrapper-24">Maior </span>
            <span className="text-wrapper-25">autonomia</span>
            <span className="text-wrapper-24"> e </span>
            <span className="text-wrapper-25">mobilidade</span>
            <span className="text-wrapper-24"> no trabalho profissional, </span>
            <span className="text-wrapper-25">alta eficiência </span>
            <span className="text-wrapper-24">de operação e o </span>
            <span className="text-wrapper-25">
              melhor desempenho profissional{" "}
            </span>
            <span className="text-wrapper-24">que você já viu!</span>
          </p>
          <div className="frame-57">
            <div className="text-wrapper-26">Conheça</div>
          </div>
        </div>
      </div>
    </StyledFrame1Subsection>
  );
};

const StyledFrame1Subsection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 1171px;
  padding: 0 24px;
  box-sizing: border-box;

  & .frame-55 {
    align-items: center;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  & .element-banner-principal-wrapper {
    align-items: flex-start;
    display: flex;
    flex: 0 0 65%;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    box-sizing: border-box;
  }

  & .element-banner-principal {
    width: 100%;
    height: auto;
    display: block;
  }

  & .frame-56 {
    align-items: flex-end;
    display: flex;
    flex: 0 0 calc(35% - 24px);
    flex-direction: column;
    gap: 30px;

    @media (max-width: 700px) {
      flex: 1;
      align-items: center;
      text-align: center;
    }
  }

  & .PFV-e-PFV {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 50px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.25;
    text-align: right;

    @media (max-width: 700px) {
      text-align: center;
      font-size: 36px;
    }
  }

  & .maior-autonomia-e {
    align-self: stretch;
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.4;
    text-align: right;
    margin: 0;

    @media (max-width: 700px) {
      text-align: center;
      font-size: 18px;
    }
  }

  & .text-wrapper-24 {
    font-weight: 300;
  }

  & .text-wrapper-25 {
    font-family: "Swis721 Cn BT-Regular", Helvetica;
  }

  & .frame-57 {
    align-items: center;
    background-color: #000000;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    height: 60px;
    justify-content: center;
    padding: 15px 40px;
    width: 400px;
    max-width: 100%;
    box-sizing: border-box;
  }

  & .text-wrapper-26 {
    color: #f6be00;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    text-align: center;
  }
`;
