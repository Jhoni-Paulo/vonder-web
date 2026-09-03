import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1244px;
  padding: 0 24px;
  width: 100%;
`;

const Header = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  max-width: 404px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const AccordionRow = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 24px 50px;
  transition: background-color 0.2s ease;
  width: 100%;

  &:hover {
    background-color: #e8e8e8;
  }

  @media (max-width: 600px) {
    padding: 18px 24px;
  }
`;

const AccordionLabel = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const ExpandIcon = styled.img`
  flex: 0 0 auto;
  height: 25px;
  width: 25px;
`;

const items = [
  {
    label: "Conteúdo da embalagem",
    icon: "https://c.animaapp.com/C1uOODCl/img/expand-more.svg",
  },
  {
    label: "Detalhes técnicos",
    icon: "https://c.animaapp.com/C1uOODCl/img/expand-more-1.svg",
  },
  {
    label: "Arquivos para download",
    icon: "https://c.animaapp.com/C1uOODCl/img/expand-more-2.svg",
  },
  {
    label: "Conteúdo para web",
    icon: "https://c.animaapp.com/C1uOODCl/img/expand-more-3.svg",
  },
];

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>
          Características
          <br />
          do produto
        </Title>
        <Description>
          Tudo o que você precisa saber sobre
          <br />
          as funcionalidades e vantagens desse item
        </Description>
      </Header>
      <AccordionList>
        {items.map((item) => (
          <AccordionRow key={item.label}>
            <AccordionLabel>{item.label}</AccordionLabel>
            <ExpandIcon alt="Expand more" src={item.icon} />
          </AccordionRow>
        ))}
      </AccordionList>
    </Container>
  );
};
