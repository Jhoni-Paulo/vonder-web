import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import telaCheia from "../../../assets/catalogo/full-screen.png";
import setaEsquerda from "../../../assets/catalogo/vector-1.svg";
import setaDireita from "../../../assets/catalogo/vector-3.svg";
import chevronBaixo from "../../../assets/catalogo/vector-2.svg";
import iconeGrade from "../../../assets/catalogo/frame-1171275359.svg";
import iconeMiniaturas from "../../../assets/catalogo/frame-1171275376.svg";
import type { FlipbookRef } from "../../../components/Flipbook/Flipbook";
import { catalogos } from "../catalogos";

/* O folheador carrega o pdf.js, que é pesado e só interessa a esta página:
   fica num pedaço separado, baixado quando a seção aparece. */
const Flipbook = lazy(() =>
  import("../../../components/Flipbook/Flipbook").then((modulo) => ({
    default: modulo.Flipbook,
  })),
);
import { Conteudo } from "../styles";

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/* Tela cheia simulada: usada quando o navegador não atende o pedido real. */
const expandido = css`
  background-color: #ffffff;
  inset: 0;
  justify-content: center;
  overflow: auto;
  padding: 24px;
  position: fixed;
  z-index: 1000;
`;

/* Livro e barra juntos: é esta moldura que vai para a tela cheia, para os
   controles continuarem à mão. */
const Moldura = styled.div<{ $expandida: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;

  &:fullscreen {
    background-color: #ffffff;
    justify-content: center;
    padding: 24px;
  }

  ${({ $expandida }) => $expandida && expandido}
`;

/* Guarda o espaço do livro. */
const AreaLivro = styled.div<{ $expandida: boolean }>`
  align-items: center;
  background-color: #ffffff;
  border-radius: ${({ $expandida }) => ($expandida ? "0" : "10px")};
  display: flex;
  justify-content: center;
  min-height: ${({ $expandida }) => ($expandida ? "0" : "420px")};
  overflow: hidden;
  width: 100%;

  @media (max-width: 900px) {
    min-height: ${({ $expandida }) => ($expandida ? "0" : "300px")};
  }
`;

const Carregando = styled.p`
  color: #555a57;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  padding: 80px 0;
  text-align: center;
`;

/* Barra de controles do folheador, centralizada abaixo da capa. No celular
   vira uma grade de três linhas — select, navegação de página e o resto —
   em vez de quebrar os botões em qualquer ponto. */
const Barra = styled.div<{ $ampliado: boolean }>`
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 100%;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    width: 100%;

    /* Com o botão de reduzir em cena sobra um lugar na grade, e a tela cheia
       cairia sozinha e torta na última linha. */
    ${({ $ampliado }) =>
      $ampliado &&
      css`
        > :last-child {
          grid-column: 1 / -1;
          justify-self: center;
        }
      `}
  }
`;

const Botao = styled.button<{ $ordemMobile?: number }>`
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

  &:hover:not(:disabled) {
    background-color: #e6e6e6;
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }

  @media (max-width: 600px) {
    order: ${({ $ordemMobile }) => $ordemMobile ?? 0};
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
    grid-column: 1 / -1;
    order: 0;
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
  gap: 2px;
  height: 49px;
  justify-content: center;
  padding: 0 14px;

  @media (max-width: 600px) {
    grid-column: span 2;
    order: 2;
  }
`;

const EntradaPagina = styled.input`
  background: none;
  border: none;
  color: #3e3e3e;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  padding: 0;
  text-align: right;
  width: 52px;

  &:focus {
    outline: 2px solid #f6be00;
    outline-offset: 2px;
  }

  /* Esconde as setinhas nativas: a navegação fica nos botões da barra. */
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const TotalPaginas = styled.span`
  color: #777777;
`;

/** Lupa desenhada em SVG — o layout traz o ícone como componente. */
const Lupa = (): React.JSX.Element => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="#3E3E3E" strokeWidth="2" />
    <path d="M16.5 16.5 21 21" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 8v6M8 11h6" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Mesma lupa, com o traço de menos. */
const LupaMenos = (): React.JSX.Element => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="#3E3E3E" strokeWidth="2" />
    <path d="M16.5 16.5 21 21" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 11h6" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Passo e teto do zoom. */
const PASSO_ZOOM = 0.5;
const ZOOM_MAXIMO = 2;

export const VisualizadorSection = (): React.JSX.Element => {
  const livroRef = useRef<FlipbookRef>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const seletorRef = useRef<HTMLDivElement>(null);

  const [indiceCatalogo, setIndiceCatalogo] = useState(0);
  const [aberto, setAberto] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [zoom, setZoom] = useState(1);
  /* O input de página só vira número quando o usuário confirma, para dar
     espaço de digitar "34" sem pular para a página 3. */
  const [paginaDigitada, setPaginaDigitada] = useState<string | null>(null);
  /* Tela cheia simulada, usada quando a API do navegador não atende. */
  const [expandida, setExpandida] = useState(false);

  const catalogo = catalogos[indiceCatalogo];

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

  useEffect(() => {
    if (!expandida) return;

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setExpandida(false);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [expandida]);

  /** Troca o catálogo e recomeça na primeira página. */
  const escolherCatalogo = (indice: number) => {
    const total = catalogos.length;
    setIndiceCatalogo(((indice % total) + total) % total);
    setPagina(1);
    setTotalPaginas(0);
    setAberto(false);
  };

  const confirmarPagina = () => {
    if (paginaDigitada === null) return;
    const alvo = Number(paginaDigitada);
    setPaginaDigitada(null);
    if (!Number.isFinite(alvo) || alvo < 1) return;
    livroRef.current?.irParaPagina(Math.min(alvo, totalPaginas || alvo));
  };

  const alternarTelaCheia = () => {
    const area = areaRef.current;
    if (!area) return;

    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    if (expandida) {
      setExpandida(false);
      return;
    }

    /* Alguns navegadores embutidos recusam a API de tela cheia — uns rejeitam
       a promessa, outros a cumprem sem sair do lugar. Pouco depois do pedido,
       se nada aconteceu, o livro é expandido por CSS. */
    area.requestFullscreen?.().catch(() => undefined);
    window.setTimeout(() => {
      if (!document.fullscreenElement) setExpandida(true);
    }, 200);
  };

  const mudarZoom = (passo: number) =>
    setZoom((atual) => {
      const alvo = Number((atual + passo).toFixed(1));
      return Math.min(Math.max(alvo, 1), ZOOM_MAXIMO);
    });

  /* Com um catálogo só, as setas duplas não têm para onde ir. */
  const temVariosCatalogos = catalogos.length > 1;

  return (
    <Interno as="section" aria-label="Visualizador do catálogo">
      <Moldura ref={areaRef} $expandida={expandida}>
        <AreaLivro $expandida={expandida}>
          <Suspense fallback={<Carregando>Carregando o catálogo...</Carregando>}>
            <Flipbook
              ref={livroRef}
              url={catalogo.url}
              zoom={zoom}
              onPaginaChange={setPagina}
              onTotalPaginas={setTotalPaginas}
            />
          </Suspense>
        </AreaLivro>

        <Barra $ampliado={zoom > 1}>
          <Botao
            type="button"
            aria-label="Ampliar"
            $ordemMobile={4}
            disabled={zoom >= ZOOM_MAXIMO}
            onClick={() => mudarZoom(PASSO_ZOOM)}
          >
            <Lupa />
          </Botao>

          {/* Só aparece ampliado: sem zoom não há o que reduzir. */}
          {zoom > 1 && (
            <Botao
              type="button"
              aria-label="Reduzir"
              $ordemMobile={5}
              onClick={() => mudarZoom(-PASSO_ZOOM)}
            >
              <LupaMenos />
            </Botao>
          )}

          <Botao
            type="button"
            aria-label="Catálogo anterior"
            $ordemMobile={6}
            disabled={!temVariosCatalogos}
            onClick={() => escolherCatalogo(indiceCatalogo - 1)}
          >
            <IconeBotao alt="" aria-hidden="true" src={iconeGrade} $altura={24} />
          </Botao>

          <Botao
            type="button"
            aria-label="Página anterior"
            $ordemMobile={1}
            onClick={() => livroRef.current?.paginaAnterior()}
          >
            <IconeBotao alt="" aria-hidden="true" src={setaEsquerda} $altura={19} />
          </Botao>

          <SeletorWrap ref={seletorRef}>
            <Seletor
              type="button"
              aria-expanded={aberto}
              aria-haspopup="listbox"
              onClick={() => setAberto((atual) => !atual)}
            >
              {catalogo.nome}
              <IconeBotao
                $aberto={aberto}
                alt=""
                aria-hidden="true"
                src={chevronBaixo}
                $altura={8}
              />
            </Seletor>

            {aberto && (
              <Painel role="listbox" aria-label="Catálogos disponíveis">
                {catalogos.map((item, indice) => (
                  <Opcao
                    key={item.url}
                    type="button"
                    role="option"
                    aria-selected={indice === indiceCatalogo}
                    onClick={() => escolherCatalogo(indice)}
                  >
                    {item.nome}
                  </Opcao>
                ))}
              </Painel>
            )}
          </SeletorWrap>

          <Contador>
            <EntradaPagina
              type="number"
              min={1}
              max={totalPaginas || undefined}
              value={paginaDigitada ?? pagina}
              aria-label="Ir para a página"
              onChange={(evento) => setPaginaDigitada(evento.target.value)}
              onBlur={confirmarPagina}
              onKeyDown={(evento) => {
                if (evento.key === "Enter") {
                  evento.currentTarget.blur();
                }
              }}
            />
            <TotalPaginas>/{totalPaginas || "—"}</TotalPaginas>
          </Contador>

          <Botao
            type="button"
            aria-label="Próxima página"
            $ordemMobile={3}
            onClick={() => livroRef.current?.proximaPagina()}
          >
            <IconeBotao alt="" aria-hidden="true" src={setaDireita} $altura={19} />
          </Botao>

          <Botao
            type="button"
            aria-label="Próximo catálogo"
            $ordemMobile={7}
            disabled={!temVariosCatalogos}
            onClick={() => escolherCatalogo(indiceCatalogo + 1)}
          >
            <IconeBotao alt="" aria-hidden="true" src={iconeMiniaturas} $altura={24} />
          </Botao>

          <Botao
            type="button"
            aria-label="Tela cheia"
            $ordemMobile={8}
            onClick={alternarTelaCheia}
          >
            <IconeBotao alt="" aria-hidden="true" src={telaCheia} $altura={24} />
          </Botao>
        </Barra>
      </Moldura>
    </Interno>
  );
};
