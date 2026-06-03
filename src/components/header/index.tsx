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
        <TextWrapper3>Atendimento</TextWrapper3>
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
          <NavItem>Categorias e Produtos</NavItem>
          <NavItem>Conheça a Vonder</NavItem>
          <NavItem>Onde comprar VONDER</NavItem>
          <NavItem>Nosso Blog</NavItem>
          <StyledLink to="/fale-conosco">
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
