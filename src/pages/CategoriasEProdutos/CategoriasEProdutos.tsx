import React from "react";
import styled from "styled-components";

/* ── Página ────────────────────────────────────────────── */

const Page = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 50px 95px 80px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 50px 48px 64px;
  }

  @media (max-width: 600px) {
    padding: 50px 20px 48px;
    gap: 24px;
  }
`;

/* ── Breadcrumb ────────────────────────────────────────── */

const Breadcrumb = styled.p`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  .bold {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

/* ── Título ───────────────────────────────────────────── */

const Title = styled.h1`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

/* ── Body: sidebar + conteúdo ─────────────────────────── */

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }
`;

/* ── Sidebar ──────────────────────────────────────────── */

const Sidebar = styled.aside`
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 30px 24px 40px;
  width: 300px;
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SidebarNote = styled.div`
  color: #3e3e3e;
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-size: 17px;
  font-style: italic;
  font-weight: 300;
  padding: 6px 8px;
`;

const Divider = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

const FilterGroupTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  padding: 6px 8px;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
`;

const FilterLabel = styled.span`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
`;

const FilterChevron = styled.img`
  width: 32px;
  flex-shrink: 0;
`;

const FilterRow = styled.label`
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 5px 8px;
  cursor: pointer;
`;

const CheckboxBox = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #979797;
  border-radius: 5px;
  height: 20px;
  width: 20px;
  flex-shrink: 0;
`;

const CheckboxChecked = styled.img`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
`;

const FilterOptionText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 17px;
  font-weight: 300;
`;

const ShowMoreRow = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 5px 8px;
  cursor: pointer;
`;

const ShowMoreIcon = styled.img`
  height: 18px;
  width: 18px;
`;

const ShowMoreText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 17px;
  font-weight: 700;
`;

/* ── Conteúdo principal ───────────────────────────────── */

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 36px;
  min-width: 0;
`;

/* ── Controles (ordenar + paginação) ──────────────────── */

const ControlsRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  width: 100%;
`;

const SortButton = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  display: flex;
  gap: 12px;
  height: 32px;
  padding: 7px 20px;
  cursor: pointer;
  user-select: none;
`;

const SortText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;

  .bold { font-weight: 700; }
  .light {
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-weight: 300;
  }
`;

const SortIcon = styled.img`
  height: 8px;
  width: 13px;
`;

const Pagination = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const PageBubble = styled.div<{ $active?: boolean }>`
  align-items: center;
  background-color: ${({ $active }) => ($active ? "#555a57" : "#f6be00")};
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
  cursor: pointer;
  user-select: none;
`;

const PageNumber = styled.span<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? "#ffffff" : "#3e3e3e")};
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 700;
`;

const PageArrow = styled.img`
  height: 32px;
  width: 32px;
`;

/* ── Grid de produtos ────────────────────────────────── */

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 233px);
  justify-content: space-between;
  gap: 50px 22px;
  width: 100%;
`;

/* ── Card de produto ─────────────────────────────────── */

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /* Borda gradiente */
  &::before {
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(102,102,102,1) 100%);
    border-radius: 15px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
    transition: background 0.25s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }

  &:hover::before {
    background: linear-gradient(180deg, rgba(246,190,0,0.4) 0%, rgba(246,190,0,1) 100%);
  }
`;

const CardImageArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px 16px 16px;
  width: 100%;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  height: 180px;
  object-fit: contain;
  width: auto;
  max-width: 100%;
`;

const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 16px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const CardName = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;
  text-align: center;
`;

const CardCode = styled.span`
  color: #555a57;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
`;

/* ── Dados ────────────────────────────────────────────── */

const subgroups = ["Aspirador", "Lavadora", "Bateria", "Parafusadeira", "Lixadeira"];
const categories = ["Parafusadeira a Bateria", "Parafusadeira Elétrica", "Parafusadeira Pneumática"];

const products = [
  { name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...", code: "60.01.112.000", img: "https://c.animaapp.com/a8ORmsbd/img/image-115-4@2x.png" },
  { name: "Parafusadeira/furadeira de impacto a bateria, 20 V, fonte de carregamento bivolt...", code: "60.01.200.200", img: "https://c.animaapp.com/a8ORmsbd/img/image-116-4@2x.png" },
  { name: "Parafusadeira furadeira a bateria, 18 V, com bateria e carregador...", code: "60.04.185.200", img: "https://c.animaapp.com/a8ORmsbd/img/image-117-4@2x.png" },
  { name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...", code: "60.01.112.000", img: "https://c.animaapp.com/a8ORmsbd/img/image-115-4@2x.png" },
  { name: "Parafusadeira/furadeira de impacto a bateria, 20 V, fonte de carregamento bivolt...", code: "60.01.200.200", img: "https://c.animaapp.com/a8ORmsbd/img/image-116-4@2x.png" },
  { name: "Parafusadeira furadeira a bateria, 18 V, com bateria e carregador...", code: "60.04.185.200", img: "https://c.animaapp.com/a8ORmsbd/img/image-117-4@2x.png" },
  { name: "Parafusadeira/furadeira a bateria, 12 V, fonte de carregamento bivolt...", code: "60.01.112.000", img: "https://c.animaapp.com/a8ORmsbd/img/image-115-4@2x.png" },
  { name: "Parafusadeira/furadeira de impacto a bateria, 20 V, fonte de carregamento bivolt...", code: "60.01.200.200", img: "https://c.animaapp.com/a8ORmsbd/img/image-116-4@2x.png" },
  { name: "Parafusadeira furadeira a bateria, 18 V, com bateria e carregador...", code: "60.04.185.200", img: "https://c.animaapp.com/a8ORmsbd/img/image-117-4@2x.png" },
];

/* ── Componente ───────────────────────────────────────── */

export const CategoriasEProdutos = (): React.JSX.Element => {
  return (
    <Page>
      <Breadcrumb>
        <span>Página inicial &gt; Nossos produtos &gt; </span>
        <span className="bold">Abrasivos</span>
      </Breadcrumb>

      <Title>ABRASIVOS</Title>

      <Body>
        {/* ── Sidebar ── */}
        <Sidebar>
          <SidebarNote>Resultados: 15 de 812</SidebarNote>
          <Divider alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg" />
          <FilterGroupTitle>Filtros:</FilterGroupTitle>
          <Divider alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg" />

          <FilterSection>
            <FilterHeader>
              <FilterLabel>Grupo</FilterLabel>
              <FilterChevron alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg" />
            </FilterHeader>
            <FilterRow>
              <CheckboxChecked alt="checked" src="https://c.animaapp.com/a8ORmsbd/img/checkbox-inactive-1.svg" />
              <FilterOptionText>Ferramentas elétricas</FilterOptionText>
            </FilterRow>
          </FilterSection>
          <Divider alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg" />

          <FilterSection>
            <FilterHeader>
              <FilterLabel>Subgrupo</FilterLabel>
              <FilterChevron alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg" />
            </FilterHeader>
            {subgroups.map((s) => (
              <FilterRow key={s}>
                <CheckboxBox />
                <FilterOptionText>{s}</FilterOptionText>
              </FilterRow>
            ))}
            <ShowMoreRow>
              <ShowMoreIcon alt="+" src="https://c.animaapp.com/a8ORmsbd/img/add.svg" />
              <ShowMoreText>Ver mais</ShowMoreText>
            </ShowMoreRow>
          </FilterSection>
          <Divider alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg" />

          <FilterSection>
            <FilterHeader>
              <FilterLabel>Categoria</FilterLabel>
              <FilterChevron alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg" />
            </FilterHeader>
            {categories.map((c) => (
              <FilterRow key={c}>
                <CheckboxBox />
                <FilterOptionText>{c}</FilterOptionText>
              </FilterRow>
            ))}
          </FilterSection>
          <Divider alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg" />

          <FilterSection>
            <FilterHeader>
              <FilterLabel>Potência</FilterLabel>
              <FilterChevron alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg" />
            </FilterHeader>
          </FilterSection>
          <Divider alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg" />

          <FilterSection>
            <FilterHeader>
              <FilterLabel>Rotações por minuto (rpm)</FilterLabel>
              <FilterChevron alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg" />
            </FilterHeader>
          </FilterSection>
        </Sidebar>

        {/* ── Conteúdo principal ── */}
        <Main>
          <ControlsRow>
            <SortButton>
              <SortText>
                <span className="bold">Ordenar por:&nbsp;&nbsp;</span>
                <span className="light">Nome A-Z</span>
              </SortText>
              <SortIcon alt="" src="https://c.animaapp.com/a8ORmsbd/img/modo-de-isolamento.svg" />
            </SortButton>
            <Pagination>
              <PageBubble $active><PageNumber $active>1</PageNumber></PageBubble>
              <PageBubble><PageNumber>2</PageNumber></PageBubble>
              <PageBubble><PageNumber>3</PageNumber></PageBubble>
              <PageBubble><PageNumber>4</PageNumber></PageBubble>
              <PageArrow alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-389.svg" />
            </Pagination>
          </ControlsRow>

          <ProductGrid>
            {products.map((p, i) => (
              <ProductCard key={i}>
                <CardImageArea>
                  <CardImage alt={p.name} src={p.img} />
                </CardImageArea>
                <CardTextArea>
                  <CardName>{p.name}</CardName>
                  <CardCode>{p.code}</CardCode>
                </CardTextArea>
              </ProductCard>
            ))}
          </ProductGrid>

          <ControlsRow>
            <SortButton>
              <SortText>
                <span className="bold">Ordenar por:&nbsp;&nbsp;</span>
                <span className="light">Nome A-Z</span>
              </SortText>
              <SortIcon alt="" src="https://c.animaapp.com/a8ORmsbd/img/modo-de-isolamento-1.svg" />
            </SortButton>
            <Pagination>
              <PageBubble $active><PageNumber $active>1</PageNumber></PageBubble>
              <PageBubble><PageNumber>2</PageNumber></PageBubble>
              <PageBubble><PageNumber>3</PageNumber></PageBubble>
              <PageBubble><PageNumber>4</PageNumber></PageBubble>
              <PageArrow alt="" src="https://c.animaapp.com/a8ORmsbd/img/frame-389-1.svg" />
            </Pagination>
          </ControlsRow>
        </Main>
      </Body>
    </Page>
  );
};

export default CategoriasEProdutos;
