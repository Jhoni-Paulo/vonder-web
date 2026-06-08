import React from "react";
import styled from "styled-components";

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupSubsection>
      <ElementImage
        className="element"
        alt="Element"
        src="https://c.animaapp.com/fomi9SZH/img/04-1.png"
      />
      <Breadcrumb>
        <BreadcrumbIntro>Página inicial &gt; </BreadcrumbIntro>
        <BreadcrumbHighlight>Nossa história</BreadcrumbHighlight>
      </Breadcrumb>
      <ContentGroup>
        <ToolTitle>
          <ToolTitleEmphasis>
            A FERRAMENTA
            <br />
            DO{" "}
          </ToolTitleEmphasis>
          <ToolTitleAccent>BRASIL</ToolTitleAccent>
        </ToolTitle>
        <Description>
          Há mais de 28 anos desenvolvendo soluções que impulsionam o trabalho
          de milhões de profissionais em todo Brasil.
        </Description>
        <ButtonGroup>
          <Rectangle />
          <ButtonText>Conheça nossa história</ButtonText>
        </ButtonGroup>
      </ContentGroup>
    </StyledGroupSubsection>
  );
};

const StyledGroupSubsection = styled.div`
  height: 564px;
  left: 0;
  position: absolute;
  top: 158px;
  width: 1442px;
`;

const ElementImage = styled.img`
  aspect-ratio: 2.55;
  height: 564px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
`;

const Breadcrumb = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: calc(50.00% - 615px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 65px;
  width: 628px;
  margin: 0;
`;

const BreadcrumbIntro = styled.span`
  font-weight: 300;
`;

const BreadcrumbHighlight = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const ContentGroup = styled.div`
  height: 338px;
  left: calc(50.00% - 615px);
  position: absolute;
  top: 136px;
  width: 504px;
`;

const ToolTitle = styled.p`
  color: transparent;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 60px;
  font-weight: 700;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 500px;
  margin: 0;
`;

const ToolTitleEmphasis = styled.span`
  color: #ffffff;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
`;

const ToolTitleAccent = styled.span`
  color: #f6be00;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
`;

const Description = styled.p`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: calc(50.00% - 252px);
  letter-spacing: 0;
  line-height: 38px;
  position: absolute;
  top: 154px;
  width: 400px;
  margin: 0;
`;

const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 330px;
  width: 57.14%;
`;

const Rectangle = styled.div`
  background-color: #f6be00;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ButtonText = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  z-index: 1;
`;
