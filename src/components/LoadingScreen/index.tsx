import styled, { keyframes, css } from "styled-components";

/* ── Animações ─────────────────────────────────────────── */

const writeReveal = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
`;

const penMove = keyframes`
  0%   { left: 0%;   opacity: 1; }
  88%  { opacity: 1; }
  100% { left: 100%; opacity: 0; }
`;

const penPulse = keyframes`
  0%, 100% { transform: scaleY(1);   opacity: 1; }
  50%       { transform: scaleY(0.7); opacity: 0.7; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const barFill = keyframes`
  0%   { width: 0%; }
  60%  { width: 80%; }
  90%  { width: 95%; }
  100% { width: 100%; }
`;

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; pointer-events: none; }
`;

const slideUp = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(-24px); opacity: 0; }
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
  animation: ${fadeOut} 0.5s ease 1.55s forwards;
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
  animation: ${slideUp} 0.45s ease 1.3s forwards;
`;

/* ── Logo com efeito de escrita ──────────────────────────── */

const LogoWrap = styled.div`
  position: relative;
  width: 220px;
  height: auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 220px;
  height: auto;
  filter: brightness(0) invert(1);
  display: block;
  animation: ${writeReveal} 1.0s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both;
`;

/* Cursor de caneta que acompanha o traçado */
const PenCursor = styled.span`
  position: absolute;
  top: 10%;
  height: 80%;
  width: 2.5px;
  border-radius: 2px;
  background: #f6be00;
  box-shadow: 0 0 8px 2px rgba(246, 190, 0, 0.7);
  animation:
    ${penMove}  1.0s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both,
    ${penPulse} 0.12s ease-in-out 0.15s 8;
`;

/* Ponto brilhante na ponta do cursor */
const PenTip = styled.span`
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f6be00;
  box-shadow: 0 0 6px 3px rgba(246, 190, 0, 0.9);
`;

/* ── Barra de progresso ──────────────────────────────────── */

const BarTrack = styled.div`
  width: 220px;
  height: 3px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  overflow: hidden;
  animation: ${css`${fadeIn} 0.4s ease 0.6s both`};
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
    ${barFill} 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both,
    ${shimmer} 1.5s linear 0.5s infinite;
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
  animation: ${css`${fadeIn} 0.5s ease 0.8s both`};
`;

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
          <PenCursor>
            <PenTip />
          </PenCursor>
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
