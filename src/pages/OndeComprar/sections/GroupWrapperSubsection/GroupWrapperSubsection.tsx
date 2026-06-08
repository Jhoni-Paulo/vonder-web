import React from "react";
import styled from "styled-components";

const Section = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 0 207px;
  position: absolute;
  top: 852px;
`;

const Group14 = styled.div`
  display: flex;
  justify-content: center;
  width: 1013px;
`;

const Group15 = styled.div`
  height: 48px;
  margin-left: 4px;
  position: relative;
  width: 1017px;
`;

const Paragraph = styled.p`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: calc(50.00% - 318px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
`;

const TextWrapper12 = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const TextWrapper13 = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const Attention = styled.div`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  left: calc(50.00% - 508px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 6px;
  white-space: nowrap;
`;

const GroupImage = styled.img`
  height: 24px;
  left: 13.47%;
  position: absolute;
  top: calc(50.00% - 12px);
  width: 86.53%;
`;

export const GroupWrapperSubsection = (): React.JSX.Element => {
  return (
    <Section>
      <Group14>
        <Group15>
          <Paragraph>
            <TextWrapper12>
              A VONDER não trabalha com vendas diretas para consumidores finais.
              <br />
            </TextWrapper12>
            <TextWrapper13>
              Por isso, indicaremos sempre revendedores dos nossos produtos que
              estejam próximos da sua localidade.
            </TextWrapper13>
          </Paragraph>
          <Attention>ATENÇÃO!</Attention>
          <GroupImage
            alt="Group"
            src="https://c.animaapp.com/ywgOupuM/img/group-69070@2x.png"
          />
        </Group15>
      </Group14>
    </Section>
  );
};
