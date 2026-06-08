import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 566px;
  left: 0;
  position: absolute;
  top: 1672px;
  width: 1440px;
`;

const Background = styled.div`
  background-color: #f2f2f2;
  height: 510px;
  left: 0;
  position: absolute;
  top: calc(50% - 255px);
  width: 1440px;
`;

const GroupWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 566px;
  justify-content: center;
  left: 100px;
  position: absolute;
  top: 0;
  width: 1288px;
`;

const Content = styled.div`
  height: 566px;
  margin-left: 2px;
  position: relative;
  width: 1290px;
`;

const Paragraph = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: calc(50% - 645px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: calc(50% - 205px);
  width: 700px;
`;

const LightSpan = styled.span`
  font-weight: 300;
`;

const BoldSpan = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const Image = styled.img`
  height: 566px;
  left: 744px;
  position: absolute;
  top: 0;
  width: 544px;
`;

export const Group1Subsection = (): React.JSX.Element => {
  return (
    <Section>
      <Background />
      <GroupWrapper>
        <Content>
          <Paragraph>
            <LightSpan>
              Desde o lançamento do seu primeiro produto, o{" "}
            </LightSpan>
            <BoldSpan>VONDER LUB</BoldSpan>
            <LightSpan>
              , em 1997, a VONDER não parou de crescer e evoluir. O que começou
              com uma solução inovadora para o mercado de lubrificantes, se
              transformou em uma jornada de excelência e confiança. Hoje, a
              marca é reconhecida como referência no desenvolvimento de
              ferramentas robustas, modernas e de alta performance, voltadas
              para uso profissional e industrial. Com uma trajetória sólida, a
              VONDER conquistou a preferência de profissionais e lojistas em
              diversas categorias, sendo constantemente apontada pelos meios
              especializados do setor industrial e revendedores como uma das
              marcas mais confiáveis e preferidas do mercado. Ao longo dos anos,
              tornou-se uma das mais premiadas e respeitadas no segmento,
              consolidando-se como líder em inovação e qualidade.
            </LightSpan>
          </Paragraph>
          <Image
            alt="Group"
            src="https://c.animaapp.com/fomi9SZH/img/group-69290.png"
          />
        </Content>
      </GroupWrapper>
    </Section>
  );
};
