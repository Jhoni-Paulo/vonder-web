import React from "react";
import styled from "styled-components";

const GroupSubsectionContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 320px;
  max-width: 564px;
  width: 100%;
`;

const Group = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextWrapper = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 35px;
  margin: 0;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const CodeDiv = styled.div`
  color: #555a57;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 35px;
  margin-top: 10px;
  white-space: nowrap;
`;

const BombaComTecnologia = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 25px 0 0;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <GroupSubsectionContainer>
      <Group>
        <TextWrapper>
          Lavadora de alta pressão LAV 2220I, 1.740 lbf/pol², 220 V~, VONDER
        </TextWrapper>
        <CodeDiv>Código: 68.64.222.220</CodeDiv>
        <BombaComTecnologia>
          Bomba com tecnologia italiana para uso profissional. Indicada para
          limpezas em geral com maior remoção de sujeira, devido a alta pressão
          de saída da água. Ideal para limpezas frequentes e exigentes em pisos,
          carros, muros, portões, construção civil, indústrias, entre outros.
          <br />
          <br />
          Possui alça e rodas para transporte, suporte para armazenar a pistola
          e o cabo elétrico, promovendo maior organização, e bico da lança
          ajustável, com jato leque ou concentrado. Possui motor por indução,
          que reduz a manutenção e o ruído e proporciona maior vida útil Conta
          também com sistema de sucção para detergente e sistema stop total que
          proporciona maior praticidade e economia de água e energia, desligando
          o motor toda vez que o gatilho é liberado, além de mangueira reforçada
          com trama de aço, conferindo maior resistência e durabilidade. Possui
          manômetro e regulador de pressão que permitem regular a pressão ideal
          de acordo com o tipo de limpeza desejada.
        </BombaComTecnologia>
      </Group>
    </GroupSubsectionContainer>
  );
};
