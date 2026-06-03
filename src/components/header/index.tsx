import { Link } from "react-router-dom"
import styled from "styled-components"
import {
  HeaderWrapper,
  Topo,
  Camada,
  BottomHeader,
  Img,
  TextWrapper,
  TextWrapper2,
  TextWrapper3,
  TextWrapper4,
  Vector,
  Navbar,
  NavItem,
} from "./styles";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Topo className="container-full-align">
        <StyledLink to="/assistencia-tecnica">
          <TextWrapper>Assistência Técnica</TextWrapper>
        </StyledLink>
        <StyledLink to="/garantia">
          <TextWrapper2>Garantias</TextWrapper2>
        </StyledLink>
        <StyledLink to="/fale-conosco">
          <TextWrapper3>Atendimento</TextWrapper3>
        </StyledLink>
        <TextWrapper4>PT</TextWrapper4>
        <Camada
          alt="Camada"
          src="https://c.animaapp.com/7nCxdmTD/img/camada-1.svg"
        />             
      </Topo>

      <BottomHeader className="container-full-align">
        <StyledLink to="/">
          <Img
            alt="Camada"
            src="https://c.animaapp.com/7nCxdmTD/img/camada-1-1.svg"
          />
        </StyledLink>

        <Navbar>
          <StyledLink to="/categorias-e-produtos">
            <NavItem>Categorias e Produtos</NavItem>
          </StyledLink>
          <StyledLink to="/conheca-a-vonder">
            <NavItem>Conheça a Vonder</NavItem>
          </StyledLink>
          <StyledLink to="/onde-comprar">
            <NavItem>Onde comprar VONDER</NavItem>
          </StyledLink>
          <StyledLink to="/blog">
            <NavItem>Nosso Blog</NavItem>
          </StyledLink>
          <StyledLink to="/seja-revendedor">
            <NavItem>Trabalhe Conosco</NavItem>
          </StyledLink>
        </Navbar>  

        <Vector
          alt="Vector"
          src="https://c.animaapp.com/7nCxdmTD/img/vector.svg"
        />                       
      </BottomHeader>      
    </HeaderWrapper>
  );
}

export default Header;
