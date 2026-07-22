import React from "react";
import styled from "styled-components";

const StyledGroupWrapperSubsection = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;

  & .group {
    height: 566px;
    position: relative;
    width: 100%;
  }

  & .group-2 {
    background-color: #f2f2f2;
    height: 443px;
    left: 0;
    position: absolute;
    top: calc(50% - 234px);
    width: 100%;
  }

  & .frame-wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: calc((100% - 1440px) / 2);
    position: absolute;
    top: 0;
    width: 1440px;
  }

  & .frame-4 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  & .desde-o-lan-amento-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
  }

  & .desde-o-lan-amento {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: justify;
    width: 700px;
  }

  & .text-wrapper-8 {
    font-weight: 300;
  }

  & .text-wrapper-9 {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  & .img {
    flex: 0 0 auto;
    position: relative;
  }

  @media (max-width: 1440px) {
    background-color: #f2f2f2;
    box-sizing: border-box;
    padding: 48px 24px;

    & .group {
      height: auto;
    }

    & .group-2 {
      display: none;
    }

    & .frame-wrapper {
      left: auto;
      position: static;
      width: 100%;
    }

    & .frame-4 {
      align-items: flex-start;
      flex-direction: column;
      gap: 32px;
    }

    & .desde-o-lan-amento {
      width: 100%;
    }

    & .img {
      align-self: center;
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    padding: 40px 20px;

    & .desde-o-lan-amento {
      font-size: 18px;
    }
  }
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupWrapperSubsection className="group-wrapper-subsection">
      <div className="group">
        <div className="group-2" />
        <div className="frame-wrapper">
          <div className="frame-4">
            <div className="desde-o-lan-amento-wrapper">
              <p className="desde-o-lan-amento">
                <span className="text-wrapper-8">
                  Desde o lançamento do seu primeiro produto, o{" "}
                </span>
                <span className="text-wrapper-9">VONDER LUB</span>
                <span className="text-wrapper-8">
                  , em 1997, a VONDER não parou de crescer e evoluir. O que
                  começou com uma solução inovadora para o mercado de
                  lubrificantes, se transformou em uma jornada de excelência e
                  confiança. Hoje, a marca é reconhecida como referência no
                  desenvolvimento de ferramentas robustas, modernas e de alta
                  performance, voltadas para uso profissional e industrial. Com
                  uma trajetória sólida, a VONDER conquistou a preferência de
                  profissionais e lojistas em diversas categorias, sendo
                  constantemente apontada pelos meios especializados do setor
                  industrial e revendedores como uma das marcas mais confiáveis
                  e preferidas do mercado. Ao longo dos anos, tornou-se uma das
                  mais premiadas e respeitadas no segmento, consolidando-se como
                  líder em inovação e qualidade.
                </span>
              </p>
            </div>
            <img
              className="img"
              alt="Frame"
              src="https://c.animaapp.com/HXGo4e2k/img/frame-69366.svg"
            />
          </div>
        </div>
      </div>
    </StyledGroupWrapperSubsection>
  );
};
