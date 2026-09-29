import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMegaMenuCategorias } from "../../../hooks/useMegaMenuCategorias";

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

  @media (max-width: 1100px) {
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
    width: 300px;
    gap: 16px;
  }

  @media (max-width: 1100px) {
    width: 220px;
    gap: 12px;
  }
`;

const ElementImage = styled.img`
  align-self: stretch;
  height: 150px;
  position: relative;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1100px) {
    height: 110px;
  }
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

  @media (max-width: 1200px) {
    width: 100%;
  }
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

  @media (max-width: 1200px) {
    width: 100%;
    padding: 8px 16px;
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

const COLUNAS_DESKTOP = 3;
const COLUNAS_TABLET = 2;

/* A lista vem da API, então as posições deixam de ser fixas: o grid preenche
   coluna a coluna (`grid-auto-flow: column`) com o número de linhas calculado
   a partir da quantidade de itens — assim a leitura continua de cima para
   baixo, como no layout original. */
const RightGrid = styled.div<{ $linhas: number; $linhasTablet: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(${({ $linhas }) => $linhas}, fit-content(100%));
  grid-auto-columns: fit-content(100%);
  gap: 35px 80px;
  height: fit-content;
  width: fit-content;

  @media (max-width: 1280px) {
    gap: 24px 48px;
  }

  @media (max-width: 1100px) {
    grid-template-rows: repeat(${({ $linhasTablet }) => $linhasTablet}, fit-content(100%));
    gap: 18px 40px;
  }
`;

const GridItem = styled.div<{ $color?: string }>`
  color: ${({ $color = "#ffffff" }) => $color};
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.22s ease, transform 0.22s ease;

  &:hover {
    color: #f6be00;
    transform: translateX(4px);
  }

  @media (max-width: 1280px) {
    font-size: 17px;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
  }
`;

const LINK_CATEGORIAS = "/categorias-e-produtos";

/** Nível da árvore ↔ parâmetro da listagem (os mesmos nomes que a API usa). */
const PARAM_POR_NIVEL: Record<number, string> = {
  1: "grupo",
  2: "subgrupo",
  3: "categoria",
};

const linkCategoria = (id: number, nivel: number) =>
  `${LINK_CATEGORIAS}?${PARAM_POR_NIVEL[nivel] ?? "grupo"}=${id}`;

export function ProdutosMega(): React.JSX.Element {
  const { categorias } = useMegaMenuCategorias();

  /* "Ver Tudo em VONDER" não vem do CMS: é o atalho fixo para o catálogo, e
     fica no ar mesmo se a listagem falhar, para o menu nunca virar um beco sem
     saída. */
  const total = categorias.length + 1;
  const linhas = Math.ceil(total / COLUNAS_DESKTOP);
  const linhasTablet = Math.ceil(total / COLUNAS_TABLET);

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
        <RightGrid $linhas={linhas} $linhasTablet={linhasTablet}>
          {categorias.map((categoria) => (
            <GridItem
              key={categoria.id}
              as={Link}
              to={linkCategoria(categoria.id, categoria.nivel)}
              style={{ textDecoration: "none" }}
            >
              {categoria.nome}
            </GridItem>
          ))}
          <GridItem
            as={Link}
            to={LINK_CATEGORIAS}
            $color="#f6be00"
            style={{ textDecoration: "none" }}
          >
            Ver Tudo em VONDER
          </GridItem>
        </RightGrid>
      </FrameContainer>
    </Root>
  );
}

export default ProdutosMega;
