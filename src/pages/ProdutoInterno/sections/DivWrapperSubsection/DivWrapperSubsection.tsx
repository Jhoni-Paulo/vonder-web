import React from "react";
import styled from "styled-components";

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Container>
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
      <Group13>
        <Group14>
          <Group15>
            <Rectangle />
            <TextWrapper4>Conteúdo da embalagem</TextWrapper4>
          </Group15>
          <ExpandMore
            alt="Expand more"
            src="https://c.animaapp.com/C1uOODCl/img/expand-more.svg"
          />
        </Group14>
        <Group16>
          <Group15>
            <Rectangle />
            <TextWrapper4>Detalhes técnicos</TextWrapper4>
          </Group15>
          <ExpandMore
            alt="Expand more"
            src="https://c.animaapp.com/C1uOODCl/img/expand-more-1.svg"
          />
        </Group16>
        <Group17>
          <Group15>
            <Rectangle />
            <TextWrapper5>Arquivos para download</TextWrapper5>
          </Group15>
          <ExpandMoreTwo
            alt="Expand more"
            src="https://c.animaapp.com/C1uOODCl/img/expand-more-2.svg"
          />
        </Group17>
        <Group18>
          <Group15>
            <Rectangle />
            <TextWrapper6>Conteúdo para web</TextWrapper6>
          </Group15>
          <ExpandMoreThree
            alt="Expand more"
            src="https://c.animaapp.com/C1uOODCl/img/expand-more-3.svg"
          />
        </Group18>
      </Group13>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 558px;
  left: calc(50.00% - 620px);
  position: absolute;
  top: 1087px;
  width: 1244px;
`;

const Title = styled.div`
  align-self: center;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -760px;
  width: 452px;
`;

const Description = styled.p`
  align-self: center;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -808px;
  margin-top: 20px;
  width: 404px;
`;

const Group13 = styled.div`
  height: 342px;
  margin-top: 30px;
  position: relative;
  width: 1240px;
`;

const Group14 = styled.div`
  height: 78px;
  left: 0;
  position: absolute;
  top: calc(50.00% - 171px);
  width: 1240px;
`;

const Group16 = styled(Group14)`
  top: calc(50.00% - 83px);
`;

const Group17 = styled(Group14)`
  top: calc(50.00% + 5px);
`;

const Group18 = styled(Group14)`
  top: calc(50.00% + 93px);
`;

const Group15 = styled.div`
  height: 78px;
  left: calc(50.00% - 620px);
  position: absolute;
  top: 0;
  width: 1242px;
`;

const Rectangle = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  height: 78px;
  left: calc(50.00% - 621px);
  position: absolute;
  top: 0;
  width: 1240px;
`;

const TextWrapperBase = styled.div`
  align-items: center;
  color: #000000;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  height: 29px;
  left: 50px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
`;

const TextWrapper4 = styled(TextWrapperBase)`
  top: calc(50.00% - 15px);
`;

const TextWrapper5 = styled(TextWrapperBase)`
  top: calc(50.00% - 14px);
`;

const TextWrapper6 = styled(TextWrapperBase)`
  justify-content: center;
  left: calc(50.00% - 571px);
  text-align: center;
  top: calc(50.00% - 14px);
`;

const ExpandMoreIconBase = styled.img`
  aspect-ratio: 1;
  height: 25px;
  position: absolute;
  width: 25px;
`;

const ExpandMore = styled(ExpandMoreIconBase)`
  left: 1190px;
  top: calc(50.00% - 12px);
`;

const ExpandMoreTwo = styled(ExpandMoreIconBase)`
  left: 1195px;
  top: calc(50.00% - 10px);
`;

const ExpandMoreThree = styled(ExpandMoreIconBase)`
  left: 1190px;
  top: calc(50.00% - 10px);
`;
