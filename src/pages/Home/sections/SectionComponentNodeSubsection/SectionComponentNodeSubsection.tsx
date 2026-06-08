import React from "react";
import styled from "styled-components";

const SectionComponentNodeSubsectionContainer = styled.div`
  height: 850px;
  position: absolute;
  top: 3299px;
  left: 0;
  width: 1440px;
`;

const Rectangle5 = styled.div`
  background-color: #f2f2f2;
  height: 506px;
  position: absolute;
  top: 344px;
  left: 0;
  width: 1440px;
`;

const Group48 = styled.div`
  display: flex;
  height: 228px;
  justify-content: center;
  position: absolute;
  top: 557px;
  left: calc(50.00% - 560px);
  width: 1120px;
`;

const Frame3 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 40px;
  height: 228px;
  position: relative;
  width: 1120px;
`;

const Group49 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 254px;
`;

const Group50 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 254px;
`;

const Group51 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 254px;
`;

const IconImage = styled.img`
  height: 48px;
  width: 48px;
`;

const TextWrapper26 = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  width: 250px;
`;

const TextWrapper27 = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  width: 236px;
`;

const TextWrapper28 = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  width: 250px;
`;

const TextWrapper29 = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  width: 250px;
`;

const LavadorasImage = styled.img`
  aspect-ratio: 1.71;
  height: 527px;
  left: 280px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 899px;
`;

export const SectionComponentNodeSubsection = (): React.JSX.Element => {
  return (
    <SectionComponentNodeSubsectionContainer>
      <Rectangle5 />
      <Group48>
        <Frame3>
          <Group49>
            <IconImage
              alt="In transit"
              src="https://c.animaapp.com/ea7M9uhj/img/in-transit@2x.png"
            />
            <TextWrapper26>8 centros de distribuição</TextWrapper26>
            <TextWrapper27>
              Estrutura logística nacional com 8 centros de distribuição para
              atender o Brasil com agilidade e eficiência.
            </TextWrapper27>
          </Group49>
          <Group50>
            <IconImage
              alt="Tools"
              src="https://c.animaapp.com/ea7M9uhj/img/tools@2x.png"
            />
            <TextWrapper28>
              +15 mil produtos
              <br />
              catalogados
            </TextWrapper28>
            <TextWrapper29>
              Um portfólio completo com ferragens, ferramentas, máquinas e
              equipamentos para diferentes aplicações profissionais.
            </TextWrapper29>
          </Group50>
          <Group50>
            <IconImage
              alt="Services"
              src="https://c.animaapp.com/ea7M9uhj/img/services@2x.png"
            />
            <TextWrapper28 as="p">
              Maior rede de assistências técnicas
            </TextWrapper28>
            <TextWrapper29>
              Pós-venda com ampla cobertura e atendimento autorizado para
              manutenção, orientação técnica e suporte ao cliente.
            </TextWrapper29>
          </Group50>
          <Group51>
            <IconImage
              alt="Guarantee"
              src="https://c.animaapp.com/ea7M9uhj/img/guarantee@2x.png"
            />
            <TextWrapper28>Laboratório de qualidade</TextWrapper28>
            <TextWrapper29>
              Testes técnicos em laboratório próprio que reforçam o controle e a
              confiabilidade dos nossos produtos.
            </TextWrapper29>
          </Group51>
        </Frame3>
      </Group48>
      <LavadorasImage
        alt="Lavadoras"
        src="https://c.animaapp.com/ea7M9uhj/img/lavadoras-1.png"
      />
    </SectionComponentNodeSubsectionContainer>
  );
};
