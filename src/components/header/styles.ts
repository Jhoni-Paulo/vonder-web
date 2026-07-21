import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
`;

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  /* Yellow fills the rounded-corner cutout of the black Topo bar. This
     wrapper is rounded with the SAME radius as BottomHeader, so at the very
     bottom corners the yellow is cut out too and the page content behind
     (e.g. blog cover) shows through there instead. */
  background-color: #F6BE00;
  border-radius: 0px 0px 20px 20px;

  @media (max-width: 900px) {
    background-color: transparent;
  }
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

  @media (max-width: 1200px) {
    height: 76px;
    gap: 18px;
    padding: 0 2%;
  }

  @media (max-width: 1024px) {
    height: 64px;
    gap: 12px;
    padding: 0 1.5%;
  }

  @media (max-width: 900px) {
    display: none;
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

  @media (max-width: 1200px) {
    height: 80px;
    padding: 0 2% !important;
  }

  @media (max-width: 1024px) {
    height: 70px;
    padding: 0 1.5% !important;
  }

  @media (max-width: 900px) {
    display: none;
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
  flex-shrink: 0;

  @media (max-width: 1200px) {
    height: 44px;
    width: 158px;
  }

  @media (max-width: 1024px) {
    height: 38px;
    width: 136px;
  }

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

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }
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
  padding: 0 4% !important;
  box-sizing: border-box;
  align-items: center;
  gap: 30px;
  flex: 1;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 0 2.5% !important;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    padding: 0 1.5% !important;
    gap: 10px;
  }

  @media (max-width: 900px) {
    display: none;
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

  @media (max-width: 1200px) {
    font-size: 17px;
    height: auto;
    padding: 5px 8px !important;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 4px 6px !important;
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

/* ── Mobile Header ── */

export const MobileHeader = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6be00;
    border-radius: 0 0 15px 15px;
    height: 70px;
    width: 100%;
    padding: 7px 17px 17px 28px;
    box-sizing: border-box;
  }
`;

export const MobileHamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 38px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  span {
    display: block;
    width: 100%;
    height: 5.9px;
    background-color: #000000;
    border-radius: 20px;
  }
`;

export const MobileLogo = styled.img`
  width: 162px;
  position: relative;
`;

export const MobileRightIcons = styled.img`
  flex-shrink: 0;
`;

export const MobileOverlay = styled.div<{ $open: boolean; $closing: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: ${({ $open, $closing }) => ($open || $closing ? "flex" : "none")};
    position: fixed;
    inset: 0;
    background-color: #000000bf;
    z-index: 200;
    align-items: stretch;
    animation: ${({ $closing }) => ($closing ? fadeOut : fadeIn)} 0.3s ease forwards;
  }
`;

export const MobilePanel = styled.div<{ $closing: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  animation: ${({ $closing }) => ($closing ? slideOut : slideIn)} 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

export const MobileCloseBtnCol = styled.div`
  width: 54px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
`;

export const MobilePanelTopBar = styled.div`
  background-color: #000000;
  display: flex;
  align-items: center;
  gap: 33px;
  padding: 32px 39px 42px 37px;
`;

export const MobilePanelLogo = styled.img`
  width: 162px;
`;

export const MobilePanelLang = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MobilePanelLangFlag = styled.img`
  height: 22px;
  width: 29px;
`;

export const MobilePanelLangText = styled.div`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;

export const MobilePanelContent = styled.div`
  background-color: #ffffff;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 39px;
  padding: 49px 47px 44px;
  overflow-y: auto;
`;

export const MobilePrimaryMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

export const MobilePrimaryItem = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

export const MobileAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileAccordionTrigger = styled.div<{ $open: boolean }>`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-right: 2.5px solid #000000;
    border-bottom: 2.5px solid #000000;
    transform: ${({ $open }) => ($open ? "rotate(-135deg)" : "rotate(45deg)")};
    transition: transform 0.25s ease;
    flex-shrink: 0;
    margin-top: ${({ $open }) => ($open ? "4px" : "-2px")};
  }
`;

export const MobileSubmenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  padding: 16px 0 4px 12px;
  border-left: 2px solid #f6be00;
  margin-top: 12px;
`;

export const MobileSubmenuItem = styled.div`
  color: #444444;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;

  &.highlight {
    color: #f6be00;
  }
`;

export const MobileSecondaryMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const MobileSecondaryItem = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

export const MobileCloseBtn = styled.button`
  position: relative;
  width: 31px;
  height: 31px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  span {
    display: block;
    background-color: #ffffff;
    border-radius: 20px;
    height: 6px;
    width: 38px;
    position: absolute;
    top: 12px;
    left: -4px;

    &:first-child {
      transform: rotate(-45deg);
    }
    &:last-child {
      transform: rotate(45deg);
    }
  }
`;
