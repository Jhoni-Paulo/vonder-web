import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { LockIcon } from "../LockIcon/LockIcon"
import {
  HeaderWrapper,
  Topo,
  BottomHeader,
  NavArea,
  Img,
  TextWrapper,
  LanguageGroup,
  VectorImage,
  BrImage,
  Vector,
  Navbar,
  NavItem,
  RightControls,
  MobileHeader,
  MobileHamburgerBtn,
  MobileLogo,
  MobileRightIcons,
  MobileOverlay,
  MobilePanel,
  MobilePanelTopBar,
  MobilePanelLogo,
  MobilePanelLang,
  MobilePanelLangFlag,
  MobilePanelLangText,
  MobilePanelContent,
  MobilePrimaryMenu,
  MobilePrimaryItem,
  MobileSecondaryMenu,
  MobileSecondaryItem,
  MobileCloseBtnCol,
  MobileCloseBtn,
  MobileAccordionItem,
  MobileAccordionTrigger,
  MobileSubmenu,
  MobileSubmenuItem,
} from "./styles";
import { MegaMenu } from "../MegaMenu/MegaMenu";
import { ProdutosMega } from "../MegaMenu/menus/ProdutosMega";
import { AtendimentoMega } from "../MegaMenu/menus/AtendimentoMega";
import { ConteudoMega } from "../MegaMenu/menus/ConteudoMega";
import { ConhecaVonderMega } from "../MegaMenu/menus/ConhecaVonderMega";

type MegaKey = "produtos" | "atendimento" | "conteudo" | "conheca";

const megaContent: Record<MegaKey, React.ReactNode> = {
  produtos: <ProdutosMega />,
  atendimento: <AtendimentoMega />,
  conteudo: <ConteudoMega />,
  conheca: <ConhecaVonderMega />,
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;


const produtosLinks = [
  { text: "Abrasivos", to: "/categorias-e-produtos" },
  { text: "Mangueiras", to: "/categorias-e-produtos" },
  { text: "Pintura", to: "/categorias-e-produtos" },
  { text: "Construção civil", to: "/categorias-e-produtos" },
  { text: "Material Elétrico", to: "/categorias-e-produtos" },
  { text: "Químicos", to: "/categorias-e-produtos" },
  { text: "Correias", to: "/categorias-e-produtos" },
  { text: "Medição e Teste", to: "/categorias-e-produtos" },
  { text: "Rolamento", to: "/categorias-e-produtos" },
  { text: "EPI", to: "/categorias-e-produtos" },
  { text: "Metais", to: "/categorias-e-produtos" },
  { text: "Solda", to: "/categorias-e-produtos" },
  { text: "Ferramentas Elétricas", to: "/categorias-e-produtos" },
  { text: "Movimentação de Materiais", to: "/categorias-e-produtos" },
  { text: "Ferramentas Manuais", to: "/categorias-e-produtos" },
  { text: "Máquinas e Compressores", to: "/categorias-e-produtos" },
  { text: "Usinagem e Corte", to: "/categorias-e-produtos" },
  { text: "Jardinagem", to: "/categorias-e-produtos" },
  { text: "Parafusos e Fixadores", to: "/categorias-e-produtos" },
  { text: "Ver Tudo em VONDER", to: "/categorias-e-produtos", highlight: true },
];

const conhecaLinks: Array<{ text: string; to?: string; disabled?: boolean }> = [
  { text: "Nossa história", disabled: true },
  { text: "Nossos diferenciais", disabled: true },
  { text: "Nossa presença", disabled: true },
];

const atendimentoLinks = [
  { text: "Fale conosco", to: "/fale-conosco" },
  { text: "Trabalhe conosco", to: "/trabalhe-conosco" },
  { text: "FAQ", to: "/faq" },
];

const conteudoLinks: Array<{ text: string; to?: string; href?: string; disabled?: boolean }> = [
  { text: "Blog VONDER", disabled: true },
  { text: "VONDER.tv", href: "https://www.youtube.com/@vonderferramentas" },
];

type SubmenuKey = "produtos" | "conheca" | "atendimento" | "conteudo" | null;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuKey>(null);

  const closeMenu = () => setMenuOpen(false);
  const closeMobile = () => {
    setMobileClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
      setActiveSubmenu(null);
    }, 320);
  };

  const toggleSubmenu = (key: SubmenuKey) => {
    setActiveSubmenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* ── Desktop Header (hidden on mobile via CSS) ── */}
      <HeaderWrapper onMouseLeave={() => setActiveMega(null)}>
        <Topo className="container-full-align">
          <TextWrapper style={{ opacity: 0.35, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 5 }}>
            <LockIcon size={12} color="#f6be00" />Acesso clientes
          </TextWrapper>
          <TextWrapper style={{ opacity: 0.35, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 5 }}>
            <LockIcon size={12} color="#f6be00" />Assistência Técnica
          </TextWrapper>
          <StyledLink
            to="/blog"
            onClick={(e) => {
              if (window.innerWidth <= 1200 && window.innerWidth > 600) {
                e.preventDefault();
                setActiveMega(prev => prev === "conteudo" ? null : "conteudo");
              }
            }}
            onMouseEnter={() => setActiveMega("conteudo")}
          >
            <TextWrapper>Conteúdo</TextWrapper>
          </StyledLink>
          <StyledLink to="/garantia" onMouseEnter={() => setActiveMega(null)}>
            <TextWrapper>Garantia</TextWrapper>
          </StyledLink>
          <LanguageGroup>
            <VectorImage alt="Vector" src="https://c.animaapp.com/EUbsVkCm/img/vector.svg" />
            <TextWrapper>AC</TextWrapper>
          </LanguageGroup>
          <LanguageGroup>
            <BrImage alt="Br" src="https://c.animaapp.com/EUbsVkCm/img/br.svg" />
            <TextWrapper>PT</TextWrapper>
          </LanguageGroup>
        </Topo>

        <NavArea>
          <BottomHeader className="container-full-align">
            <StyledLink to="/" onClick={closeMenu}>
              <Img alt="Camada" src="https://c.animaapp.com/7nCxdmTD/img/camada-1-1.svg" />
            </StyledLink>

            <Navbar $open={menuOpen}>
              <NavItem style={{ cursor: "default" }} onMouseEnter={() => setActiveMega("produtos")}>
                Nossos Produtos
              </NavItem>
              <NavItem style={{ cursor: "default" }} onMouseEnter={() => setActiveMega("conheca")}>
                Conheça a VONDER
              </NavItem>
              <StyledLink to="/lancamentos" onClick={closeMenu} onMouseEnter={() => setActiveMega(null)}>
                <NavItem>Lançamentos</NavItem>
              </StyledLink>
              <StyledLink to="/onde-comprar" onClick={closeMenu} onMouseEnter={() => setActiveMega(null)}>
                <NavItem>Onde Comprar</NavItem>
              </StyledLink>
              <StyledLink
                to="/fale-conosco"
                onClick={(e) => {
                  if (window.innerWidth <= 1200 && window.innerWidth > 600) {
                    e.preventDefault();
                    setActiveMega(prev => prev === "atendimento" ? null : "atendimento");
                  } else {
                    closeMenu();
                  }
                }}
                onMouseEnter={() => setActiveMega("atendimento")}
              >
                <NavItem>Central de Atendimento</NavItem>
              </StyledLink>
            </Navbar>

            <RightControls>
              <Vector alt="Vector" src="https://c.animaapp.com/7nCxdmTD/img/vector.svg" />
            </RightControls>
          </BottomHeader>

          <MegaMenu open={activeMega !== null}>
            {activeMega ? megaContent[activeMega] : null}
          </MegaMenu>
        </NavArea>

        {/* ── Mobile Closed Header Bar ── */}
        <MobileHeader>
          <MobileHamburgerBtn
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen(true)}
          >
            <span />
            <span />
            <span />
          </MobileHamburgerBtn>

          <StyledLink to="/" onClick={closeMobile}>
            <MobileLogo
              alt="VONDER"
              src="https://c.animaapp.com/Z0Vn4sNT/img/frame-69817.svg"
            />
          </StyledLink>

          <MobileRightIcons
            alt="Ícones"
            src="https://c.animaapp.com/Z0Vn4sNT/img/frame-69818.svg"
          />
        </MobileHeader>
      </HeaderWrapper>

      {/* ── Mobile Overlay / Lightbox ── */}
      <MobileOverlay $open={mobileOpen} $closing={mobileClosing}>
        <MobilePanel $closing={mobileClosing}>
          <MobilePanelTopBar>
            <StyledLink to="/" onClick={closeMobile}>
              <MobilePanelLogo
                alt="VONDER"
                src="https://c.animaapp.com/tUaZaNaq/img/frame-69906.svg"
              />
            </StyledLink>
            <MobilePanelLang>
              <MobilePanelLangFlag
                alt="BR"
                src="https://c.animaapp.com/tUaZaNaq/img/br.svg"
              />
              <MobilePanelLangText>PT</MobilePanelLangText>
            </MobilePanelLang>
          </MobilePanelTopBar>

          <MobilePanelContent>
            {/* ── Primary Menu ── */}
            <MobilePrimaryMenu>
              {/* Nossos produtos — accordion */}
              <MobileAccordionItem>
                <MobileAccordionTrigger
                  $open={activeSubmenu === "produtos"}
                  onClick={() => toggleSubmenu("produtos")}
                >
                  Nossos produtos
                </MobileAccordionTrigger>
                <MobileSubmenu $open={activeSubmenu === "produtos"}>
                  {produtosLinks.map((item) => (
                    <StyledLink key={item.text} to={item.to} onClick={closeMobile}>
                      <MobileSubmenuItem className={item.highlight ? "highlight" : ""}>
                        {item.text}
                      </MobileSubmenuItem>
                    </StyledLink>
                  ))}
                </MobileSubmenu>
              </MobileAccordionItem>

              {/* Conheça a VONDER — accordion */}
              <MobileAccordionItem>
                <MobileAccordionTrigger
                  $open={activeSubmenu === "conheca"}
                  onClick={() => toggleSubmenu("conheca")}
                >
                  Conheça a VONDER
                </MobileAccordionTrigger>
                <MobileSubmenu $open={activeSubmenu === "conheca"}>
                  {conhecaLinks.map((item) =>
                    item.disabled ? (
                      <MobileSubmenuItem key={item.text} style={{ opacity: 0.35, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 6 }}>
                        <LockIcon size={12} color="#000" />{item.text}
                      </MobileSubmenuItem>
                    ) : (
                      <StyledLink key={item.text} to={item.to!} onClick={closeMobile}>
                        <MobileSubmenuItem>{item.text}</MobileSubmenuItem>
                      </StyledLink>
                    )
                  )}
                </MobileSubmenu>
              </MobileAccordionItem>

              <StyledLink to="/lancamentos" onClick={closeMobile}>
                <MobilePrimaryItem>Lançamentos</MobilePrimaryItem>
              </StyledLink>

              <StyledLink to="/onde-comprar" onClick={closeMobile}>
                <MobilePrimaryItem>Onde comprar</MobilePrimaryItem>
              </StyledLink>

              {/* Central de atendimento — accordion */}
              <MobileAccordionItem>
                <MobileAccordionTrigger
                  $open={activeSubmenu === "atendimento"}
                  onClick={() => toggleSubmenu("atendimento")}
                >
                  Central de atendimento
                </MobileAccordionTrigger>
                <MobileSubmenu $open={activeSubmenu === "atendimento"}>
                  {atendimentoLinks.map((item) => (
                    <StyledLink key={item.text} to={item.to} onClick={closeMobile}>
                      <MobileSubmenuItem>{item.text}</MobileSubmenuItem>
                    </StyledLink>
                  ))}
                </MobileSubmenu>
              </MobileAccordionItem>
            </MobilePrimaryMenu>

            {/* ── Secondary Menu ── */}
            <MobileSecondaryMenu>
              <MobileSecondaryItem style={{ opacity: 0.35, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 6 }}>
                <LockIcon size={13} color="#000" />Acesso clientes
              </MobileSecondaryItem>
              <MobileSecondaryItem style={{ opacity: 0.35, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 6 }}>
                <LockIcon size={13} color="#000" />Assistência Técnica
              </MobileSecondaryItem>

              {/* Conteúdo — accordion */}
              <MobileAccordionItem>
                <MobileAccordionTrigger
                  $open={activeSubmenu === "conteudo"}
                  onClick={() => toggleSubmenu("conteudo")}
                  style={{ fontSize: "18px", fontFamily: '"Swis721 Cn BT-Roman", Helvetica', fontWeight: 400 }}
                >
                  Conteúdo
                </MobileAccordionTrigger>
                <MobileSubmenu $open={activeSubmenu === "conteudo"}>
                  {conteudoLinks.map((item) =>
                    item.disabled ? (
                      <MobileSubmenuItem key={item.text} style={{ opacity: 0.35, cursor: "not-allowed", display: "flex", alignItems: "center", gap: 6 }}>
                        <LockIcon size={12} color="#000" />{item.text}
                      </MobileSubmenuItem>
                    ) : item.href ? (
                      <StyledA key={item.text} href={item.href} target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
                        <MobileSubmenuItem>{item.text}</MobileSubmenuItem>
                      </StyledA>
                    ) : (
                      <StyledLink key={item.text} to={item.to!} onClick={closeMobile}>
                        <MobileSubmenuItem>{item.text}</MobileSubmenuItem>
                      </StyledLink>
                    )
                  )}
                </MobileSubmenu>
              </MobileAccordionItem>

              <StyledLink to="/garantia" onClick={closeMobile}>
                <MobileSecondaryItem>Garantia</MobileSecondaryItem>
              </StyledLink>
            </MobileSecondaryMenu>
          </MobilePanelContent>
        </MobilePanel>

        <MobileCloseBtnCol>
          <MobileCloseBtn
            type="button"
            aria-label="Fechar menu"
            onClick={closeMobile}
          >
            <span />
            <span />
          </MobileCloseBtn>
        </MobileCloseBtnCol>
      </MobileOverlay>
    </>
  );
}

export default Header;
