import * as React from "react";
import styled from "styled-components";

interface MegaMenuProps {
  open: boolean;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/**
 * Painel base reutilizável do mega menu.
 * Layout, dimensões, fundo, posicionamento e animação são fixos —
 * apenas o `children` (conteúdo) muda de menu para menu.
 */
const Panel = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 510px;
  margin-top: -14px;
  box-sizing: border-box;
  background-color: rgba(14, 14, 14, 0.7);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border-radius: 0 0 20px 20px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  will-change: opacity, transform;

  @media (max-width: 1200px) {
    height: auto;
    min-height: 440px;
    max-height: 80vh;
  }

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? "0" : "-24px")});
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    opacity 0.38s ease,
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 900px) {
    display: none;
  }
`;

const Inner = styled.div<{ $open: boolean }>`
  width: 100%;
  height: 100%;
  /* o conteúdo entra com um leve atraso para um efeito escalonado elegante */
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? "0" : "12px")});
  transition:
    opacity 0.4s ease 0.08s,
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
`;

export function MegaMenu({
  open,
  children,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  return (
    <Panel
      $open={open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-hidden={!open}
    >
      <Inner $open={open}>{children}</Inner>
    </Panel>
  );
}

export default MegaMenu;
