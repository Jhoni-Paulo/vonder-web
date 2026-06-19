import React from "react";
import styled from "styled-components";

const Section = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  height: auto;
  min-height: 500px;
  left: 0;
  padding: 40px 0;
  position: absolute;
  top: 2154px;
  width: 1440px;
`;

const Group5 = styled.div`
  align-items: center;
  display: flex;
  margin-left: 160px;
  width: 1144px;
`;

const GroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 444px;
`;

const Group6 = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: 4px;
  width: 448px;
`;

const Title = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 50px;
  font-style: italic;
  font-weight: 700;
  height: auto;
  letter-spacing: 0;
  line-height: 63px;
  margin-bottom: 21px;
  margin-left: -2px;
  width: 442px;
`;

const Description = styled.p`
  align-self: center;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 400;
  height: auto;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  margin-top: 0;
  width: 444px;
`;

const LightSpan = styled.span`
  font-weight: 300;
`;

const BoldSpan = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const Group7 = styled.div`
  align-items: center;
  display: flex;
  height: 63px;
  justify-content: center;
  margin-top: 29px;
  position: relative;
  width: 400px;
`;

const Rectangle = styled.div`
  background-color: #000000;
  border-radius: 100px;
  height: 63px;
  left: 0;
  position: absolute;
  top: 0;
  width: 398px;
`;

const ButtonText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  z-index: 1;
`;

const Prancheta = styled.img`
  align-self: center;
  height: 500px;
  width: 700px;
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <Group5>
        <GroupWrapper>
          <Group6>
            <Title>
              Lavadora e Aspirador
              <br />2 em 1 LAV 1580
            </Title>
            <Description>
              <LightSpan>Design </LightSpan>
              <BoldSpan>compacto</BoldSpan>
              <LightSpan>
                .<br />
                Desempenho{" "}
              </LightSpan>
              <BoldSpan>surpreendente</BoldSpan>
              <LightSpan>.</LightSpan>
            </Description>
            <Group7>
              <Rectangle />
              <ButtonText>Conheça</ButtonText>
            </Group7>
          </Group6>
        </GroupWrapper>
        <Prancheta
          alt="Prancheta"
          src="https://c.animaapp.com/ea7M9uhj/img/prancheta-1-5.png"
        />
      </Group5>
    </Section>
  );
};
