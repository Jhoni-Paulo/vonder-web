import React from "react";
import styled from "styled-components";

const DivWrapperSubsectionContainer = styled.div`
  position: absolute;
  top: 1150px;
  left: 106px;
  width: 1228px;
  height: 766px;
`;

const FrameWrapper = styled.div`
  position: absolute;
  top: 246px;
  left: 1px;
  width: 1228px;
  height: 550px;
  display: flex;
`;

const Frame = styled.div`
  position: relative;
  width: 1228px;
  height: 550px;
  display: inline-flex;
  align-items: center;
  gap: 28px;
`;

const GroupCard = styled.div`
  position: relative;
  width: 286px;
  height: 550px;
  background-size: 100% 100%;
`;

const Group5 = styled(GroupCard)`
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group.png);
`;

const Group7 = styled(GroupCard)`
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group-1.png);
`;

const Group8 = styled(GroupCard)`
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group-2.png);
`;

const Group9 = styled(GroupCard)`
  background-image: url(https://c.animaapp.com/w4wnBid1/img/mask-group-3.png);
`;

const Group6 = styled.div`
  position: relative;
  width: 246px;
  height: 201px;
  top: 320px;
  left: calc(50% - 120px);
`;

const TextWrapper6 = styled.p`
  position: absolute;
  top: 75px;
  left: calc(50% - 123px);
  width: 240px;
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const TextWrapper7 = styled.div`
  position: absolute;
  top: 86.5%;
  left: 0;
  width: 97.56%;
  height: 13.5%;
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const TextWrapper8 = styled.p`
  position: absolute;
  top: 0;
  left: calc(50% - 123px);
  width: 240px;
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const TextWrapper9 = styled.p`
  position: absolute;
  top: 0;
  left: calc(50% - 123px);
  width: 240px;
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Group10 = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 614px);
  width: 456px;
  height: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PublicacoesMais = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  width: 451.63px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
`;

const TextWrapper10 = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  width: 399.67px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -56px;
`;

const Group11 = styled.div`
  position: absolute;
  top: 17.1%;
  left: 76.73%;
  width: 23.43%;
  height: 6.53%;
`;

const Rectangle2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 99.3%;
  height: 100%;
  background-color: #000000;
  border-radius: 100px;
`;

const TextWrapper11 = styled.div`
  position: absolute;
  top: 29.31%;
  left: 27.14%;
  width: 45.07%;
  height: 41.38%;
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
`;

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <DivWrapperSubsectionContainer>
      <FrameWrapper>
        <Frame>
          <Group5>
            <Group6>
              <TextWrapper6>
                CONFIRA ALGUMAS DICAS QUE PREPARAMOS PARA FACILITAR SEU DIA A
                DIA NA COZINHA
                <br />
                Cozinhar é uma atividade
                <br />
                Nada melhor do que sair de...
              </TextWrapper6>
              <TextWrapper7>Ler Mais</TextWrapper7>
              <TextWrapper8>
                Dicas que facilitam sua rotina na cozinha
              </TextWrapper8>
            </Group6>
          </Group5>
          <Group7>
            <Group6>
              <TextWrapper6>
                SAIBA QUAIS FATORES DEVEM SER CONSIDERADOS NA MANUTENÇÃO DE SEU
                PAINEL SOLAR
                <br />A tecnologia para geração
              </TextWrapper6>
              <TextWrapper7>Ler Mais</TextWrapper7>
              <TextWrapper9>
                Limpeza e manutenção de painéis fotovoltaicos: como impactam
                positivamente na eficiência?
              </TextWrapper9>
            </Group6>
          </Group7>
          <Group8>
            <Group6>
              <TextWrapper6>
                A mecanização agrícola revolucionou os processos de plantio e
                manutenção das culturas, proporcionando ganhos
              </TextWrapper6>
              <TextWrapper7>Ler Mais</TextWrapper7>
              <TextWrapper9>
                Atomizador, Soprador e Pulverizador Agrícola: Quais as
                principais características
              </TextWrapper9>
            </Group6>
          </Group8>
          <Group9>
            <Group6>
              <TextWrapper6>
                CONFIRA A SEGUIR OS PRINCIPAIS ATRIBUTOS DESTE IMPORTANTE EPI,
                OS CALÇADOS DE SEGURANÇA!
                <br />
                No ambiente
              </TextWrapper6>
              <TextWrapper7>Ler Mais</TextWrapper7>
              <TextWrapper9>
                Botas e calçados de segurança: inovação e características que
                fazem a diferença
              </TextWrapper9>
            </Group6>
          </Group9>
        </Frame>
      </FrameWrapper>
      <Group10>
        <PublicacoesMais>
          Publicações
          <br />
          mais recentes
        </PublicacoesMais>
        <TextWrapper10>
          Explore as últimas publicações e não perca nenhum detalhe do que
          acabou de chegar!
        </TextWrapper10>
      </Group10>
      <Group11>
        <Rectangle2 />
        <TextWrapper11>Ver tudo</TextWrapper11>
      </Group11>
    </DivWrapperSubsectionContainer>
  );
};
