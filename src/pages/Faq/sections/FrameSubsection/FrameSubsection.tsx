import React from "react";
import styled from "styled-components";

const StyledFrameSubsection = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 15px;
  left: calc(50.00% - 615px);
  position: absolute;
  top: 700px;
  width: 1230px;

  & .group {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #00000026;
    height: 110px;
    position: relative;
    width: 400px;
  }

  & .div {
    height: 50px;
    left: calc(50.00% - 170px);
    position: relative;
    top: 30px;
    width: 285px;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 56px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 12px;
  }

  & .img {
    height: 50px;
    left: 0;
    position: absolute;
    top: calc(50.00% - 25px);
    width: 100%;
  }

  & .group-2 {
    height: 50px;
    left: calc(50.00% - 170px);
    position: relative;
    top: 30px;
    width: 304px;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 66px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 12px;
  }

  & .group-3 {
    height: 58px;
    left: calc(50.00% - 170px);
    position: relative;
    top: calc(50.00% - 27px);
    width: 207px;
  }

  & .COMPRAR-e-REVENDER {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 18px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: calc(50.00% - 29px);
  }

  & .group-4 {
    height: 50px;
    left: 0;
    position: absolute;
    top: calc(50.00% - 27px);
    width: 100%;
  }

  & .group-5 {
    height: 58px;
    left: calc(50.00% - 170px);
    position: relative;
    top: calc(50.00% - 29px);
    width: 252px;
  }

  & .SEGURAN-a-e {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 40px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: calc(50.00% - 29px);
  }

  & .group-6 {
    height: 50px;
    left: calc(50.00% - 170px);
    position: relative;
    top: 30px;
    width: 294px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 61px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 12px;
  }

  & .group-7 {
    height: 50px;
    left: calc(50.00% - 170px);
    position: relative;
    top: 30px;
    width: 179px;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 4px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 12px;
  }
`;

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <StyledFrameSubsection className="frame-subsection">
      <div className="group">
        <div className="div">
          <div className="text-wrapper">PRODUTOS VONDER</div>
          <img
            className="img"
            alt="Group"
            src="https://c.animaapp.com/ABVT0Ado/img/group-69132@2x.png"
          />
        </div>
      </div>
      <div className="group">
        <div className="group-2">
          <div className="text-wrapper-2">GARANTIA E SUPORTE</div>
          <img
            className="img"
            alt="Group"
            src="https://c.animaapp.com/ABVT0Ado/img/group-69132-1@2x.png"
          />
        </div>
      </div>
      <div className="group">
        <div className="group-3">
          <div className="COMPRAR-e-REVENDER">
            COMPRAR E<br />
            REVENDER
          </div>
          <img
            className="group-4"
            alt="Group"
            src="https://c.animaapp.com/ABVT0Ado/img/group-69132-2@2x.png"
          />
        </div>
      </div>
      <div className="group">
        <div className="group-5">
          <div className="SEGURAN-a-e">
            SEGURANÇA E <br />
            CONFIABILIDADE
          </div>
          <img
            className="img"
            alt="Group"
            src="https://c.animaapp.com/ABVT0Ado/img/group-69132-3@2x.png"
          />
        </div>
      </div>
      <div className="group">
        <div className="group-6">
          <div className="text-wrapper-3">TRABALHE CONOSCO</div>
          <img
            className="img"
            alt="Group"
            src="https://c.animaapp.com/ABVT0Ado/img/group-69132-4@2x.png"
          />
        </div>
      </div>
      <div className="group">
        <div className="group-7">
          <div className="text-wrapper-4">CONTATO</div>
          <img
            className="img"
            alt="Group"
            src="https://c.animaapp.com/ABVT0Ado/img/group-69132-5@2x.png"
          />
        </div>
      </div>
    </StyledFrameSubsection>
  );
};
