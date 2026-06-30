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
  gap: 28px;
  padding: 0 3%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    height: auto;
    min-height: 54px;
    gap: 12px;
    padding: 8px 4%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavArea = styled.div`
  position: relative;
  width: 100%;
`;

export const BottomHeader = styled.div`
  position: relative;
  z-index: 2;
  background-color: #F6BE00;
  border-radius: 0px 0px 20px 20px;
  height: 91px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3% !important;

  @media (max-width: 900px) {
    height: 70px;
    padding: 0 4% !important;
  }
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

  @media (max-width: 900px) {
    height: 38px;
    width: 136px;
  }
`;

export const TextWrapper = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
`;

export const LanguageGroup = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  justify-content: center;
  position: relative;
`;

export const VectorImage = styled.img`
  aspect-ratio: 1;
  height: 22px;
  width: 22px;
  position: relative;
`;

export const BrImage = styled.img`
  height: 22px;
  width: 29px;
  position: relative;
`;

export const Vector = styled.img`
  height: 16px;
  width: 16px;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Navbar = styled.div<{ $open?: boolean }>`
  display: flex;
  height: auto;
  position: relative;
  width: 70%;
  padding: 0 6% !important;
  box-sizing: border-box;
  align-items: center;
  gap: 30px;
  flex: 1;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px 5% !important;
    background-color: #f6be00;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 8px 16px #00000026;
    z-index: 99;
  }
`;

export const NavItem = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  flex-shrink: 0;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px !important;

  &:hover {
    color: #ffffff;
    background-color: #343434;
    border-radius: 40px;
  }

  @media (max-width: 900px) {
    height: auto;
    width: 100%;
    justify-content: flex-start;
    padding: 12px 14px !important;
  }
`;

export const Hamburger = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 42px;
    height: 42px;
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #0e0e0e;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
  }
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
