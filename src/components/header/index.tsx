import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
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
  Hamburger,
  RightControls,
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderWrapper onMouseLeave={() => setActiveMega(null)}>
      <Topo className="container-full-align">
        <StyledLink
          to="/acesso-clientes"
          onMouseEnter={() => setActiveMega(null)}
        >
          <TextWrapper>Acesso clientes</TextWrapper>
        </StyledLink>
        <StyledLink
          to="/assistencia-tecnica"
          onMouseEnter={() => setActiveMega(null)}
        >
          <TextWrapper>Assistência Técnica</TextWrapper>
        </StyledLink>
        <StyledLink to="/blog" onMouseEnter={() => setActiveMega("conteudo")}>
          <TextWrapper>Conteúdo</TextWrapper>
        </StyledLink>
        <StyledLink to="/garantia" onMouseEnter={() => setActiveMega(null)}>
          <TextWrapper>Garantia</TextWrapper>
        </StyledLink>
        <LanguageGroup>
          <VectorImage
            alt="Vector"
            src="https://c.animaapp.com/EUbsVkCm/img/vector.svg"
          />
          <TextWrapper>AC</TextWrapper>
        </LanguageGroup>
        <LanguageGroup>
          <BrImage
            alt="Br"
            src="https://c.animaapp.com/EUbsVkCm/img/br.svg"
          />
          <TextWrapper>PT</TextWrapper>
        </LanguageGroup>
      </Topo>

      <NavArea>
        <BottomHeader className="container-full-align">
          <StyledLink to="/" onClick={closeMenu}>
            <Img
              alt="Camada"
              src="https://c.animaapp.com/7nCxdmTD/img/camada-1-1.svg"
            />
          </StyledLink>

          <Navbar $open={menuOpen}>
            <NavItem
              style={{ cursor: "default" }}
              onMouseEnter={() => setActiveMega("produtos")}
            >
              Nossos Produtos
            </NavItem>
            <NavItem
              style={{ cursor: "default" }}
              onMouseEnter={() => setActiveMega("conheca")}
            >
              Conheça a VONDER
            </NavItem>
            <StyledLink
              to="/lancamentos"
              onClick={closeMenu}
              onMouseEnter={() => setActiveMega(null)}
            >
              <NavItem>Lançamentos</NavItem>
            </StyledLink>
            <StyledLink
              to="/onde-comprar"
              onClick={closeMenu}
              onMouseEnter={() => setActiveMega(null)}
            >
              <NavItem>Onde Comprar</NavItem>
            </StyledLink>
            <StyledLink
              to="/fale-conosco"
              onClick={closeMenu}
              onMouseEnter={() => setActiveMega("atendimento")}
            >
              <NavItem>Central de Atendimento</NavItem>
            </StyledLink>
          </Navbar>

          <RightControls>
            <Vector
              alt="Vector"
              src="https://c.animaapp.com/7nCxdmTD/img/vector.svg"
            />
            <Hamburger
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </Hamburger>
          </RightControls>
        </BottomHeader>

        <MegaMenu open={activeMega !== null}>
          {activeMega ? megaContent[activeMega] : null}
        </MegaMenu>
      </NavArea>
    </HeaderWrapper>
  );
}

export default Header;
