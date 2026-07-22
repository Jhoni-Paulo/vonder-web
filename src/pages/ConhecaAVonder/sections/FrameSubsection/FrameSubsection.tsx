import React from "react";
import styled from "styled-components";

const StyledFrameSubsection = styled.div`
  align-items: flex-start;
  background-image: url(https://c.animaapp.com/HXGo4e2k/img/frame-419.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  height: 564px;
  margin-top: -20px;
  padding: 55px 0px 89px calc((100% - 1440px) / 2);
  position: relative;
  width: 100%;
  z-index: 1;

  @media (max-width: 1480px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 900px) {
    height: auto;
    min-height: 480px;
    padding-top: 40px;
    padding-bottom: 60px;
  }

  @media (max-width: 600px) {
    min-height: 420px;
    padding: 32px 20px 40px;
  }

  & .frame {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
    padding: 10px;
    position: relative;
  }

  & .p-gina-inicial-nossa {
    color: #ffffff;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    max-width: 100%;
    position: relative;
    width: 628px;

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }

  & .text-wrapper {
    font-weight: 300;
  }

  & .span {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  & .div {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    max-width: 100%;
    position: relative;
    width: 520px;
  }

  & .a-FERRAMENTA-DO-wrapper {
    align-items: center;
    align-self: stretch;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
    padding: 10px;
    position: relative;
    width: 100%;
  }

  & .a-FERRAMENTA-DO {
    color: transparent;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    max-width: 100%;
    position: relative;
    width: 500px;

    @media (max-width: 900px) {
      font-size: 46px;
    }

    @media (max-width: 600px) {
      font-size: 34px;
    }
  }

  & .text-wrapper-2 {
    color: #ffffff;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
  }

  & .text-wrapper-3 {
    color: #f6be00;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
  }

  & .p {
    color: #ffffff;
    font-family: "Swis721 Cn BT-Roman", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 38px;
    margin-top: -1px;
    max-width: 100%;
    position: relative;
    width: 400px;

    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 1.5;
    }
  }

  & .div-wrapper {
    align-items: center;
    background-color: #f6be00;
    border-radius: 100px;
    display: flex;
    gap: 10px;
    height: 50px;
    justify-content: center;
    padding: 13px 50px 13px 51px;
    position: relative;
    width: 286px;
  }

  & .text-wrapper-4 {
    color: #000000;
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

export const FrameSubsection = (): React.JSX.Element => {
  return (
    <StyledFrameSubsection className="frame-subsection">
      <div className="frame">
        <p className="p-gina-inicial-nossa">
          <span className="text-wrapper">Página inicial &gt; </span>
          <span className="span">Nossa história</span>
        </p>
      </div>
      <div className="div">
        <div className="a-FERRAMENTA-DO-wrapper">
          <p className="a-FERRAMENTA-DO">
            <span className="text-wrapper-2">
              A FERRAMENTA
              <br />
              DO{" "}
            </span>
            <span className="text-wrapper-3">BRASIL</span>
          </p>
        </div>
        <div className="frame">
          <p className="p">
            Há mais de 28 anos desenvolvendo soluções que impulsionam o trabalho
            de milhões de profissionais em todo Brasil.
          </p>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-4">Conheça nossa história</div>
        </div>
      </div>
    </StyledFrameSubsection>
  );
};
