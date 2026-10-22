import styled from "styled-components";

/**
 * Coluna central da página, no mesmo alinhamento do resto do site:
 * 1244px com 24px de respiro lateral.
 */
export const Conteudo = styled.div`
  box-sizing: border-box;
  max-width: 1244px;
  padding: 0 24px;
  width: 100%;
`;

export const Titulo = styled.h1`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

/** Botão arredondado preto/amarelo usado no topo e nos encartes. */
export const BotaoPilula = styled.button<{ $amarelo?: boolean }>`
  align-items: center;
  background-color: ${({ $amarelo }) => ($amarelo ? "#f6be00" : "#000000")};
  border: none;
  border-radius: 40px;
  color: ${({ $amarelo }) => ($amarelo ? "#000000" : "#f6be00")};
  cursor: pointer;
  display: inline-flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  gap: 8px;
  justify-content: center;
  line-height: normal;
  min-height: 50px;
  padding: 10px 30px;
  text-align: left;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }

  @media (max-width: 600px) {
    font-size: 17px;
    padding: 10px 20px;
  }
`;
