import React from "react";
import styled from "styled-components";
import { Conteudo, Paragrafo, Titulo } from "../styles";

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FbtsSobreSection = (): React.JSX.Element => {
  return (
    <Interno as="section" aria-labelledby="fbts-sobre-titulo">
      <Titulo id="fbts-sobre-titulo">
        O que representa a certificação FBTS?
      </Titulo>
      <Paragrafo>
        A certificação FBTS é amplamente reconhecida pelos principais segmentos
        industriais do país e frequentemente exigida em especificações técnicas,
        auditorias, contratos e processos de homologação de fornecedores. Ela
        atesta que os consumíveis foram submetidos a rigorosos ensaios e
        avaliações técnicas, comprovando sua conformidade com normas
        reconhecidas pelo mercado.
      </Paragrafo>
    </Interno>
  );
};
