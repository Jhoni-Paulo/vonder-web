import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GroupWrapperSubsection } from "../Garantias/sections/GroupWrapperSubsection/GroupWrapperSubsection";

/* ══════════════════════════════════════════════
   HERO — Imagem de fundo + painel de busca
══════════════════════════════════════════════ */

const Hero = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  margin-top: -12px;
`;

const HeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 55px 96px 0;
  flex: 1;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 40px 48px 0;
  }

  @media (max-width: 600px) {
    padding: 32px 20px 0;
  }
`;

const Breadcrumb = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  margin: 0;

  span.bold {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

const SearchPanel = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 28px;
  width: 500px;
  box-sizing: border-box;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const SearchTitle = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  margin: 0;

  span.bold {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }
`;

const SearchBar = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const SearchLabel = styled.span`
  color: #666666;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
`;

const SearchTag = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  display: flex;
  gap: 6px;
  height: 32px;
  padding: 7px 12px;
`;

const SearchTagText = styled.span`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
`;

const ClearBtn = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const Divider = styled.img`
  width: 100%;
  height: auto;
`;

const StoreCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StoreHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StoreNameRow = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const StoreIcon = styled.img`
  width: 49px;
`;

const StoreFlag = styled.img`
  width: 29px;
`;

const StoreName = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 22px;
  font-weight: 700;
`;

const StoreDistance = styled.div`
  color: #000000;
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
`;

const StarIcon = styled.img`
  height: 52px;
  width: 52px;
`;

const StoreInfoRow = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 10px;
`;

const InfoIcon = styled.img`
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const InfoText = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 17px;
  font-weight: 300;
  margin: 0;
  line-height: 1.4;

  span.bold {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }
`;

const StoreActions = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ActionYellow = styled.button`
  align-items: center;
  background-color: #f6be00;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 32px;
  padding: 7px 16px;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 700;
  color: #000000;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const BackButton = styled.button`
  align-items: center;
  background-color: #f6be00;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  padding: 0 20px;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 18px;
  color: #323232;
  align-self: flex-start;
  transition: transform 0.2s ease;

  &:hover { transform: translateY(-1px); }
`;

/* ══════════════════════════════════════════════
   BANNER DE ATENÇÃO
══════════════════════════════════════════════ */

const AlertBanner = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 28px 96px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 24px 48px; }
  @media (max-width: 600px)  { padding: 20px; gap: 12px; }
`;

const AlertIcon = styled.img`
  width: 53px;
  flex-shrink: 0;
`;

const AlertText = styled.p`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  flex: 1;
  min-width: 200px;

  span.bold {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }
  span.italic {
    font-family: "Swis721 Cn BT-Italic", Helvetica;
    font-style: italic;
  }
`;

const AlertTitle = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  flex-shrink: 0;

  @media (max-width: 600px) { font-size: 22px; }
`;

/* ══════════════════════════════════════════════
   PÁGINA WRAPPER
══════════════════════════════════════════════ */

const Page = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 80px;
  width: 100%;
`;

const Inner = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 96px;
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 0 48px; }
  @media (max-width: 600px)  { padding: 0 20px; gap: 28px; }
`;

/* ══════════════════════════════════════════════
   SEÇÃO LOJAS / MARKETPLACES
══════════════════════════════════════════════ */

const SectionTitle = styled.h2`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) { font-size: 32px; }
`;

const SectionSubtitle = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  line-height: 1.4;
`;

/* Row principal — full width, duas colunas: grupo LOJA OFICIAL | grupo REVENDEDOR */
const MarketplaceRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 16px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* Grupo com os 3 cards LOJA OFICIAL */
const LojaOficialGroup = styled.div`
  display: flex;
  flex: 3;
  gap: 16px;
  min-width: 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

/* Wrapper do lado direito: badge fora + card clipado */
const RevendedorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`;

/* Ícone separador — fora do clip, mais próximo do card REVENDEDOR */
const SeparatorBadge = styled.img`
  width: 53px;
  flex-shrink: 0;
  margin-right: -8px;
  z-index: 1;
`;

/* Clip container — esconde 40% da direita do card */
const RevendedorClip = styled.div`
  flex: 1;
  overflow: hidden;
  min-width: 0;
`;

const MarketplaceCard = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  flex: 1;
  gap: 12px;
  padding: 20px;
  box-sizing: border-box;
  min-width: 0;
`;

/* Card mais largo que o clip container → 40% fica oculto à direita */
const RevendedorCard = styled(MarketplaceCard)`
  flex-shrink: 0;
  width: 167%;
`;

const MarketplaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const MarketplaceTag = styled.span`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 14px;
  font-weight: 300;
`;

const MarketplaceName = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
`;

const AccessBtn = styled.a`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  display: flex;
  gap: 6px;
  height: 32px;
  padding: 7px 16px;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const AccessBtnText = styled.span`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 700;
`;

/* ══════════════════════════════════════════════
   SEÇÃO "OUTRAS OPÇÕES"
══════════════════════════════════════════════ */

const OtrasTitle = styled.h2`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 45px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
  width: 100%;

  span.italic { font-family: "Swis721 Cn BT-Italic", Helvetica; font-style: italic; }
  span.bold   { font-family: "Swis721 Cn BT-BoldItalic", Helvetica; font-style: italic; font-weight: 700; }

  @media (max-width: 600px) { font-size: 30px; }
`;

const OptionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
  justify-content: center;
  width: 100%;
`;

const OptionCard = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 220px;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
  text-align: center;

  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const OptionIconWrap = styled.div`
  display: flex;
  flex-shrink: 0;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const OptionTitle = styled.div`
  color: #0e0e0e;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 26px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`;

const OptionDesc = styled.p`
  color: #0e0e0e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;

  span.bold { font-family: "Swis721 Cn BT-Bold", Helvetica; font-weight: 700; }
`;

const OptionBtn = styled(Link)`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  color: #f6be00;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  justify-content: center;
  padding: 0 28px;
  text-decoration: none;
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.25);
  }
`;


/* ══════════════════════════════════════════════
   DADOS
══════════════════════════════════════════════ */

const marketplaces = [
  { tag: "LOJA OFICIAL VONDER",  name: "MERCADO LIVRE", url: "#" },
  { tag: "LOJA OFICIAL VONDER",  name: "SHOPEE",        url: "#" },
  { tag: "LOJA OFICIAL VONDER",  name: "AMAZON",        url: "#" },
  { tag: "REVENDEDOR AUTORIZADO", name: "FG.COM.BR",    url: "#" },
];

const IconService = () => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Gear */}
    <circle cx="25" cy="15" r="4.5"/>
    <path d="M25 7v2M25 21v2M17 15h-2M35 15h-2M19.1 9.1l1.4 1.4M29.5 19.5l1.4 1.4M19.1 20.9l1.4-1.4M29.5 10.5l1.4-1.4"/>
    {/* Hand / palm */}
    <path d="M10 32c0-1.1.9-2 2-2h2v-6a2 2 0 0 1 4 0v4h1v-2a2 2 0 0 1 4 0v2h1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v5c0 3.3-2.7 6-6 6H18a6 6 0 0 1-6-6v-2h-2z"/>
  </svg>
);

const IconShop = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18l4-10h28l4 10"/>
    <path d="M6 18v22h36V18"/>
    <path d="M6 18h36"/>
    <path d="M16 18v-2a8 8 0 0 0 16 0v2"/>
    <path d="M4 18a6 6 0 0 0 6 6 6 6 0 0 0 6-6"/>
    <path d="M16 18a6 6 0 0 0 6 6 6 6 0 0 0 6-6"/>
    <path d="M28 18a6 6 0 0 0 6 6 6 6 0 0 0 6-6"/>
    <rect x="18" y="28" width="12" height="12" rx="1"/>
  </svg>
);

const IconMessaging = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 8h32a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H16l-8 6V10a2 2 0 0 1 2-2z"/>
    <line x1="16" y1="20" x2="32" y2="20"/>
    <line x1="16" y1="28" x2="26" y2="28"/>
  </svg>
);

const options = [
  {
    icon: <IconService />,
    title: "Assistência técnica",
    desc: "Encontre facilmente os centros de assistência autorizados para garantir o bom funcionamento de suas ferramentas VONDER",
    action: "Assistência técnica",
    link: "/assistencia-tecnica",
  },
  {
    icon: <IconShop />,
    title: "Sou lojista ou revendedor",
    desc: <>Acesse o <span className="bold">B2B VONDER</span>, nossa plataforma digital de vendas exclusiva para lojistas e revendedores, com soluções e condições especiais!</>,
    action: "Acesso clientes",
    link: "/acesso-clientes",
  },
  {
    icon: <IconMessaging />,
    title: "Perguntas frequentes",
    desc: "Tire suas dúvidas rapidamente com as respostas para as perguntas mais comuns sobre nossos produtos e serviços.",
    action: "Acessar FAQ",
    link: "/faq",
  },
];

/* ══════════════════════════════════════════════
   COMPONENTE
══════════════════════════════════════════════ */

export const OndeComprarVonder = (): React.JSX.Element => {
  return (
    <Page>
      {/* ── Hero ── */}
      <Hero>
        <HeroBg alt="" src="https://c.animaapp.com/LVgJWovb/img/04-1.png" />
        <HeroContent>
          <Breadcrumb>
            Página inicial &gt; <span className="bold">Onde comprar</span>
          </Breadcrumb>
          <SearchPanel>
            <SearchTitle>
              Encontre um <span className="bold">Revendedor VONDER</span>
            </SearchTitle>
            <SearchBar>
              <SearchLabel>Busca por:</SearchLabel>
              <SearchTag>
                <SearchTagText>81070-900</SearchTagText>
              </SearchTag>
              <ClearBtn alt="Limpar" src="https://c.animaapp.com/LVgJWovb/img/clear.svg" />
            </SearchBar>
            <Divider alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69776.svg" />

            {/* Resultado 1 */}
            <StoreCard>
              <StoreHeader>
                <StoreNameRow>
                  <StoreIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69773.svg" />
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <StoreName>FERRAMENTAS GERAIS</StoreName>
                    <StoreDistance>(1,4 km)</StoreDistance>
                  </div>
                </StoreNameRow>
                <StarIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-543.svg" />
              </StoreHeader>
              <Divider alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69776.svg" />
              <StoreInfoRow>
                <InfoIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/place-1.svg" />
                <InfoText>
                  <span className="bold">Endereço: </span>
                  R. João Bettega, 2876 - Portão, Curitiba - PR, CEP 81070-900 - Brasil
                </InfoText>
              </StoreInfoRow>
              <StoreInfoRow>
                <InfoIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/call-2.svg" />
                <InfoText>
                  <span className="bold">Telefone: </span>
                  +55 (041) 3316-4100
                </InfoText>
              </StoreInfoRow>
              <StoreActions>
                <ActionYellow>Ver no mapa</ActionYellow>
                <ActionYellow>
                  <img alt="" src="https://c.animaapp.com/LVgJWovb/img/call-1.svg" style={{ height: 18 }} />
                  Entre em contato
                </ActionYellow>
              </StoreActions>
            </StoreCard>

            <Divider alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69784.svg" />

            {/* Resultado 2 */}
            <StoreCard>
              <StoreHeader>
                <StoreNameRow>
                  <StoreFlag alt="" src="https://c.animaapp.com/LVgJWovb/img/br.svg" />
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <StoreName>FERRAMENTAS GERAIS</StoreName>
                    <StoreDistance>(1,4 km)</StoreDistance>
                  </div>
                </StoreNameRow>
                <StarIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-543-1.svg" />
              </StoreHeader>
              <Divider alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69784.svg" />
              <StoreInfoRow>
                <InfoIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/place-1.svg" />
                <InfoText>
                  <span className="bold">Endereço: </span>
                  R. João Bettega, 2876 - Portão, Curitiba - PR, CEP 81070-900 - Brasil
                </InfoText>
              </StoreInfoRow>
              <StoreInfoRow>
                <InfoIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/call-2.svg" />
                <InfoText>
                  <span className="bold">Telefone: </span>
                  +55 (041) 3316-4100
                </InfoText>
              </StoreInfoRow>
            </StoreCard>

            <BackButton type="button">
              ← Voltar
            </BackButton>
          </SearchPanel>
        </HeroContent>
      </Hero>

      {/* ── Banner ATENÇÃO ── */}
      <AlertBanner>
        <AlertTitle>ATENÇÃO!</AlertTitle>
        <AlertIcon alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69359-1.svg" />
        <AlertText>
          <span className="bold">A VONDER não trabalha com vendas diretas para consumidores finais.</span>
          {" "}
          <span className="italic">Por isso, indicaremos sempre revendedores dos nossos produtos que estejam próximos da sua localidade.</span>
        </AlertText>
      </AlertBanner>

      {/* ── Marketplaces ── */}
      <Inner>
        <SectionTitle>Lojas online e marketplaces</SectionTitle>
        <SectionSubtitle>
          Encontre a VONDER com facilidade também<br />
          nos principais marketplaces e plataformas online.
        </SectionSubtitle>
      </Inner>

      <MarketplaceRow>
        {/* 3 cards LOJA OFICIAL */}
        <LojaOficialGroup>
          {marketplaces.slice(0, 3).map((m) => (
            <MarketplaceCard key={m.name}>
              <MarketplaceInfo>
                <MarketplaceTag>{m.tag}</MarketplaceTag>
                <MarketplaceName>{m.name}</MarketplaceName>
              </MarketplaceInfo>
              <AccessBtn href={m.url} target="_blank" rel="noopener noreferrer">
                <AccessBtnText>Acessar site</AccessBtnText>
              </AccessBtn>
            </MarketplaceCard>
          ))}
        </LojaOficialGroup>

        {/* Ícone separador + card REVENDEDOR AUTORIZADO (40% oculto à direita) */}
        <RevendedorWrapper>
          <SeparatorBadge alt="" src="https://c.animaapp.com/LVgJWovb/img/frame-69794.svg" />
          <RevendedorClip>
            <RevendedorCard>
              <MarketplaceInfo>
                <MarketplaceTag>{marketplaces[3].tag}</MarketplaceTag>
                <MarketplaceName>{marketplaces[3].name}</MarketplaceName>
              </MarketplaceInfo>
              <AccessBtn href={marketplaces[3].url} target="_blank" rel="noopener noreferrer">
                <AccessBtnText>Acessar site</AccessBtnText>
              </AccessBtn>
            </RevendedorCard>
          </RevendedorClip>
        </RevendedorWrapper>
      </MarketplaceRow>

      {/* ── Outras opções ── */}
      <Inner>
        <OtrasTitle>
          <span className="italic">Outras opções que você<br /></span>
          <span className="bold">pode estar buscando</span>
        </OtrasTitle>
        <OptionGrid>
          {options.map((o) => (
            <OptionCard key={o.title}>
              <OptionIconWrap>{o.icon}</OptionIconWrap>
              <OptionTitle>{o.title}</OptionTitle>
              <OptionDesc>{o.desc}</OptionDesc>
              <OptionBtn to={o.link}>{o.action}</OptionBtn>
            </OptionCard>
          ))}
        </OptionGrid>
      </Inner>

      {/* ── Ainda precisa de ajuda? ── */}
      <GroupWrapperSubsection />
    </Page>
  );
};

export default OndeComprarVonder;
