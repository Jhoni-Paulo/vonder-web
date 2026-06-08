import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #F6BE00;
  border-radius: 0px 0px 20px 20px;
`;

export const Topo = styled.div`
  background-color: #0e0e0e;
  border-radius: 0px 0px 20px 20px;
  height: 91px;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const BottomHeader = styled.div`
  background-color: #F6BE00;
  border-radius: 0px 0px 20px 20px;
  height: 91px;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3% !important;
`;

export const Camada = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
`;

export const Img = styled.img`
  height: 49px;
  width: 176px;
  position: relative;
`;

export const TextWrapper = styled.div`
  color: #f6be00;
  font-family: "Inter", Helvetica;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
`;

export const TextWrapper2 = styled(TextWrapper)`
  // Herda estilos de TextWrapper
`;

export const TextWrapper3 = styled(TextWrapper)`
  // Herda estilos de TextWrapper
`;

export const TextWrapper4 = styled(TextWrapper)`
  // Herda estilos de TextWrapper
`;

export const Vector = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
`;

export const Navbar = styled.div`
  display: flex;
  height: auto;
  position: relative;
  width: 70%;
  padding: 0 6% !important;
  align-items: center;
  gap: 30px;
  flex: 1;
  justify-content: space-between;
`;

export const NavItem = styled.div`
  color: #000;
  font-family: "Inter", Helvetica;
  font-size: 17px;
  font-weight: 700;
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  flex-shrink: 0;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px !important;

  &:hover {
    color: #ffffff;
    background-color: #343434;
    border-radius: 40px;
    transition: all 0.4s ease;
  }
`;
