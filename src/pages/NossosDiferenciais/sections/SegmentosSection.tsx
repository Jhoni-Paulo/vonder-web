import React from "react";
import styled from "styled-components";
import { Conteudo } from "../styles";
import { BlocoRecolhivel } from "./BlocoRecolhivel";

const Grade = styled.div`
  display: grid;
  gap: 20px 58px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.article`
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 20px #00000026;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  min-height: 110px;
  padding: 24px 28px;
  width: 100%;
`;

const CardIcone = styled.img`
  flex-shrink: 0;
  height: 51px;
  width: auto;
`;

const CardTitulo = styled.h3`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.15;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 19px;
  }
`;

const segmentos = [
  { titulo: "Óleo e Gás", icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409.svg" },
  {
    titulo: "Petroquímica e Química",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-5.svg",
  },
  {
    titulo: "Geração de Energia",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-1.svg",
  },
  {
    titulo: "Papel e Celulose",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-6.svg",
  },
  {
    titulo: "Siderurgia e Metalurgia",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-2.svg",
  },
  {
    titulo: "Construção Industrial e\nMontagens Eletromecânicas",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-7.svg",
  },
  { titulo: "Mineração", icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-3.svg" },
  {
    titulo: "Fabricação de Vasos de\nPressão, Caldeiras e Tubulações",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-8.svg",
  },
  {
    titulo: "Naval e Offshore",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-4.svg",
  },
  {
    titulo: "Fabricantes de Equipamentos\npara Processos Críticos",
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69409-9.svg",
  },
];

export const SegmentosSection = (): React.JSX.Element => {
  return (
    <Conteudo as="section" aria-labelledby="segmentos-titulo">
      <BlocoRecolhivel
        id="segmentos-titulo"
        titulo="Principais segmentos que demandam consumíveis certificados"
      >
        {/* A grade preenche por linha, então a ordem da lista alterna entre as
            duas colunas do desenho. */}
        <Grade>
          {segmentos.map((segmento) => (
            <Card key={segmento.titulo}>
              <CardIcone alt="" aria-hidden="true" src={segmento.icone} />
              <CardTitulo>
                {segmento.titulo.split("\n").map((linha, i) => (
                  <React.Fragment key={linha}>
                    {i > 0 && <br />}
                    {linha}
                  </React.Fragment>
                ))}
              </CardTitulo>
            </Card>
          ))}
        </Grade>
      </BlocoRecolhivel>
    </Conteudo>
  );
};
