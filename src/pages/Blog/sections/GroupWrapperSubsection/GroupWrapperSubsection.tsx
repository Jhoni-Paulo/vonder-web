import React from "react";
import styled from "styled-components";

const StyledGroupWrapperSubsection = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 1266.5px;

  & .group {
    height: 710px;
    position: relative;
    width: 1266.5px;
  }

  & .frame-14 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 0;
    position: absolute;
    top: 0;
    width: 900px;
  }

  & .frame-15 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 30px;
    position: relative;
    width: 100%;
  }

  & .frame-16 {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    position: relative;
    width: 455px;
  }

  & .text-wrapper-13 {
    align-self: stretch;
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 45px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
  }

  & .text-wrapper-14 {
    color: #333333;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 404px;
  }

  & .frame-17 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 100%;
  }

  & .frame-18 {
    align-items: flex-start;
    align-self: stretch;
    background-color: #f2f2f2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 364px;
    padding: 50px 270px 50px 80px;
    position: relative;
    width: 100%;
  }

  & .frame-19 {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 550px;
  }

  & .frame-20 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-15 {
    color: #333333;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 511px;
  }

  & .text-wrapper-16 {
    align-self: stretch;
    color: #000000;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .group-wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 596px;
    position: absolute;
    top: 141px;
    width: 670px;
  }

  & .group-2 {
    height: 569px;
    position: relative;
    width: 670.5px;
  }

  & .png-mock-vonder {
    aspect-ratio: 0.79;
    height: 443px;
    left: 0;
    position: absolute;
    top: 66px;
    width: 350px;
  }

  & .img {
    aspect-ratio: 0.79;
    height: 506px;
    left: 86px;
    position: absolute;
    top: 33px;
    width: 400px;
  }

  & .png-mock-vonder-2 {
    aspect-ratio: 0.79;
    height: 569px;
    left: 220px;
    position: absolute;
    top: 0;
    width: 450px;
  }
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupWrapperSubsection>
      <div className="group">
        <div className="frame-14">
          <div className="frame-15">
            <div className="frame-16">
              <div className="text-wrapper-13">
                Destaque
                <br />
                do mês
              </div>
              <p className="text-wrapper-14">
                O artigo do mês traz informações valiosas e insights
                exclusivos. Não deixe de conferir!
              </p>
            </div>
            <div className="frame-17">
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <a
                      href="https://conecta.fg.com.br/dicas-e-truques-para-cuidar-do-seu-jardim-no-outono/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <p className="text-wrapper-13">
                        Dicas e truques para cuidar do seu jardim no outono
                      </p>
                    </a>
                    <p className="text-wrapper-15">
                      Veja dicas práticas e truques essenciais para manter
                      suas plantas saudáveis, proteger o solo e preparar o seu
                      jardim para as próximas estações.
                    </p>
                    <div className="text-wrapper-16">+ Ler Mais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-2">
            <img
              className="png-mock-vonder"
              alt="Png mock vonder"
              src="https://c.animaapp.com/bNHZtEYo/img/png-mock-vonder-4@2x.png"
            />
            <img
              className="img"
              alt="Png mock vonder"
              src="https://c.animaapp.com/bNHZtEYo/img/png-mock-vonder-2.png"
            />
            <img
              className="png-mock-vonder-2"
              alt="Png mock vonder"
              src="https://c.animaapp.com/bNHZtEYo/img/png-mock-vonder-3.png"
            />
          </div>
        </div>
      </div>
    </StyledGroupWrapperSubsection>
  );
};
