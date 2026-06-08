import React from "react";
import styled from "styled-components";

const StyledGroupSubsection = styled.div`
  height: 564px;
  left: 0;
  position: absolute;
  top: 152px;
  width: 1442px;

  & .element {
    aspect-ratio: 2.55;
    height: 564px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
  }

  & .p-gina-inicial-blog {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 18px;
    font-weight: 400;
    left: calc(50.00% - 615px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 65px;
    width: 628px;
  }

  & .text-wrapper {
    font-weight: 300;
  }

  & .span {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  & .group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    left: calc(50.00% - 615px);
    position: absolute;
    top: 140px;
    width: 602px;
  }

  & .div {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 60px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    width: 600px;
  }

  & .group-wrapper {
    align-items: center;
    background-color: #f6be00;
    border-radius: 100px;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 47.51%;
  }

  & .div-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
  }
`;

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupSubsection>
      <img
        className="element"
        alt="Element"
        src="https://c.animaapp.com/w4wnBid1/img/04-1.png"
      />
      <p className="p-gina-inicial-blog">
        <span className="text-wrapper">Página inicial &gt; </span>
        <span className="span">Blog VONDER</span>
      </p>
      <div className="group">
        <p className="div">
          Qual a diferença entre Esmerilhadeira, Lixadeira e Politriz?
        </p>
        <div className="group-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-2">Ler mais</div>
          </div>
        </div>
      </div>
    </StyledGroupSubsection>
  );
};
