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

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Imagem = styled.img`
  border-radius: 12px;
  flex: 1 1 0;
  height: auto;
  /* Sobe em relação ao título, como no layout. */
  margin-top: -10%;
  min-width: 0;
  object-fit: cover;
  width: 100%;

  /* Empilhado no mobile a imagem vem antes do texto: subir aqui a jogaria
     para cima da seção anterior. */
  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

const Cards = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.article`
  align-items: center;
  background-color: #ffffff;
  border-radius: 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  min-height: 221px;
  padding: 35px 32px 37px;
`;

const CardIcone = styled.img`
  height: 56px;
  width: auto;
`;

const CardTitulo = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-align: center;
`;

const cards = [
  {
    icone: "https://c.animaapp.com/GpZzux2v/img/frame.svg",
    titulo: "DURABILIDADE QUE REDUZ DESPERDÍCIO",
  },
  {
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69996.svg",
    titulo: "SOLUÇÕES QUE ECONOMIZAM ÁGUA E ENERGIA",
  },
  {
    icone: "https://c.animaapp.com/GpZzux2v/img/frame-69998.svg",
    titulo: "PRODUTOS DESENVOLVIDOS COM RESPONSABILIDADE AMBIENTAL",
  },
];

export const SustentabilidadeSection = (): React.JSX.Element => {
  return (
    <FaixaCinza as="section" aria-labelledby="sustentabilidade-titulo">
      <Interno>
        <DuasColunas $textoPrimeiro>
          <Imagem
            alt="Mãos segurando uma muda de planta"
            src="https://c.animaapp.com/GpZzux2v/img/mask-group.png"
          />
          <ColunaTexto>
            <Titulo id="sustentabilidade-titulo">Sustentabilidade</Titulo>
            <Paragrafo style={{ fontSize: 20 }}>
              Ferramentas feitas para durar e para respeitar o planeta.
              <br />
              Produtos resistentes e duráveis geram menos desperdício e menos
              reposição — bom para o seu bolso e para o meio ambiente.
              Investimos em soluções que economizam água e energia, unindo alta
              performance a menor impacto.
            </Paragrafo>
          </ColunaTexto>
        </DuasColunas>

        <Cards>
          {cards.map((card) => (
            <Card key={card.titulo}>
              <CardIcone alt="" aria-hidden="true" src={card.icone} />
              <CardTitulo>{card.titulo}</CardTitulo>
            </Card>
          ))}
        </Cards>
      </Interno>
    </FaixaCinza>
  );
};
