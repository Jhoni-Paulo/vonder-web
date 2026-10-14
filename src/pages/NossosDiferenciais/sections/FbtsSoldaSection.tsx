import React from "react";
import styled from "styled-components";
import {
  ColunaTexto,
  Conteudo,
  DuasColunas,
  ImagemColuna,
  Paragrafo,
  Titulo,
} from "../styles";

/** Selo da certificação, abaixo do texto. */
const Selo = styled.img`
  height: auto;
  max-width: 294px;
  object-fit: contain;
  width: 100%;
`;

const TextoJustificado = styled(Paragrafo)`
  text-align: justify;
`;

export const FbtsSoldaSection = (): React.JSX.Element => {
  return (
    <Conteudo as="section" aria-labelledby="fbts-solda-titulo">
      <DuasColunas>
        <ImagemColuna
          alt="Soldagem com consumíveis certificados VONDER"
          src="https://c.animaapp.com/GpZzux2v/img/03-3-1.png"
        />
        <ColunaTexto>
          <Titulo id="fbts-solda-titulo">
            Certificação FBTS para consumíveis de solda
          </Titulo>
          <TextoJustificado>
            Segurança, rastreabilidade e credibilidade para os arames MIG e
            eletrodos da nossa marca!
          </TextoJustificado>
          <Selo
            alt="Selo de certificação FBTS"
            src="https://c.animaapp.com/GpZzux2v/img/chatgpt-image-22-de-jul--de-2026--09-15-042-1@2x.png"
          />
        </ColunaTexto>
      </DuasColunas>
    </Conteudo>
  );
};
