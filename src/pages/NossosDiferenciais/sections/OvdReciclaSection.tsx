import React from "react";
import styled from "styled-components";
import {
  ColunaTexto,
  Conteudo,
  DuasColunas,
  FaixaCinza,
  Paragrafo,
  Titulo,
} from "../styles";

/**
 * Faixa um pouco mais justa que o padrão (51px no lugar de 56px) e mais
 * afastada das vizinhas: a página já separa as seções em 88px, então sobem
 * para 138px acima (RoHS) e 118px abaixo.
 */
const Faixa = styled(FaixaCinza)`
  margin-bottom: 30px;
  margin-top: 50px;
  padding: 51px 0;

  @media (max-width: 600px) {
    padding: 35px 0;
  }
`;

/**
 * A imagem transborda a faixa cinza em 50px no topo e 50px embaixo.
 *
 * A margem negativa precisa vencer também o respiro interno da faixa
 * (51px), daí os 101px: 51 + 50. Como a imagem continua no fluxo, é ela
 * que define a altura da faixa — o texto segue centralizado à esquerda.
 */
const Imagem = styled.img`
  aspect-ratio: 1;
  border-radius: 12px;
  flex: 1 1 0;
  margin: -101px 0;
  min-width: 0;
  object-fit: cover;
  position: relative;
  width: 100%;
  /* Fica por cima das seções vizinhas. */
  z-index: 1;

  /* Empilhado no mobile o transbordo atropelaria as seções de cima e de baixo. */
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

const TextoJustificado = styled(Paragrafo)`
  text-align: justify;
`;

export const OvdReciclaSection = (): React.JSX.Element => {
  return (
    <Faixa as="section" aria-labelledby="ovd-recicla-titulo">
      <Conteudo>
        <DuasColunas $textoPrimeiro>
          <Imagem
            alt="Embalagens separadas para reciclagem"
            src="https://c.animaapp.com/GpZzux2v/img/chatgpt-image-6-de-mai-1.png"
          />
          <ColunaTexto>
            <Titulo id="ovd-recicla-titulo">OVD Recicla</Titulo>
            <TextoJustificado>
              O OVD Recicla é uma iniciativa que reforça o compromisso do Grupo
              OVD com a sustentabilidade, contribuindo para a recuperação de
              materiais e para o fortalecimento da cadeia da reciclagem. Com 20
              milhões de toneladas de embalagens recicladas, transforma
              responsabilidade ambiental em impacto positivo para a sociedade.
            </TextoJustificado>
          </ColunaTexto>
        </DuasColunas>
      </Conteudo>
    </Faixa>
  );
};
