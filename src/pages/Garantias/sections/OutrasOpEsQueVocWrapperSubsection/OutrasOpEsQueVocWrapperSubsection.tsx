import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
`;

const Text = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: clamp(26px, 4vw, 45px);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
`;

const ItalicText = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const ItalicBoldText = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

export const OutrasOpEsQueVocWrapperSubsection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <Text>
        <ItalicText>
          Outras opções que você
          <br />
        </ItalicText>
        <ItalicBoldText>pode estar buscando</ItalicBoldText>
      </Text>
    </Wrapper>
  );
};
