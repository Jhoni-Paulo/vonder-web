import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1228px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  width: 100%;
  max-width: 1009px;
  margin-bottom: -215px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    margin-bottom: 0;
  }
`;

const HeaderTitle = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1;
  margin: 0;
  font-size: 60px;

  strong {
    display: block;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 72px;
    font-style: italic;
    font-weight: 700;
  }

  span {
    font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
    font-style: italic;
    font-weight: 300;
  }

  @media (max-width: 600px) {
    font-size: 34px;
    strong {
      font-size: 44px;
    }
  }
`;

const Collage = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 420px;
  aspect-ratio: 492 / 585;
  max-width: 100%;

  @media (max-width: 1100px) {
    width: 340px;
  }

  @media (max-width: 600px) {
    width: 260px;
  }
`;

const CollageBack = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 67.3%;
  height: auto;
`;

const CollageFront = styled.img`
  position: absolute;
  left: 40%;
  top: 5.5%;
  width: 60%;
  height: auto;
`;

const GrayBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
  width: 100%;
  padding: 50px 96px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    padding: 40px 32px;
  }

  @media (max-width: 600px) {
    padding: 32px 20px;
  }
`;

const Intro = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const ReqGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  justify-content: center;
  width: 100%;
`;

const ReqCard = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  flex: 1 1 calc(50% - 24px);
  min-width: 280px;
  min-height: 74px;
  padding: 16px 22px;
  box-sizing: border-box;
`;

const ReqText = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;

  span.regular {
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-style: normal;
    font-weight: 400;
  }
`;

const SubmitButton = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  padding: 17px 60px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

export const TabRepresentante = (): React.JSX.Element => {
  return (
    <Section>
      <Header>
        <HeaderTitle>
          <span>Seja um</span>
          <strong>
            REPRESENTANTE
            <br />
            COMERCIAL
          </strong>
        </HeaderTitle>
        <Collage>
          <CollageBack alt="VONDER" src="https://c.animaapp.com/V4Bq3Bj7/img/h-3.png" />
          <CollageFront alt="VONDER" src="https://c.animaapp.com/V4Bq3Bj7/img/h-2.png" />
        </Collage>
      </Header>

      <GrayBox>
        <Intro>
          Ajude a expandir a presença da VONDER em todo o Brasil, conquistando
          novos clientes e fortalecendo nossa rede de parceiros.
          <br />
          Confira abaixo os requisitos para ser um Representante Comercial
          VONDER:
        </Intro>
        <ReqGrid>
          <ReqCard>
            <ReqText>
              Registro no Conselho Regional de Representação Comercial
              (regularizado);
            </ReqText>
          </ReqCard>
          <ReqCard>
            <ReqText>Celular e rede de internet móvel</ReqText>
          </ReqCard>
          <ReqCard>
            <ReqText>Empresa de Representação Comercial ativa;</ReqText>
          </ReqCard>
          <ReqCard>
            <ReqText>Não ter vínculo empregatício;</ReqText>
          </ReqCard>
          <ReqCard>
            <ReqText>Condução própria (carro ou moto);</ReqText>
          </ReqCard>
          <ReqCard>
            <ReqText>
              <span className="regular">
                No currículo, incluir as seguintes informações:{" "}
              </span>
              nome, endereço completo, CNPJ, experiências profissionais e área
              de atuação;
            </ReqText>
          </ReqCard>
        </ReqGrid>
        <SubmitButton type="button">Enviar currículo</SubmitButton>
      </GrayBox>
    </Section>
  );
};

export default TabRepresentante;
