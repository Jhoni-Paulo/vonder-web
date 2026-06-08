import React from "react";
import styled from "styled-components";

const DivSubsectionWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  left: 106px;
  position: absolute;
  top: 3510px;
  width: 1228px;
`;

const GroupBase = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
`;

const Group5 = GroupBase;
const Group6 = GroupBase;
const Group7 = GroupBase;
const Group8 = GroupBase;

const Diamond = styled.img`
  height: 56px;
  object-fit: contain;
  width: auto;
`;

const GroupImage = styled.img`
  height: 56px;
  object-fit: contain;
  width: auto;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 250px;
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
  width: 250px;
`;

export const DivSubsection = (): React.JSX.Element => {
  return (
    <DivSubsectionWrapper>
      <Group5>
        <Diamond
          alt="Diamond"
          src="https://c.animaapp.com/fomi9SZH/img/diamond@2x.png"
        />
        <TextWrapper>
          QUALIDADE QUE
          <br />
          GERA CONFIANÇA
        </TextWrapper>
        <Description>
          Produtos desenvolvidos para entregar alto desempenho e máxima
          durabilidade.
        </Description>
      </Group5>
      <Group6>
        <GroupImage
          alt="Idea"
          src="https://c.animaapp.com/fomi9SZH/img/idea@2x.png"
        />
        <TextWrapper>
          INOVAÇÃO
          <br />
          QUE CONECTA
        </TextWrapper>
        <Description>
          Investimos em tecnologia e melhoria continua para facilitar o dia a
          dia dos profissionais.
        </Description>
      </Group6>
      <Group7>
        <GroupImage
          alt="People"
          src="https://c.animaapp.com/fomi9SZH/img/people@2x.png"
        />
        <TextWrapper>
          PESSOAS QUE
          <br />
          FAZEM A DIFERENÇA
        </TextWrapper>
        <Description>
          Valorizamos que faz parte da nossa jornada e dos nossos resultados
          todos os dias,
        </Description>
      </Group7>
      <Group8>
        <GroupImage
          alt="Address"
          src="https://c.animaapp.com/fomi9SZH/img/address@2x.png"
        />
        <TextWrapper>
          ORGULHO DE
          <br />
          SER BRASILEIRA
        </TextWrapper>
        <Description>
          Nascemos no Brasil, crescemos com o Brasil e seguimos construindo o
          futuro.
        </Description>
      </Group8>
    </DivSubsectionWrapper>
  );
};
