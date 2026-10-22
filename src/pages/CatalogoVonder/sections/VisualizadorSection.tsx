import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import capaCatalogo from "../../../assets/catalogo/cat-logo-flip-novo-site-vonder-1.png";
import telaCheia from "../../../assets/catalogo/full-screen.png";
import setaEsquerda from "../../../assets/catalogo/vector-1.svg";
import setaDireita from "../../../assets/catalogo/vector-3.svg";
import chevronBaixo from "../../../assets/catalogo/vector-2.svg";
import iconeGrade from "../../../assets/catalogo/frame-1171275359.svg";
import iconeMiniaturas from "../../../assets/catalogo/frame-1171275376.svg";
import { encartes } from "../encartes";
import { Conteudo } from "../styles";

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Capa = styled.img`
  aspect-ratio: 1.3;
  border-radius: 10px;
  height: auto;
  object-fit: cover;
  width: 100%;
`;

/* Barra de controles do folheador, centralizada abaixo da capa. */
const Barra = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 100%;
`;

const Botao = styled.button`
  align-items: center;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 52px;
  justify-content: center;
  padding: 0;
  transition: background-color 0.2s ease;
  width: 52px;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const IconeBotao = styled.img<{ $altura?: number; $aberto?: boolean }>`
  height: ${({ $altura = 20 }) => $altura}px;
  transform: rotate(${({ $aberto }) => ($aberto ? "180deg" : "0deg")});
  transition: transform 0.25s ease;
  width: auto;
`;

const SeletorWrap = styled.div`
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

/* Painel do select: mesma caixa cinza do layout, com a lista rolável. */
const Painel = styled.div`
  background-color: #f2f2f2;
  border-radius: 15px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  left: 0;
  max-height: 420px;
  overflow-y: auto;
  padding: 24px 33px;
  position: absolute;
  top: calc(100% + 8px);
  width: 269px;
  z-index: 5;

  /* Barra de rolagem fina, como no desenho. */
  scrollbar-color: #bdbdbd #e8e8e8;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e8e8e8;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Opcao = styled.button`
  background: none;
  border: none;
  color: #3e3e3e;
  cursor: pointer;
  display: block;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.25;
  padding: 7px 0;
  text-align: left;
  width: 100%;

  /* Linha de 2px entre os itens, como no layout. */
  & + & {
    border-top: 2px solid rgba(174, 174, 174, 0.5);
  }

  &:hover,
  &[aria-selected="true"] {
    color: #000000;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

const Seletor = styled.button`
  align-items: center;
  /* O botão mostra a seção em caixa alta, como no layout; a lista fica em
     caixa mista. */
  text-transform: uppercase;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  color: #3e3e3e;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  gap: 10px;
  height: 49px;
  justify-content: space-between;
  padding: 0 16px;
  width: 267px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Contador = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  color: #3e3e3e;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  height: 49px;
  justify-content: center;
  padding: 0 16px;
`;

/** Lupa desenhada em SVG — o layout traz o ícone como componente. */
const Lupa = (): React.JSX.Element => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="#3E3E3E" strokeWidth="2" />
    <path d="M16.5 16.5 21 21" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 8v6M8 11h6" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const VisualizadorSection = (): React.JSX.Element => {
  /* Seção escolhida no select. Começa na mesma do layout. */
  const [secao, setSecao] = useState("Jardinagem e Pulverização");
  const [aberto, setAberto] = useState(false);
  const seletorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;

    const aoClicarFora = (evento: MouseEvent) => {
      if (!seletorRef.current?.contains(evento.target as Node)) setAberto(false);
    };
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAberto(false);
    };

    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  return (
    <Interno as="section" aria-label="Visualizador do catálogo">
      <Capa alt="Catálogo VONDER 2026" src={capaCatalogo} />

      {/* Controles do folheador. O catálogo ainda é uma imagem estática: os
          botões ficam no lugar para quando o visualizador for plugado. */}
      <Barra>
        <Botao type="button" aria-label="Ampliar">
          <Lupa />
        </Botao>
        <Botao type="button" aria-label="Ver em grade">
          <IconeBotao alt="" aria-hidden="true" src={iconeGrade} $altura={24} />
        </Botao>
        <Botao type="button" aria-label="Página anterior">
          <IconeBotao alt="" aria-hidden="true" src={setaEsquerda} $altura={19} />
        </Botao>

        <SeletorWrap ref={seletorRef}>
          <Seletor
            type="button"
            aria-expanded={aberto}
            aria-haspopup="listbox"
            onClick={() => setAberto((atual) => !atual)}
          >
            {secao}
            <IconeBotao
              $aberto={aberto}
              alt=""
              aria-hidden="true"
              src={chevronBaixo}
              $altura={8}
            />
          </Seletor>

          {aberto && (
            <Painel role="listbox" aria-label="Seções do catálogo">
              {encartes.map(({ titulo }) => (
                <Opcao
                  key={titulo}
                  type="button"
                  role="option"
                  aria-selected={titulo === secao}
                  onClick={() => {
                    setSecao(titulo);
                    setAberto(false);
                  }}
                >
                  {titulo.split("\n").map((linha, i) => (
                    <React.Fragment key={linha}>
                      {i > 0 && <br />}
                      {linha}
                    </React.Fragment>
                  ))}
                </Opcao>
              ))}
            </Painel>
          )}
        </SeletorWrap>

        <Contador>348-349 /370</Contador>

        <Botao type="button" aria-label="Próxima página">
          <IconeBotao alt="" aria-hidden="true" src={setaDireita} $altura={19} />
        </Botao>
        <Botao type="button" aria-label="Ver miniaturas">
          <IconeBotao alt="" aria-hidden="true" src={iconeMiniaturas} $altura={24} />
        </Botao>
        <Botao type="button" aria-label="Tela cheia">
          <IconeBotao alt="" aria-hidden="true" src={telaCheia} $altura={24} />
        </Botao>
      </Barra>
    </Interno>
  );
};
