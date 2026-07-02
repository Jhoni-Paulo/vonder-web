import React from "react";
import styled from "styled-components";

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 939px;
  padding: 0 24px;
  box-sizing: border-box;
  z-index: 1;
`;

const HeroImage = styled.img`
  aspect-ratio: 1.71;
  object-fit: cover;
  width: 100%;
  border-radius: 12px;

  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`;

const Band = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  margin-top: -120px;
  padding: 160px max(24px, calc((100% - 1292px) / 2 + 24px)) 56px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-top: 0;
    padding: 48px 24px;
  }
`;

const Features = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    gap: 24px;
    justify-content: center;
  }
`;

const Feature = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 180px;
  flex-direction: column;
  gap: 8px;
  max-width: 250px;
  min-width: 140px;
`;

const FeatureIcon = styled.img`
  height: 45px;
  width: 45px;
  object-fit: contain;
`;

const FeatureTitle = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const FeatureDesc = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

const features = [
  {
    icon: "https://c.animaapp.com/F8lHzCc8/img/in-transit@2x.png",
    title: "8 centros de distribuição",
    desc: "Estrutura logística nacional com 8 centros de distribuição para atender o Brasil com agilidade e eficiência.",
  },
  {
    icon: "https://c.animaapp.com/F8lHzCc8/img/tools@2x.png",
    title: "+15 mil produtos catalogados",
    desc: "Um portfólio completo com ferragens, ferramentas, máquinas e equipamentos para diferentes aplicações profissionais.",
  },
  {
    icon: "https://c.animaapp.com/F8lHzCc8/img/services@2x.png",
    title: "Maior rede de assistências técnicas",
    desc: "Pós-venda com ampla cobertura e atendimento autorizado para manutenção, orientação técnica e suporte ao cliente.",
  },
  {
    icon: "https://c.animaapp.com/F8lHzCc8/img/guarantee@2x.png",
    title: "Laboratório de qualidade",
    desc: "Testes técnicos em laboratório próprio que reforçam o controle e a confiabilidade dos nossos produtos.",
  },
];

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <ImageWrapper>
        <HeroImage
          alt="VONDER"
          src="https://c.animaapp.com/F8lHzCc8/img/lavadoras-1.png"
        />
      </ImageWrapper>
      <Band>
        <Features>
          {features.map((f) => (
            <Feature key={f.title}>
              <FeatureIcon alt="" src={f.icon} />
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureDesc>{f.desc}</FeatureDesc>
            </Feature>
          ))}
        </Features>
      </Band>
    </Section>
  );
};
