import React from "react";
import styled from "styled-components";

const StyledSectionComponentNodeSubsection = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 76px;
  justify-content: center;
  max-width: 1440px;
  padding: 0 24px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    gap: 48px 40px;
  }
`;

const Frame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 100%;
  position: relative;
  width: 250px;

  &.frame-18 {
    gap: 23px;
  }
`;

const Icon = styled.img`
  align-self: stretch;
  height: 50px;
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;

  &.quality-title {
    height: auto;
  }
`;

const Description = styled.p`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <StyledSectionComponentNodeSubsection>
      <Frame className="frame-18">
        <Icon
          alt="Diamond"
          src="https://c.animaapp.com/HXGo4e2k/img/diamond@2x.png"
        />
        <Title className="quality-title">
          QUALIDADE QUE
          <br />
          GERA CONFIANÇA
        </Title>
        <Description>
          Produtos desenvolvidos para entregar alto desempenho e máxima
          durabilidade.
        </Description>
      </Frame>
      <Frame>
        <Icon
          alt="Idea"
          src="https://c.animaapp.com/HXGo4e2k/img/idea@2x.png"
        />
        <Title>
          INOVAÇÃO
          <br />
          QUE CONECTA
        </Title>
        <Description>
          Investimos em tecnologia e melhoria continua para facilitar o dia a
          dia dos profissionais.
        </Description>
      </Frame>
      <Frame>
        <Icon
          alt="People"
          src="https://c.animaapp.com/HXGo4e2k/img/people@2x.png"
        />
        <Title>
          PESSOAS QUE
          <br />
          FAZEM A DIFERENÇA
        </Title>
        <Description>
          Valorizamos que faz parte da nossa jornada e dos nossos resultados
          todos os dias,
        </Description>
      </Frame>
      <Frame>
        <Icon
          alt="Address"
          src="https://c.animaapp.com/HXGo4e2k/img/address@2x.png"
        />
        <Title>
          ORGULHO DE
          <br />
          SER BRASILEIRA
        </Title>
        <Description>
          Nascemos no Brasil, crescemos com o Brasil e seguimos construindo o
          futuro.
        </Description>
      </Frame>
    </StyledSectionComponentNodeSubsection>
  );
};
