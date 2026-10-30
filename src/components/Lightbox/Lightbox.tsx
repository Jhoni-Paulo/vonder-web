import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Fundo = styled.div`
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  inset: 0;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 20px;
  position: fixed;
  z-index: 1000;

  @media (max-width: 600px) {
    padding: 12px;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Caixa = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  max-width: 900px;
  padding: 32px 40px 40px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    gap: 16px;
    padding: 20px 16px 24px;
  }

  @media (max-width: 400px) {
    border-radius: 0;
    min-height: 100%;
  }
`;

const Topo = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Titulo = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 32px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Descricao = styled.p`
  color: #555a57;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const BotaoFechar = styled.button`
  align-items: center;
  background-color: #f2f2f2;
  border: none;
  border-radius: 50%;
  color: #3e3e3e;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-size: 22px;
  height: 40px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  transition: background-color 0.2s ease;
  width: 40px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Conteudo = styled.div`
  background-color: #efefef;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
`;

const Imagem = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

/* O informativo tem largura fixa (~793px) e altura variável: a moldura rola
   por dentro em vez de cortar o conteúdo. */
const Quadro = styled.iframe`
  border: none;
  display: block;
  height: min(72vh, 900px);
  width: 100%;
`;

const Rodape = styled.a`
  align-self: flex-start;
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    color: #000000;
  }
`;

/** Só a extensão distingue uma imagem solta de uma página de informativo. */
const EXTENSAO_DE_IMAGEM = /\.(avif|gif|jpe?g|png|svg|webp)(\?|#|$)/i;

interface LightboxProps {
  aberto: boolean;
  titulo: string;
  descricao?: string;
  /** Imagem ou página a exibir dentro da caixa. */
  url: string;
  onFechar: () => void;
}

/**
 * Caixa sobreposta para abrir o conteúdo sem tirar a pessoa da página.
 *
 * Fecha no Esc, no clique fora e no botão. Enquanto está aberta, a página de
 * trás não rola e o foco começa no botão de fechar.
 */
export const Lightbox = ({
  aberto,
  titulo,
  descricao,
  url,
  onFechar,
}: LightboxProps): React.JSX.Element | null => {
  const fecharRef = useRef<HTMLButtonElement>(null);
  /* Guarda quem abriu, para devolver o foco ao fechar. */
  const anteriorRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!aberto) return;

    anteriorRef.current = document.activeElement as HTMLElement | null;
    fecharRef.current?.focus();

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") onFechar();
    };
    window.addEventListener("keydown", aoTeclar);

    const rolagemAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = rolagemAnterior;
      anteriorRef.current?.focus?.();
    };
  }, [aberto, onFechar]);

  if (!aberto) return null;

  const ehImagem = EXTENSAO_DE_IMAGEM.test(url);

  return (
    <Fundo onClick={onFechar}>
      <Caixa
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        onClick={(evento) => evento.stopPropagation()}
      >
        <Topo>
          <Textos>
            <Titulo>{titulo}</Titulo>
            {descricao && <Descricao>{descricao}</Descricao>}
          </Textos>
          <BotaoFechar ref={fecharRef} type="button" aria-label="Fechar" onClick={onFechar}>
            <span aria-hidden="true">&times;</span>
          </BotaoFechar>
        </Topo>

        <Conteudo>
          {ehImagem ? (
            <Imagem alt={titulo} src={url} />
          ) : (
            <Quadro src={url} title={titulo} loading="lazy" />
          )}
        </Conteudo>

        <Rodape href={url} target="_blank" rel="noopener noreferrer">
          Abrir em nova aba
        </Rodape>
      </Caixa>
    </Fundo>
  );
};
