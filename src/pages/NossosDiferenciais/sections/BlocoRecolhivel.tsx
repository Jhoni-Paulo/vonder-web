import React, { useState } from "react";
import styled from "styled-components";
import { CaixaCinza, TituloBloco } from "../styles";

/* Não usar <header> aqui: o index.css pinta todo header de amarelo com
   `!important`, por causa do cabeçalho do site. */
const Cabecalho = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  user-select: none;
  width: 100%;
`;

/** Aponta para baixo quando fechado e para cima quando aberto. */
const Chevron = styled.img<{ $aberto: boolean }>`
  flex-shrink: 0;
  height: 32px;
  transform: rotate(${({ $aberto }) => ($aberto ? "180deg" : "0deg")});
  transition: transform 0.25s ease;
  width: 32px;
`;

const ICONE_CHEVRON = "https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg";

interface BlocoRecolhivelProps {
  titulo: string;
  /** Usado no `aria-labelledby` da seção e para ligar cabeçalho e conteúdo. */
  id: string;
  children: React.ReactNode;
}

/**
 * Caixa cinza com título clicável: o conteúdo abre e fecha. Começa fechada.
 */
export const BlocoRecolhivel = ({
  titulo,
  id,
  children,
}: BlocoRecolhivelProps): React.JSX.Element => {
  const [aberto, setAberto] = useState(false);

  return (
    <CaixaCinza>
      <Cabecalho
        role="button"
        tabIndex={0}
        aria-expanded={aberto}
        aria-controls={`${id}-conteudo`}
        onClick={() => setAberto((atual) => !atual)}
        onKeyDown={(evento) => {
          if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            setAberto((atual) => !atual);
          }
        }}
      >
        <TituloBloco id={id}>{titulo}</TituloBloco>
        <Chevron
          $aberto={aberto}
          alt={aberto ? "Recolher" : "Expandir"}
          src={ICONE_CHEVRON}
        />
      </Cabecalho>

      {aberto && <div id={`${id}-conteudo`}>{children}</div>}
    </CaixaCinza>
  );
};
