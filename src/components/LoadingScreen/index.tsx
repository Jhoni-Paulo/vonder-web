import styled, { keyframes, css } from "styled-components";

/* ── Animações ─────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
`;

const barFill = keyframes`
  0%   { width: 0%; }
  60%  { width: 80%; }
  90%  { width: 95%; }
  100% { width: 100%; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; pointer-events: none; }
`;

const slideUp = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(-24px); opacity: 0; }
`;

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const diagonalScroll = keyframes`
  from { transform: translate(0, 0); }
  to   { transform: translate(80px, 80px); }
`;

/* ── Container principal ─────────────────────────────────── */

const Container = styled.div`
  position: fixed;
  inset: 0;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  animation: ${fadeOut} 0.5s ease 1.35s forwards;
`;

/* ── Padrão de linhas diagonais no fundo ─────────────────── */

const DiagonalBg = styled.div`
  position: absolute;
  inset: -80px;
  opacity: 0.04;
  background-image: repeating-linear-gradient(
    45deg,
    #f6be00 0px,
    #f6be00 1px,
    transparent 1px,
    transparent 40px
  );
  animation: ${diagonalScroll} 4s linear infinite;
`;

/* ── Conteúdo central ────────────────────────────────────── */

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
  animation: ${slideUp} 0.45s ease 1.1s forwards;
`;

/* ── Logo ────────────────────────────────────────────────── */

const LogoWrap = styled.div`
  animation: ${fadeIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
`;

const Logo = styled.img`
  width: 220px;
  height: auto;
  filter: brightness(0) invert(1);
  display: block;
`;

/* ── Barra de progresso ──────────────────────────────────── */

const BarTrack = styled.div`
  width: 220px;
  height: 3px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  overflow: hidden;
  animation: ${css`${fadeIn} 0.4s ease 0.4s both`};
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    #f6be00 0%,
    #ffd740 50%,
    #f6be00 100%
  );
  background-size: 400px 100%;
  animation:
    ${barFill} 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both,
    ${shimmer} 1.5s linear 0.3s infinite;
`;

/* ── Tagline ─────────────────────────────────────────────── */

const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.35);
  font-family: "Swis721 LtCn BT-Light", "Swis721 Cn BT", Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
  animation: ${css`${fadeIn} 0.5s ease 0.6s both`};
`;

/* ── Ponto central decorativo ────────────────────────────── */

const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #f6be00;
  margin: 0 10px;
  vertical-align: middle;
`;

/* ── Componente ──────────────────────────────────────────── */

export function LoadingScreen() {
  return (
    <Container>
      <DiagonalBg />
      <Content>
        <LogoWrap>
          <Logo
            src="https://c.animaapp.com/7nCxdmTD/img/camada-1-1.svg"
            alt="Vonder"
          />
        </LogoWrap>
        <BarTrack>
          <BarFill />
        </BarTrack>
        <Tagline>
          Ferramentas<Dot />Qualidade<Dot />Inovação
        </Tagline>
      </Content>
    </Container>
  );
}
