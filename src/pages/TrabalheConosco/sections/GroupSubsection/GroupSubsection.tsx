import React from "react";
import styled from "styled-components";

const StyledGroupSubsection = styled.div`
  height: 388px;
  margin-left: 106px;
  position: relative;
  width: 1228px;

  & .group {
    height: 316px;
    left: calc(50.00% - 614px);
    position: absolute;
    top: calc(50.00% - 122px);
    width: 1230px;
  }

  & .div {
    background-color: #f6be00;
    border-radius: 16px;
    height: 316px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1228px;
  }

  & .j-pensou-em {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 40px;
    font-weight: 400;
    left: calc(50.00% - 555px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: calc(50.00% - 96px);
    width: 497px;
  }

  & .text-wrapper {
    font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
    font-style: italic;
    font-weight: 300;
  }

  & .span {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }

  & .group-2 {
    height: 388px;
    left: 620px;
    position: absolute;
    top: 0;
    width: 587px;
  }

  & .c {
    aspect-ratio: 0.76;
    height: 360px;
    left: 0;
    position: absolute;
    top: 28px;
    width: 275px;
  }

  & .img {
    aspect-ratio: 0.63;
    height: 364px;
    left: 356px;
    position: absolute;
    top: 24px;
    width: 231px;
  }

  & .c-2 {
    aspect-ratio: 0.77;
    height: 388px;
    left: 150px;
    position: absolute;
    top: 0;
    width: 300px;
  }
`;

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupSubsection className="group-subsection">
      <div className="group">
        <div className="div" />
        <p className="j-pensou-em">
          <span className="text-wrapper">
            Já pensou em trabalhar com
            <br />
          </span>
          <span className="span">
            o maior e mais completo mix
            <br />
            de ferramentas profissionais e industriais da América Latina?
          </span>
        </p>
      </div>
      <div className="group-2">
        <img
          className="c"
          alt="C"
          src="https://c.animaapp.com/jIsSRIVa/img/c-2@2x.png"
        />
        <img
          className="img"
          alt="C"
          src="https://c.animaapp.com/jIsSRIVa/img/c-3@2x.png"
        />
        <img
          className="c-2"
          alt="C"
          src="https://c.animaapp.com/jIsSRIVa/img/c-1@2x.png"
        />
      </div>
    </StyledGroupSubsection>
  );
};
