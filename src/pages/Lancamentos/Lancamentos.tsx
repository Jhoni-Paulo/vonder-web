import React from "react";
import styled from "styled-components";

/* ══════════════════════════════════════════════
   DADOS
══════════════════════════════════════════════ */

const cards = [
  {
    img: "https://c.animaapp.com/wSrmTlud/img/mask-group-12.png",
    title: "Fio veda rosca, 20 metros, VONDER",
    desc: "Indicado para vedação de tubos e conexões roscadas em geral. Adequado em tubulações de água quente e fria, água potável, gás, ar comprimido, óleos e gases industriais.",
  },
  {
    img: "https://c.animaapp.com/wSrmTlud/img/mask-group-13.png",
    title: "Esguichos e Engates Rápidos para Jardim",
    desc: "Indicado para uso doméstico, limpeza de calçadas, veículos e jardinagem.",
  },
  {
    img: "https://c.animaapp.com/wSrmTlud/img/mask-group-14.png",
    title: "Mesa Dobrável Retangular, 180 cm, Preta, VONDER",
    desc: "Praticidade e resistência para acompanhar todos os momentos! Ideal para uso em áreas internas e externas, como campings, piqueniques, eventos e muito mais.",
  },
  {
    img: "https://c.animaapp.com/wSrmTlud/img/mask-group-15.png",
    title: "Grampos de Fixação Rápida e Grampo Tipo Sargento Angular VONDER",
    desc: "Ideais para diversas aplicações, garantindo precisão, resistência e praticidade durante o uso!",
  },
];

/* Repete 5 linhas como no template */
const allCards = Array.from({ length: 5 }, () => cards).flat();

/* ══════════════════════════════════════════════
   ESTILOS
══════════════════════════════════════════════ */

const Page = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 96px 80px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 40px 48px 60px; }
  @media (max-width: 600px)  { padding: 32px 20px 48px; gap: 28px; }
`;

const Breadcrumb = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  margin: 0;

  span {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

const PageTitle = styled.h1`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(32px, 5vw, 55px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

/* ── Controles (sort + paginação) ── */

const Controls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
`;

const SortBtn = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 38px;
  padding: 0 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }
`;

const SortLabel = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;

  em {
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-style: normal;
    font-weight: 300;
  }
`;

const SortIcon = styled.img`
  width: 13px;
`;

const Pagination = styled.div`
  align-items: center;
  display: flex;
  gap: 11px;
`;

const PageDot = styled.div<{ $active?: boolean }>`
  align-items: center;
  background-color: ${({ $active }) => ($active ? "#000000" : "#f6be00")};
  border-radius: 100px;
  color: ${({ $active }) => ($active ? "#f6be00" : "#3e3e3e")};
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  height: 32px;
  justify-content: center;
  width: 32px;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#000000" : "#e0aa00")};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const NextBtn = styled.img`
  height: 32px;
  width: 32px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateX(3px);
    opacity: 0.8;
  }
`;

/* ── Grid de cards ── */

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  width: 100%;

  @media (max-width: 1100px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 768px)  { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px)  { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardImageWrap = styled.div`
  aspect-ratio: 286 / 550;
  position: relative;
  width: 100%;

  @media (max-width: 768px) { aspect-ratio: 3 / 4; }
`;

const CardImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  transition: transform 0.4s ease;
`;

/* Gradiente escuro no fundo para o texto ficar legível */
const CardOverlay = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const CardContent = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 0;
  padding: 24px 20px;
  position: absolute;
  right: 0;
`;

const CardTitle = styled.p`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: clamp(16px, 1.8vw, 22px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDesc = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: clamp(13px, 1.4vw, 18px);
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardLink = styled.span`
  color: #f6be00;
  cursor: pointer;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: clamp(14px, 1.4vw, 18px);
  font-weight: 700;
  text-decoration: none;
  transition: letter-spacing 0.2s ease;

  ${Card}:hover & {
    letter-spacing: 0.5px;
    text-decoration: underline;
  }
`;

/* ══════════════════════════════════════════════
   COMPONENTE
══════════════════════════════════════════════ */

export const Lancamentos = (): React.JSX.Element => {
  return (
    <Page>
      <Breadcrumb>
        Página inicial &gt; <span>Lançamentos</span>
      </Breadcrumb>

      <PageTitle>LANÇAMENTOS</PageTitle>

      {/* Controles superiores */}
      <Controls>
        <SortBtn>
          <SortLabel>
            Ordenar por:&nbsp;&nbsp;<em>Mais recente</em>
          </SortLabel>
          <SortIcon alt="" src="https://c.animaapp.com/wSrmTlud/img/modo-de-isolamento.svg" />
        </SortBtn>
        <Pagination>
          <PageDot $active>1</PageDot>
          {["2", "3", "4"].map((n) => (
            <PageDot key={n}>{n}</PageDot>
          ))}
          <NextBtn alt="" src="https://c.animaapp.com/wSrmTlud/img/frame-389.svg" />
        </Pagination>
      </Controls>

      {/* Grid de produtos */}
      <CardGrid>
        {allCards.map((card, i) => (
          <Card key={i}>
            <CardImageWrap>
              <CardImage alt={card.title} src={card.img} />
              <CardOverlay />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDesc>{card.desc}</CardDesc>
                <CardLink>Ver mais</CardLink>
              </CardContent>
            </CardImageWrap>
          </Card>
        ))}
      </CardGrid>

      {/* Controles inferiores */}
      <Controls>
        <SortBtn>
          <SortLabel>
            Ordenar por:&nbsp;&nbsp;<em>Mais recente</em>
          </SortLabel>
          <SortIcon alt="" src="https://c.animaapp.com/wSrmTlud/img/modo-de-isolamento.svg" />
        </SortBtn>
        <Pagination>
          <PageDot $active>1</PageDot>
          {["2", "3", "4"].map((n) => (
            <PageDot key={n}>{n}</PageDot>
          ))}
          <NextBtn alt="" src="https://c.animaapp.com/wSrmTlud/img/frame-389-1.svg" />
        </Pagination>
      </Controls>
    </Page>
  );
};

export default Lancamentos;
