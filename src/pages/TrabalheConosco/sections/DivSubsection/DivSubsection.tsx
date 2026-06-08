import React from "react";
import styled from "styled-components";

export const DivSubsection = (): React.JSX.Element => {
  return (
    <DivSubsectionContainer>
      <Group16>
        <Group17>
          <H2 alt="H" src="https://c.animaapp.com/jIsSRIVa/img/h-2.png" />
          <H3 alt="H" src="https://c.animaapp.com/jIsSRIVa/img/h-3.png" />
        </Group17>
        <SejaUm2>
          <TextWrapper11>
            Seja um
            <br />
          </TextWrapper11>
          <TextWrapper12>
            REPRESENTANTE
            <br />
            COMERCIAL
          </TextWrapper12>
        </SejaUm2>
      </Group16>
      <Group18>
        <Group19>
          <Group20>
            <Rectangle />
            <TextWrapper13>Enviar currículo</TextWrapper13>
          </Group20>
          <AjudeAExpandirA>
            Ajude a expandir a presença da VONDER em todo o Brasil, conquistando
            novos clientes e fortalecendo nossa rede de parceiros.
            <br />
            Confira abaixo os requisitos para ser um Representante Comercial
            VONDER:
          </AjudeAExpandirA>
          <AutoFlex>
            <Group21>
              <Group22>
                <Group23>
                  <Group24>
                    <TextWrapper14>
                      Registro no Conselho Regional de Representação Comercial
                      (regularizado);
                    </TextWrapper14>
                  </Group24>
                </Group23>
              </Group22>
              <Group25>
                <Group26>
                  <Group27>
                    <TextWrapper15>
                      Empresa de Representação Comercial ativa;
                    </TextWrapper15>
                  </Group27>
                </Group26>
              </Group25>
              <Group28>
                <Group29>
                  <Group30>
                    <TextWrapper16>
                      Condução própria (carro ou moto);
                    </TextWrapper16>
                  </Group30>
                </Group29>
              </Group28>
            </Group21>
            <Group31>
              <Group22>
                <Group32>
                  <Group33>
                    <TextWrapper17>
                      Celular e rede de internet móvel
                    </TextWrapper17>
                  </Group33>
                </Group32>
              </Group22>
              <Group25>
                <Group26>
                  <Group34>
                    <TextWrapper18>Não ter vínculo empregatício;</TextWrapper18>
                  </Group34>
                </Group26>
              </Group25>
              <Group28>
                <Group29>
                  <NoCurriculoIncluirWrapper>
                    <NoCurriculoIncluir>
                      <TextWrapper11>
                        No currículo, incluir as seguintes informações:
                      </TextWrapper11>
                      <TextWrapper19>
                        {" "}
                        nome, endereço completo, CNPJ, experiências
                        profissionais e área de atuação;
                      </TextWrapper19>
                    </NoCurriculoIncluir>
                  </NoCurriculoIncluirWrapper>
                </Group29>
              </Group28>
            </Group31>
          </AutoFlex>
        </Group19>
      </Group18>
    </DivSubsectionContainer>
  );
};

const DivSubsectionContainer = styled.div`
  height: 890px;
  margin-top: 50px;
  position: relative;
  width: 1440px;
`;

const Group16 = styled.div`
  height: 585px;
  left: calc(50.00% - 614px);
  position: absolute;
  top: 0;
  width: 1164px;
`;

const Group17 = styled.div`
  height: 585px;
  left: 670px;
  position: absolute;
  top: 0;
  width: 492px;
`;

const H2 = styled.img`
  height: 522px;
  left: 197px;
  position: absolute;
  top: 32px;
  width: 295px;
`;

const H3 = styled.img`
  height: 585px;
  left: 0;
  position: absolute;
  top: 0;
  width: 331px;
`;

const SejaUm2 = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 60px;
  font-weight: 400;
  left: calc(50.00% - 582px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 66px;
`;

const TextWrapper11 = styled.span`
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-style: italic;
  font-weight: 300;
`;

const TextWrapper12 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 80px;
  font-style: italic;
  font-weight: 700;
`;

const Group18 = styled.div`
  background-color: #f2f2f2;
  border-radius: 16px;
  bottom: 0;
  display: flex;
  height: 526px;
  justify-content: center;
  left: calc(50.00% - 720px);
  position: absolute;
  width: 1440px;
`;

const Group19 = styled.div`
  height: 421px;
  margin-left: 2px;
  margin-top: 60px;
  position: relative;
  width: 1230px;
`;

const Group20 = styled.div`
  height: 13.78%;
  left: 37.72%;
  position: absolute;
  top: 86.22%;
  width: 24.55%;
`;

const Rectangle = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 99.34%;
`;

const TextWrapper13 = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 41.38%;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 29.31%;
  width: 99.34%;
`;

const AjudeAExpandirA = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: calc(50.00% - 606px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 1212px;
`;

const AutoFlex = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 28px;
  height: 249px;
  left: 0;
  min-width: 1228px;
  position: absolute;
  top: 72px;
`;

const Group21 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 249px;
  width: 600px;
`;

const Group22 = styled.div`
  display: flex;
  height: 75px;
  width: 600px;
`;

const Group23 = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  height: 74.54px;
  justify-content: center;
  width: 600px;
`;

const Group24 = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: -0.5px;
  width: 560px;
`;

const TextWrapper14 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  width: 558px;
`;

const Group25 = styled.div`
  display: flex;
  height: 75px;
  margin-top: 13px;
  width: 600px;
`;

const Group26 = styled.div`
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  height: 74.54px;
  justify-content: center;
  margin-top: 0;
  width: 600px;
`;

const Group27 = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -96.5px;
  margin-top: 22.8px;
  width: 463.54px;
`;

const TextWrapper15 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  width: 461.54px;
`;

const Group28 = styled.div`
  display: flex;
  height: 75px;
  margin-left: 0;
  margin-top: 12px;
  width: 600px;
`;

const Group29 = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  height: 74.54px;
  justify-content: center;
  margin-left: 0;
  width: 600px;
`;

const Group30 = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: -278px;
  margin-top: 1.5px;
  width: 282px;
`;

const TextWrapper16 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  white-space: nowrap;
  width: 280px;
`;

const Group31 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 249px;
  padding: 0px 0;
  width: 600px;
`;

const Group32 = styled.div`
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  height: 74.54px;
  justify-content: center;
  width: 600px;
`;

const Group33 = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -96.5px;
  margin-top: 23px;
  width: 463.54px;
`;

const TextWrapper17 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  height: 28.55px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  width: 461.54px;
`;

const Group34 = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -320px;
  margin-top: 22.8px;
  width: 240px;
`;

const TextWrapper18 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  white-space: nowrap;
  width: 238px;
`;

const NoCurriculoIncluirWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 5px;
  margin-top: -4.5px;
  width: 565px;
`;

const NoCurriculoIncluir = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2px;
  width: 563px;
`;

const TextWrapper19 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;
