import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 5%;
`;

const FrameContainer = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 76px;
  position: relative;

  @media (max-width: 1280px) {
    gap: 48px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }
`;

const LeftColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: relative;
  width: 380px;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    width: 320px;
    gap: 20px;
  }

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 460px;
  }
`;

const ElementImage = styled.img`
  align-self: stretch;
  height: 150px;
  position: relative;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.div`
  align-items: center;
  align-self: stretch;
  color: #f6be00;
  display: flex;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
`;

const Description = styled.p`
  align-self: stretch;
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  position: relative;
`;

const Group = styled.div`
  height: 40px;
  position: relative;
  width: 300px;
`;

const DivWrapper = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 8px 78px 8px 86px;
  position: relative;
  width: 300px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000059;
  }
`;

const CTAButtonText = styled.div`
  color: #ffc600;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

const RightGrid = styled.div`
  display: grid;
  gap: 35px 80px;
  grid-template-columns: repeat(3, fit-content(100%));
  grid-template-rows: repeat(7, fit-content(100%));
  height: fit-content;
  width: fit-content;

  @media (max-width: 1280px) {
    gap: 24px 48px;
  }

  @media (max-width: 1080px) {
    gap: 18px 40px;
  }
`;

type GridItemData = {
  text: string;
  gridColumn: string;
  gridRow: string;
  width: string;
  whiteSpace?: string;
  color?: string;
};

type GridItemProps = {
  $gridColumn: string;
  $gridRow: string;
  $width: string;
  $whiteSpace?: string;
  $color?: string;
};

const GridItem = styled.div<GridItemProps>`
  color: ${({ $color = "#ffffff" }) => $color};
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  grid-column: ${({ $gridColumn }) => $gridColumn};
  grid-row: ${({ $gridRow }) => $gridRow};
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: ${({ $width }) => $width};
  ${({ $whiteSpace }) => ($whiteSpace ? `white-space: ${$whiteSpace};` : "")}
  cursor: pointer;
  transition: color 0.22s ease, transform 0.22s ease;

  &:hover {
    color: #f6be00;
    transform: translateX(4px);
  }

  @media (max-width: 1280px) {
    font-size: 17px;
  }
`;

const gridItems: GridItemData[] = [
  { text: "Abrasivos", gridColumn: "1 / 2", gridRow: "1 / 2", width: "79px" },
  { text: "Mangueiras", gridColumn: "2 / 3", gridRow: "1 / 2", width: "95px", whiteSpace: "nowrap" },
  { text: "Pintura", gridColumn: "3 / 4", gridRow: "1 / 2", width: "170.12px" },
  { text: "Construção civil", gridColumn: "1 / 2", gridRow: "2 / 3", width: "130px", whiteSpace: "nowrap" },
  { text: "Material Elétrico", gridColumn: "2 / 3", gridRow: "2 / 3", width: "134px", whiteSpace: "nowrap" },
  { text: "Químicos", gridColumn: "3 / 4", gridRow: "2 / 3", width: "192.61px" },
  { text: "Correias", gridColumn: "1 / 2", gridRow: "3 / 4", width: "69px" },
  { text: "Medição e Teste", gridColumn: "2 / 3", gridRow: "3 / 4", width: "131px" },
  { text: "Rolamento", gridColumn: "3 / 4", gridRow: "3 / 4", width: "170.12px" },
  { text: "EPI", gridColumn: "1 / 2", gridRow: "4 / 5", width: "27px", whiteSpace: "nowrap" },
  { text: "Metais", gridColumn: "2 / 3", gridRow: "4 / 5", width: "54px", whiteSpace: "nowrap" },
  { text: "Solda", gridColumn: "3 / 4", gridRow: "4 / 5", width: "179.96px" },
  { text: "Ferramentas Elétricas", gridColumn: "1 / 2", gridRow: "5 / 6", width: "176px", whiteSpace: "nowrap" },
  { text: "Movimentação de Materiais", gridColumn: "2 / 3", gridRow: "5 / 6", width: "223px", whiteSpace: "nowrap" },
  { text: "Teste", gridColumn: "3 / 4", gridRow: "5 / 6", width: "170.12px" },
  { text: "Ferramentas Manuais", gridColumn: "1 / 2", gridRow: "6 / 7", width: "174px", whiteSpace: "nowrap" },
  { text: "Máquinas e Compressores", gridColumn: "2 / 3", gridRow: "6 / 7", width: "214px", whiteSpace: "nowrap" },
  { text: "Usinagem e Corte", gridColumn: "3 / 4", gridRow: "6 / 7", width: "213px" },
  { text: "Jardinagem", gridColumn: "1 / 2", gridRow: "7 / 8", width: "95px", whiteSpace: "nowrap" },
  { text: "Parafusos e Fixadores", gridColumn: "2 / 3", gridRow: "7 / 8", width: "178px", whiteSpace: "nowrap" },
  { text: "Ver Tudo em VONDER", gridColumn: "3 / 4", gridRow: "7 / 8", width: "213px", color: "#f6be00", whiteSpace: "nowrap" },
];

export function ProdutosMega(): React.JSX.Element {
  return (
    <Root>
      <FrameContainer>
        <LeftColumn>
          <ElementImage
            alt="Catálogo VONDER 2026"
            src="https://c.animaapp.com/3TMsr3TN/img/05-1@2x.png"
          />
          <Title>Catálogo VONDER 2026</Title>
          <Description>
            Explore nosso mix completo de ferramentas e equipamentos com imagens
            detalhadas e descrições das principais características e atributos
            técnicos de cada item.
          </Description>
          <Group>
            <DivWrapper>
              <CTAButtonText>Clique e conheça</CTAButtonText>
            </DivWrapper>
          </Group>
        </LeftColumn>
        <RightGrid>
          {gridItems.map((item) =>
            item.text === "Abrasivos" ? (
              <GridItem
                key={item.text}
                as={Link}
                to="/categorias-e-produtos"
                $gridColumn={item.gridColumn}
                $gridRow={item.gridRow}
                $width={item.width}
                $whiteSpace={item.whiteSpace}
                $color={item.color}
                style={{ textDecoration: "none" }}
              >
                {item.text}
              </GridItem>
            ) : (
              <GridItem
                key={item.text}
                $gridColumn={item.gridColumn}
                $gridRow={item.gridRow}
                $width={item.width}
                $whiteSpace={item.whiteSpace}
                $color={item.color}
              >
                {item.text}
              </GridItem>
            )
          )}
        </RightGrid>
      </FrameContainer>
    </Root>
  );
}

export default ProdutosMega;
