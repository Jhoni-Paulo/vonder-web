import React from "react";
import styled from "styled-components";

const GroupWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  margin-left: 106px;
  margin-top: 50px;
  min-width: 1228px;
`;

const Group3 = styled.div`
  height: 221px;
  position: relative;
  width: 1228px;
`;

const Group4 = styled.div`
  height: 221px;
  left: 0;
  position: absolute;
  top: calc(50.00% - 110px);
  width: 20.68%;
`;

const Group5 = styled.div`
  height: 100%;
  left: 26.55%;
  position: absolute;
  top: 0;
  width: 20.68%;
`;

const Group6 = styled.div`
  height: 100%;
  left: 53.09%;
  position: absolute;
  top: 0;
  width: 20.68%;
`;

const Group7 = styled.div`
  height: 100%;
  left: 79.64%;
  position: absolute;
  top: 0;
  width: 20.68%;
`;

const MoraleImage = styled.img`
  aspect-ratio: 1;
  height: 50px;
  left: 39.37%;
  position: absolute;
  top: calc(50.00% - 110px);
  width: 60.63%;
`;

const CardImage = styled.img`
  aspect-ratio: 1;
  height: 100%;
  left: 39.47%;
  position: absolute;
  top: 0;
  width: 60.53%;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  left: calc(50.00% - 127px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 70px;
  width: 250px;
`;

const Description = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  left: calc(50.00% - 127px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 149px;
  width: 250px;
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <GroupWrapper>
      <Group3>
        <Group4>
          <MoraleImage
            alt="Morale"
            src="https://c.animaapp.com/jIsSRIVa/img/morale@2x.png"
          />
          <TextWrapper>
            ÉTICA, RESPEITO
            <br />E VALORES
          </TextWrapper>
          <Description>
            A base para todas as nossas decisões, garantindo soluções duradouras
            e justas.
          </Description>
        </Group4>
        <Group5>
          <CardImage
            alt="Handshake"
            src="https://c.animaapp.com/jIsSRIVa/img/handshake@2x.png"
          />
          <TextWrapper>
            COLABORAÇÃO
            <br />E PROATIVIDADE
          </TextWrapper>
          <Description>
            Valorizamos o trabalho em equipe, onde todos têm a oportunidade de
            contribuir para o sucesso comum.
          </Description>
        </Group5>
        <Group6>
          <CardImage
            alt="Project manager"
            src="https://c.animaapp.com/jIsSRIVa/img/project-manager@2x.png"
          />
          <TextWrapper>
            LIBERDADE COM
            <br />
            RESPONSABILIDADE
          </TextWrapper>
          <Description>
            Incentivamos a autonomia em suas ações, com responsabilidade e foco
            nos resultados.
          </Description>
        </Group6>
        <Group7>
          <CardImage
            alt="Customer insights"
            src="https://c.animaapp.com/jIsSRIVa/img/customer-insights-manager@2x.png"
          />
          <TextWrapper>
            DESAFIAR O
            <br />
            STATUS QUO
          </TextWrapper>
          <Description>
            Estamos sempre em busca de novas soluções, melhores processos e mais
            eficiência.
          </Description>
        </Group7>
      </Group3>
    </GroupWrapper>
  );
};
