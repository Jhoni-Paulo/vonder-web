import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Logo = styled.img`
  width: 200px;
  height: 80px;
  animation: ${pulse} 1s ease-in-out infinite;
`;

export function LoadingScreen() {
  return (
    <LoadingContainer>
      <Logo
        src="https://c.animaapp.com/7nCxdmTD/img/camada-1-1.svg"
        alt="Vonder Logo"
      />
    </LoadingContainer>
  );
}
