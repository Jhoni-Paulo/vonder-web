import React from "react";
import styled from "styled-components";

export const Group1Subsection = (): React.JSX.Element => {
  return (
    <Group1SubsectionContainer>
      <Camada
        alt="Camada"
        src="https://c.animaapp.com/ea7M9uhj/img/camada-1-6.svg"
      />
      <OverlapGroupWrapper>
        <OverlapGroup2>
          <Group52>
            <Group53>
              <Rectangle6 />
              <TextWrapper30>EPI</TextWrapper30>
            </Group53>
          </Group52>
          <Group54>
            <Group53>
              <Rectangle6 />
              <LinhaIntercambiavel>
                Linha
                <br />
                Intercambiável
              </LinhaIntercambiavel>
            </Group53>
          </Group54>
          <Group55>
            <Group56>
              <Rectangle7 />
              <TextWrapper31>Abrasivos</TextWrapper31>
            </Group56>
          </Group55>
          <Group57>
            <Group56>
              <Rectangle7 />
              <TransporteE>
                Transporte e
                <br /> Armazenagem
              </TransporteE>
            </Group56>
          </Group57>
          <Group58>
            <Group59>
              <Rectangle8 />
              <TextWrapper32>Ferramentas Elétricas</TextWrapper32>
            </Group59>
          </Group58>
        </OverlapGroup2>
      </OverlapGroupWrapper>
      <Camada
        alt="Camada"
        src="https://c.animaapp.com/ea7M9uhj/img/camada-1-7.svg"
      />
    </Group1SubsectionContainer>
  );
};

const Group1SubsectionContainer = styled.div`
  display: flex;
  gap: 80px;
  height: 550px;
  left: 78px;
  position: absolute;
  top: 920px;
  width: 1284px;
`;

const Camada = styled.img`
  height: 33px;
  margin-top: 259px;
  width: 33px;
`;

const OverlapGroupWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  min-width: 1058px;
`;

const OverlapGroup2 = styled.div`
  height: 550px;
  position: relative;
  width: 1058px;
`;

const Group52 = styled.div`
  background-image: url(https://c.animaapp.com/ea7M9uhj/img/mask-group-13@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 450px;
  left: 772px;
  opacity: 0.3;
  position: absolute;
  top: 50px;
  width: 286px;
`;

const Group53 = styled.div`
  height: 68px;
  margin-left: 22px;
  margin-top: 336px;
  position: relative;
  width: 244px;
`;

const Rectangle6 = styled.div`
  -webkit-backdrop-filter: blur(30px) brightness(100%);
  backdrop-filter: blur(30px) brightness(100%);
  background-color: #0e0e0e99;
  border-radius: 100px;
  height: 68px;
  left: 0;
  position: absolute;
  top: 0;
  width: 242px;
`;

const TextWrapper30 = styled.div`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  left: calc(50% - 75px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50% - 13px);
  width: 148px;
`;

const Group54 = styled.div`
  background-image: url(https://c.animaapp.com/ea7M9uhj/img/mask-group-14@2x.png);
  background-size: 100% 100%;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 450px;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 50px;
  width: 286px;
`;

const LinhaIntercambiavel = styled.div`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  left: calc(50% - 121px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50% - 29px);
  width: 240px;
`;

const Group55 = styled.div`
  background-image: url(https://c.animaapp.com/ea7M9uhj/img/mask-group-15.png);
  background-size: 100% 100%;
  display: flex;
  height: 500px;
  left: 193px;
  opacity: 0.6;
  position: absolute;
  top: 25px;
  width: 286px;
`;

const Group56 = styled.div`
  height: 76px;
  margin-left: 22px;
  margin-top: 373px;
  position: relative;
  width: 244px;
`;

const Rectangle7 = styled.div`
  -webkit-backdrop-filter: blur(30px) brightness(100%);
  backdrop-filter: blur(30px) brightness(100%);
  background-color: #0e0e0e99;
  border-radius: 100px;
  height: 76px;
  left: 0;
  position: absolute;
  top: 0;
  width: 242px;
`;

const TextWrapper31 = styled.div`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  left: calc(50% - 75px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50% - 15px);
  width: 148px;
`;

const Group57 = styled.div`
  background-image: url(https://c.animaapp.com/ea7M9uhj/img/mask-group-16.png);
  background-size: 100% 100%;
  display: flex;
  height: 500px;
  left: 579px;
  opacity: 0.6;
  position: absolute;
  top: 25px;
  width: 286px;
`;

const TransporteE = styled.div`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  left: calc(50% - 120px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50% - 27px);
  width: 238px;
`;

const Group58 = styled.div`
  background-image: url(https://c.animaapp.com/ea7M9uhj/img/mask-group-17.png);
  background-size: 100% 100%;
  display: flex;
  height: 550px;
  left: 386px;
  position: absolute;
  top: 0;
  width: 286px;
`;

const Group59 = styled.div`
  height: 84.04px;
  margin-left: 22px;
  margin-top: 410.3px;
  position: relative;
  width: 244px;
`;

const Rectangle8 = styled.div`
  -webkit-backdrop-filter: blur(30px) brightness(100%);
  backdrop-filter: blur(30px) brightness(100%);
  background-color: #0e0e0e99;
  border-radius: 100px;
  height: 84px;
  left: 0;
  position: absolute;
  top: 0;
  width: 242px;
`;

const TextWrapper32 = styled.div`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  left: calc(50% - 75px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: calc(50% - 27px);
  width: 148px;
`;
