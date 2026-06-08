import React from "react";
import styled from "styled-components";

const StyledGroupSubsection = styled.div`
  align-items: flex-start;
  display: flex;
  height: 234px;
  left: 106px;
  min-width: 1228px;
  position: absolute;
  top: 334px;

  & .group-wrapper {
    align-items: flex-start;
    background-color: #f2f2f2;
    border-radius: 16px;
    display: flex;
    height: 234px;
    justify-content: flex-end;
    min-width: 1228px;
    padding: 35px 132px;
  }

  & .div-wrapper {
    display: flex;
    justify-content: center;
    width: 654px;
  }

  & .group-8 {
    height: 158px;
    margin-left: 6px;
    position: relative;
    width: 660px;
  }

  & .p {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    left: calc(50.00% - 330px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 100px;
    width: 654px;
  }

  & .text-wrapper-5 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    left: calc(50.00% - 330px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: calc(50.00% - 39px);
    width: 619px;
  }

  & .text-wrapper-6 {
    color: #f6be00;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 25px;
    font-weight: 700;
    left: calc(50.00% - 330px);
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }
`;

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupSubsection>
      <div className="group-wrapper">
        <div className="div-wrapper">
          <div className="group-8">
            <p className="p">
              Encontre respostas rápidas para as principais perguntas sobre
              produtos, garantia, assistência técnica, revenda e muito mais!
            </p>
            <div className="text-wrapper-5">DÚVIDAS FREQUENTES</div>
            <div className="text-wrapper-6">FAQ</div>
          </div>
        </div>
      </div>
    </StyledGroupSubsection>
  );
};
