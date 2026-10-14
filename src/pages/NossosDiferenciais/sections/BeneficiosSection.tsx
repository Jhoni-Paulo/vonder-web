import React from "react";
import styled from "styled-components";
import iconeRastreabilidade from "../../../assets/Group-69409.png";
import { Conteudo } from "../styles";
import { BlocoRecolhivel } from "./BlocoRecolhivel";

const Grade = styled.div`
  display: grid;
  gap: 24px 31px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.article<{ $largo?: boolean }>`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 14.34px;
  box-shadow: 0 0 19.12px #00000026;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  padding: 24px 32px;
  width: 100%;

  ${({ $largo }) => $largo && "grid-column: 1 / -1;"}

  @media (max-width: 900px) {
    grid-column: auto;
  }
`;

const CardIcone = styled.img`
  flex-shrink: 0;
  width: 65.5px;
`;

const CardTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const CardTitulo = styled.h3`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 23px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 19px;
  }
`;

const CardDescricao = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-size: 23px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.25;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

const beneficios = [
  {
    titulo: "Qualidade comprovada",
    descricao:
      "Produtos avaliados e aprovados por uma instituição reconhecida nacionalmente.",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-10.svg",
  },
  {
    titulo: "Rastreabilidade e controle",
    descricao:
      "Garantia de origem controlada e atendimento aos requisitos técnicos especificados.",
    icone: iconeRastreabilidade,
  },
  {
    titulo: "Maior confiabilidade operacional",
    descricao:
      "Redução de riscos em aplicações críticas, aumentando a segurança dos processos de soldagem.",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-11.svg",
  },
  {
    titulo: "Diferencial competitivo",
    descricao:
      "Agrega valor à solução oferecida e fortalece a confiança do cliente na marca.",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-13.svg",
  },
  {
    titulo: "Atendimento às exigências do mercado",
    descricao:
      "Facilita homologações e participação em projetos e contratos que exigem consumíveis certificados.",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-14.svg",
    /* No desenho este card ocupa a largura inteira, abaixo dos outros quatro. */
    largo: true,
  },
];

export const BeneficiosSection = (): React.JSX.Element => {
  return (
    <Conteudo as="section" aria-labelledby="beneficios-titulo">
      <BlocoRecolhivel
        id="beneficios-titulo"
        titulo="Benefícios para destacar ao comunicar essa novidade aos clientes"
      >
        <Grade>
          {beneficios.map((beneficio) => (
            <Card key={beneficio.titulo} $largo={beneficio.largo}>
              <CardIcone alt="" aria-hidden="true" src={beneficio.icone} />
              <CardTexto>
                <CardTitulo>{beneficio.titulo}</CardTitulo>
                <CardDescricao>{beneficio.descricao}</CardDescricao>
              </CardTexto>
            </Card>
          ))}
        </Grade>
      </BlocoRecolhivel>
    </Conteudo>
  );
};
