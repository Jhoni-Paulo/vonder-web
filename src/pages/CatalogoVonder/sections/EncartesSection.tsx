import React from "react";
import styled from "styled-components";
import iconeDownload from "../../../assets/catalogo/vector-18.svg";
import {
  encartesDireita,
  encartesEsquerda,
  type Encarte,
} from "../encartes";
import { Conteudo } from "../styles";

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Texto = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.35;
  margin: 0;

  strong {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  .sublinhado {
    text-decoration: underline;
  }

  /* Folga a mais antes da lista de encartes, somada ao espaço da seção. */
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Colunas = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Coluna = styled.div`
  /* Linhas de altura igual: com todos os cards do mesmo tamanho, a imagem
     transborda sempre o mesmo tanto e tem sempre a mesma largura. */
  display: grid;
  grid-auto-rows: 1fr;
  /* A imagem de cada card sobe 25px para fora da caixa cinza: o espaço entre
     eles precisa acomodar esse transbordo. */
  gap: 70px;
  min-width: 0;

  @media (max-width: 600px) {
    gap: 48px;
  }
`;

/* O espaço à direita é reservado no padding: a imagem fica fora do fluxo,
   encostada na base do botão e transbordando o topo. */
const Card = styled.button`
  align-items: center;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  min-height: 86px;
  /* A imagem tem a altura do card + 50px, então quanto mais alto o card,
     mais larga ela fica: 250px acomodam a mais larga sem engordar o card. */
  padding: 14px 250px 14px 20px;
  position: relative;
  text-align: left;
  transition: background-color 0.25s ease, transform 0.25s ease;
  width: 100%;

  &:hover {
    background-color: #ececec;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    min-height: 80px;
    padding: 12px 140px 12px 16px;
  }
`;

const CardTexto = styled.span`
  align-items: center;
  display: flex;
  gap: 10px;
  min-width: 0;
`;

const CardIcone = styled.img`
  flex-shrink: 0;
  height: 22px;
  width: auto;
`;

const CardTitulo = styled.span`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.3;

  strong {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

/**
 * A foto fica sobreposta ao card: base alinhada com a base do botão e topo
 * ultrapassando a borda superior, como no desenho.
 */
const CardImagem = styled.img`
  bottom: 0;
  /* Altura amarrada à do card: o transbordo é sempre o mesmo, mesmo nos
     cards de título longo, que são mais altos. */
  height: calc(100% + 25px);
  object-fit: contain;
  object-position: bottom right;
  position: absolute;
  right: 20px;
  width: auto;

  /* Na tela estreita não cabe tudo: uma imagem alta o bastante para
     transbordar ficaria larga demais e passaria por cima do texto. Aqui ela
     é limitada pela largura — continua encostada na base, sem transbordo. */
  @media (max-width: 600px) {
    height: auto;
    max-height: calc(100% + 30px);
    max-width: 118px;
    right: 12px;
  }
`;

const CardEncarte = ({ titulo, imagem }: Encarte): React.JSX.Element => (
  /* Sem destino definido ainda: o PDF de cada encarte precisa vir do back. */
  <Card type="button">
    <CardTexto>
      <CardIcone alt="" aria-hidden="true" src={iconeDownload} />
      <CardTitulo>
        Encarte de{" "}
        <strong>
          {titulo.split("\n").map((linha, i) => (
            <React.Fragment key={linha}>
              {i > 0 && <br />}
              {linha}
            </React.Fragment>
          ))}
        </strong>
      </CardTitulo>
    </CardTexto>
    <CardImagem alt="" aria-hidden="true" src={imagem} />
  </Card>
);

export const EncartesSection = (): React.JSX.Element => {
  return (
    <Interno as="section" aria-label="Encartes do catálogo">
      <Texto>
        A <strong>VONDER</strong> apresenta seu{" "}
        <strong>novo catálogo de produtos</strong>, que reúne as novidades e
        lançamentos da marca para <strong>2026</strong>.
        <br />
        <br />É um <strong>guia completo</strong>, com imagens de todo o mix e
        as <strong>principais características e atributos técnicos</strong> de
        cada item, facilitando a visualização e abrangência do mix e
        conhecimento sobre os produtos comercializados pela{" "}
        <strong>VONDER</strong>.
        <br />
        <br />
        No botão amarelo no canto superior do Catálogo VONDER acima, você poderá
        fazer o download do catálogo completo.
        <br />
        <br />
        <span className="sublinhado">Clique nos links</span> abaixo para baixar
        os encartes do seu interesse no <strong>Catálogo VONDER 2026</strong>.
      </Texto>

      <Colunas>
        <Coluna>
          {encartesEsquerda.map((encarte) => (
            <CardEncarte key={encarte.titulo} {...encarte} />
          ))}
        </Coluna>
        <Coluna>
          {encartesDireita.map((encarte) => (
            <CardEncarte key={encarte.titulo} {...encarte} />
          ))}
        </Coluna>
      </Colunas>
    </Interno>
  );
};
