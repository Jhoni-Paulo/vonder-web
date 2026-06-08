import React from "react";
import styled from "styled-components";

const SectionComponentNodeSubsectionContainer = styled.div`
  height: 710px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1266px;
`;

const Group23 = styled.div`
  align-items: flex-start;
  display: flex;
  height: 580px;
  left: 0;
  min-width: 900px;
  position: absolute;
  top: 0;
`;

const Group24 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 580px;
  width: 900px;
`;

const Group25 = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  margin-left: -441px;
  width: 459px;
`;

const DestaqueDoMes = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -1px;
  width: 452px;
`;

const TextWrapper18 = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 30px;
  margin-left: -55px;
  width: 404px;
`;

const Group26 = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
`;

const Group27 = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  min-width: 900px;
  padding: 40px 80px;
`;

const Group28 = styled.div`
  display: flex;
  width: 550px;
`;

const Group29 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 556px;
`;

const TextWrapper19 = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 8px;
`;

const TextWrapper20 = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  width: 550px;
`;

const TextWrapper21 = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  width: 511px;
`;

const Group30 = styled.div`
  height: 569px;
  left: 596px;
  position: absolute;
  top: 141px;
  width: 670px;
`;

const MockVonderImage = styled.img`
  aspect-ratio: 0.79;
  height: 443px;
  left: 0;
  position: absolute;
  top: 66px;
  width: 350px;
`;

const MockVonderImageSecondary = styled.img`
  aspect-ratio: 0.79;
  height: 506px;
  left: 86px;
  position: absolute;
  top: 33px;
  width: 400px;
`;

const MockVonderImageThird = styled.img`
  aspect-ratio: 0.79;
  height: 569px;
  left: 220px;
  position: absolute;
  top: 0;
  width: 450px;
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <SectionComponentNodeSubsectionContainer>
      <Group23>
        <Group24>
          <Group25>
            <DestaqueDoMes>
              Destaque
              <br />
              do mês
            </DestaqueDoMes>
            <TextWrapper18>
              O artigo do mês traz informações valiosas e insights exclusivos.
              Não deixe de conferir!
            </TextWrapper18>
          </Group25>
          <Group26>
            <Group27>
              <Group28>
                <Group29>
                  <a
                    href="https://conecta.fg.com.br/dicas-e-truques-para-cuidar-do-seu-jardim-no-outono/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TextWrapper20>
                      Dicas e truques para cuidar do seu jardim no outono
                    </TextWrapper20>
                  </a>
                  <TextWrapper21>
                    Veja dicas práticas e truques essenciais para manter suas
                    plantas saudáveis, proteger o solo e preparar o seu jardim
                    para as próximas estações.
                  </TextWrapper21>
                  <TextWrapper19>+ Ler Mais</TextWrapper19>
                </Group29>
              </Group28>
            </Group27>
          </Group26>
        </Group24>
      </Group23>
      <Group30>
        <MockVonderImage
          alt="Png mock vonder"
          src="https://c.animaapp.com/w4wnBid1/img/png-mock-vonder-4@2x.png"
        />
        <MockVonderImageSecondary
          alt="Png mock vonder"
          src="https://c.animaapp.com/w4wnBid1/img/png-mock-vonder-2.png"
        />
        <MockVonderImageThird
          alt="Png mock vonder"
          src="https://c.animaapp.com/w4wnBid1/img/png-mock-vonder-3.png"
        />
      </Group30>
    </SectionComponentNodeSubsectionContainer>
  );
};
