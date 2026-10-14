import styled from "styled-components";

/**
 * Peças de layout compartilhadas pelas seções da página.
 *
 * O alinhamento segue o padrão do restante do site: coluna central de
 * 1244px com 24px de respiro lateral, de modo que todo título, texto e
 * imagem comece na mesma margem esquerda.
 */

export const LARGURA_CONTEUDO = 1244;

/** Coluna central — todo conteúdo da página passa por aqui. */
export const Conteudo = styled.div`
  box-sizing: border-box;
  max-width: ${LARGURA_CONTEUDO}px;
  padding: 0 24px;
  width: 100%;
`;

/** Faixa cinza de ponta a ponta, com o conteúdo alinhado à coluna central. */
export const FaixaCinza = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 56px 0;
  width: 100%;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

/** Caixa cinza arredondada, usada nos blocos de segmentos e benefícios. */
export const CaixaCinza = styled.div`
  background-color: #f2f2f2;
  border-radius: 27px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding: 40px 48px 48px;
  width: 100%;

  @media (max-width: 768px) {
    border-radius: 18px;
    gap: 24px;
    padding: 28px 20px 32px;
  }
`;

export const Titulo = styled.h2`
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

/** Título dos blocos em caixa cinza, um degrau abaixo do título de seção. */
export const TituloBloco = styled.h2`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 32px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Paragrafo = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.35;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

/**
 * Par imagem + texto. A ordem no DOM é sempre imagem → texto; quando o
 * desenho pede o texto à esquerda, basta `$textoPrimeiro`.
 */
export const DuasColunas = styled.div<{ $textoPrimeiro?: boolean }>`
  align-items: center;
  display: flex;
  gap: 64px;
  width: 100%;

  > *:first-child {
    order: ${({ $textoPrimeiro }) => ($textoPrimeiro ? 2 : 1)};
  }

  > *:last-child {
    order: ${({ $textoPrimeiro }) => ($textoPrimeiro ? 1 : 2)};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;

    > * {
      order: initial;
    }
  }
`;

/** Coluna de texto dos pares imagem + texto. */
export const ColunaTexto = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export const ImagemColuna = styled.img`
  flex: 1 1 0;
  height: auto;
  min-width: 0;
  object-fit: contain;
  width: 100%;
`;
