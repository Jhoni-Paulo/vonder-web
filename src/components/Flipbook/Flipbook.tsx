import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import { PageFlip } from "page-flip";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

/* O worker do pdf.js roda em thread separada; o Vite resolve a URL do arquivo
   publicado no build. */
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

/** Páginas desenhadas à frente e atrás da atual. */
const MARGEM_RENDERIZACAO = 2;

/** Fora desta janela os canvas são descartados: o catálogo tem perto de mil
    páginas e guardar todas estoura a memória do navegador. */
const MARGEM_MEMORIA = 6;

/** Supersampling do canvas, para a página não borrar com o zoom. */
const FATOR_NITIDEZ = Math.min(Math.max(window.devicePixelRatio, 1.5), 2);

/** Teto do fator de desenho: ampliado, a página é redesenhada mais detalhada,
    mas sem estourar a memória do navegador. */
const NITIDEZ_MAXIMA = 2.5;

/* Espaço em volta do livro — sem fundo próprio: quem aparece atrás é a
   página. A aparência de livro vem da capa, não daqui. */
const Area = styled.div<{ $ampliado: boolean; $arrastando: boolean }>`
  background-color: transparent;
  /* Ampliado, o livro não cabe: a área vira uma janela de altura fixa por
     onde se navega arrastando. */
  cursor: ${({ $ampliado, $arrastando }) =>
    $ampliado ? ($arrastando ? "grabbing" : "grab") : "default"};
  max-height: ${({ $ampliado }) => ($ampliado ? "78vh" : "none")};
  overflow: auto;
  padding: 34px 28px 40px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    max-height: ${({ $ampliado }) => ($ampliado ? "70vh" : "none")};
    padding: 18px 12px 22px;
  }
`;

/*
 * Moldura de livro. Cada folha ganha sombra de lombada e corte de papel por
 * uma camada acima do canvas — sombra `inset` ficaria atrás dele. Como o
 * efeito mora na própria folha, ele acompanha a virada da página.
 *
 * Com `showCover`, a capa (índice 0) fica sozinha à direita e daí em diante os
 * índices pares caem à direita e os ímpares à esquerda.
 */
const Palco = styled.div<{ $zoom: number }>`
  margin: 0 auto;
  /* O zoom aumenta a largura em vez de usar transform: assim a área rolável
     acompanha o livro e nada fica cortado. */
  width: ${({ $zoom }) => $zoom * 100}%;

  [data-pagina] {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  }

  [data-pagina]::after {
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  [data-lado="direita"] {
    border-radius: 2px 6px 6px 2px;
  }

  [data-lado="esquerda"] {
    border-radius: 6px 2px 2px 6px;
  }

  /* Escuro junto à lombada; fio claro no corte, como a espessura das folhas. */
  [data-lado="direita"]::after {
    background:
      linear-gradient(to right, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0) 28px),
      linear-gradient(to left, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0) 4px);
  }

  [data-lado="esquerda"]::after {
    background:
      linear-gradient(to left, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0) 28px),
      linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0) 4px);
  }
`;

/*
 * Capa dura. Ela é maior que as páginas — a sobra em volta é a "praça" da
 * capa, o que dá a impressão de o conteúdo estar dentro de um livro. O vinco
 * central fica atrás do miolo, aparecendo só nessa sobra.
 */
const Capa = styled.div<{ $ampliado: boolean }>`
  /* Ampliado, o arrasto é para mover o livro: se a capa continuasse ouvindo o
     mouse, o page-flip entenderia cada arrasto como uma virada de página. */
  pointer-events: ${({ $ampliado }) => ($ampliado ? "none" : "auto")};
  background:
    linear-gradient(160deg, #4a4a4a 0%, #2b2b2b 45%, #1c1c1c 100%);
  border-radius: 6px 12px 12px 6px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  padding: 16px 18px 18px;
  position: relative;

  /* Vinco da lombada, no centro da capa. */
  &::before {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.16) 0 1px,
      rgba(0, 0, 0, 0.55) 1px,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.55) calc(100% - 1px),
      rgba(255, 255, 255, 0.16) calc(100% - 1px)
    );
    content: "";
    inset: 4px auto 4px calc(50% - 14px);
    position: absolute;
    width: 28px;
  }

  @media (max-width: 600px) {
    border-radius: 4px 8px 8px 4px;
    padding: 9px 10px 11px;
  }
`;

/*
 * Miolo: o bloco de papel. A faixa em volta das páginas imita a espessura das
 * folhas empilhadas, com fios claros e escuros alternados.
 */
const Miolo = styled.div`
  --corte: repeating-linear-gradient(
    90deg,
    #ffffff 0 1px,
    #d2d2d2 1px 2px,
    #f4f4f4 2px 3px
  );

  /* As listras ficam só nas bordas — é ali que a pilha de folhas aparece. O
     miolo atrás das páginas fica liso. */
  background:
    var(--corte) left / 11px 100% no-repeat,
    var(--corte) right / 11px 100% no-repeat,
    var(--corte) top / 100% 6px no-repeat,
    var(--corte) bottom / 100% 6px no-repeat,
    #f1f1f1;
  border-radius: 2px 4px 4px 2px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.28),
    0 2px 6px rgba(0, 0, 0, 0.35);
  padding: 6px 11px;
  position: relative;

  @media (max-width: 600px) {
    background:
      var(--corte) left / 6px 100% no-repeat,
      var(--corte) right / 6px 100% no-repeat,
      var(--corte) top / 100% 4px no-repeat,
      var(--corte) bottom / 100% 4px no-repeat,
      #f1f1f1;
    padding: 4px 6px;
  }
`;

const Aviso = styled.p`
  color: #555a57;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  padding: 80px 0;
  position: absolute;
  text-align: center;
  width: 100%;
`;

/* A folha nasce só com o essencial; a aparência vem do CSS da moldura. */
const ESTILO_FOLHA = "background-color: #ffffff; overflow: hidden;";

export interface FlipbookRef {
  proximaPagina: () => void;
  paginaAnterior: () => void;
  irParaPagina: (pagina: number) => void;
}

interface FlipbookProps {
  /** URL do PDF. Trocar a URL recarrega o livro. */
  url: string;
  /** Multiplicador visual aplicado ao livro inteiro. */
  zoom?: number;
  /** Página atual (1-based) e total, para os controles externos. */
  onPaginaChange?: (pagina: number) => void;
  onTotalPaginas?: (total: number) => void;
  ref?: React.Ref<FlipbookRef>;
}

/** Funções da execução corrente do efeito, usadas pelo handle imperativo. */
interface Controles {
  livro: PageFlip;
  renderizarVizinhas: (indice: number) => void;
  /** Redimensiona o livro e redesenha as páginas no novo tamanho. */
  ajustarZoom: (zoom: number) => void;
}

export const Flipbook = ({
  url,
  zoom = 1,
  onPaginaChange,
  onTotalPaginas,
  ref,
}: FlipbookProps): React.JSX.Element => {
  const palcoRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  /* Posição de onde o arrasto começou, junto da rolagem daquele momento. */
  const arrasteRef = useRef<{
    x: number;
    y: number;
    esquerda: number;
    topo: number;
  } | null>(null);
  const [arrastando, setArrastando] = useState(false);
  const ampliado = zoom > 1;
  /* Lido pelo efeito de carregamento, que não depende de `zoom`. */
  const zoomRef = useRef(zoom);
  const controlesRef = useRef<Controles | null>(null);
  /* Guarda a URL já resolvida: enquanto não bate com a atual, está carregando.
     Evita escrever estado de forma síncrona dentro do efeito. */
  const [resolvido, setResolvido] = useState<{ url: string; erro: boolean } | null>(null);
  const estado = resolvido?.url === url ? (resolvido.erro ? "erro" : "pronto") : "carregando";

  /* Callbacks em ref: trocá-los não deve recarregar o PDF. A escrita fica
     num efeito, porque ref não se atualiza durante o render. */
  const aoMudarPagina = useRef(onPaginaChange);
  const aoSaberTotal = useRef(onTotalPaginas);

  useEffect(() => {
    aoMudarPagina.current = onPaginaChange;
    aoSaberTotal.current = onTotalPaginas;
    zoomRef.current = zoom;
  }, [onPaginaChange, onTotalPaginas, zoom]);

  /*
   * O page-flip calcula o tamanho das páginas em pixels e só refaz a conta
   * quando é avisado. Sem isto, ampliar esticava a moldura e deixava o PDF do
   * mesmo tamanho.
   */
  useEffect(() => {
    controlesRef.current?.ajustarZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    const palco = palcoRef.current;
    if (!palco) return;

    /* Tudo que depende desta execução vive aqui dentro. Em desenvolvimento o
       StrictMode monta o efeito duas vezes: sem esse isolamento, a execução
       cancelada contaminava o controle de páginas já desenhadas da segunda. */
    let cancelado = false;
    let zoomDaVez = zoomRef.current;
    let indiceAtual = 0;
    const desenhadas = new Set<number>();
    let pdf: PDFDocumentProxy | null = null;

    /* Contêiner exclusivo desta execução: as folhas de uma montagem nunca se
       misturam com as de outra, mesmo com o efeito rodando duas vezes. */
    const palcoDaVez = document.createElement("div");
    palcoDaVez.style.width = "100%";
    palco.appendChild(palcoDaVez);

    const folhaDe = (indice: number) =>
      palcoDaVez.querySelector<HTMLElement>(`[data-pagina="${indice}"]`);

    const renderizarPagina = async (indice: number) => {
      if (cancelado || !pdf) return;
      if (indice < 0 || indice >= pdf.numPages || desenhadas.has(indice)) return;
      desenhadas.add(indice);

      const folha = folhaDe(indice);
      if (!folha) {
        desenhadas.delete(indice);
        return;
      }

      try {
        const pagina = await pdf.getPage(indice + 1);
        if (cancelado) return;

        /* A folha fora de tela mede 0, então a largura de referência vem do
           dataset gravado na montagem. */
        const largura = Number(folha.dataset.largura) || folha.clientWidth || 600;
        const escala = largura / pagina.getViewport({ scale: 1 }).width;
        const nitidez = Math.min(FATOR_NITIDEZ * zoomDaVez, NITIDEZ_MAXIMA);
        const viewport = pagina.getViewport({ scale: Math.max(escala, 0.1) * nitidez });

        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";

        /* No pdf.js 6 passa-se o canvas, e não o contexto: mandando os dois, a
           promessa do render nunca se resolve. O desenho roda dentro de
           requestAnimationFrame, então só avança com a aba em primeiro plano. */
        await pagina.render({ canvas, viewport }).promise;
        if (cancelado) return;
        folha.replaceChildren(canvas);
      } catch (causa) {
        desenhadas.delete(indice);
        if (!cancelado) {
          console.warn(`[Flipbook] falha ao desenhar a página ${indice + 1}:`, causa);
        }
      }
    };

    /** Libera os canvas distantes da página atual. */
    const descartarDistantes = (indice: number) => {
      for (const desenhada of desenhadas) {
        if (Math.abs(desenhada - indice) <= MARGEM_MEMORIA) continue;
        folhaDe(desenhada)?.replaceChildren();
        desenhadas.delete(desenhada);
      }
    };

    const renderizarVizinhas = (indice: number) => {
      for (let i = indice - MARGEM_RENDERIZACAO; i <= indice + MARGEM_RENDERIZACAO + 1; i += 1) {
        void renderizarPagina(i);
      }
      descartarDistantes(indice);
    };

    let livroDaVez: PageFlip | null = null;
    /* Só os trechos necessários são baixados: sem isso o pdf.js puxa o arquivo
       inteiro em paralelo, e o catálogo tem centenas de megabytes. O pedaço
       padrão (64 KB) rende centenas de requisições por página; 1 MB reduz o
       vaivém sem desperdiçar banda. */
    const tarefa = pdfjs.getDocument({
      url,
      disableAutoFetch: true,
      disableStream: true,
      rangeChunkSize: 1024 * 1024,
    });

    (async () => {
      try {
        const documento = await tarefa.promise;
        if (cancelado) return;
        pdf = documento;
        aoSaberTotal.current?.(documento.numPages);

        const primeira = await documento.getPage(1);
        if (cancelado) return;
        const viewport = primeira.getViewport({ scale: 1 });
        const proporcao = viewport.height / viewport.width;

        /* Duas páginas lado a lado dentro da largura disponível. */
        const larguraFolha = Math.min(Math.floor((palco.clientWidth || 1000) / 2), 620);
        const alturaFolha = Math.round(larguraFolha * proporcao);

        const folhas: HTMLElement[] = [];
        for (let i = 0; i < documento.numPages; i += 1) {
          const folha = document.createElement("div");
          folha.dataset.pagina = String(i);
          folha.dataset.largura = String(larguraFolha);
          folha.dataset.lado = i % 2 === 0 ? "direita" : "esquerda";
          folha.setAttribute("style", ESTILO_FOLHA);
          folhas.push(folha);
          palcoDaVez.appendChild(folha);
        }

        const livro = new PageFlip(palcoDaVez, {
          width: larguraFolha,
          height: alturaFolha,
          size: "stretch",
          minWidth: 240,
          maxWidth: 1400,
          minHeight: 320,
          maxHeight: 2000,
          drawShadow: true,
          flippingTime: 700,
          maxShadowOpacity: 0.4,
          showCover: true,
          mobileScrollSupport: true,
          useMouseEvents: true,
        });

        livro.loadFromHTML(folhas);
        livro.on("flip", (evento) => {
          indiceAtual = evento.data;
          aoMudarPagina.current?.(evento.data + 1);
          renderizarVizinhas(evento.data);
        });

        /* Redesenha tudo que está em tela: no tamanho novo, o canvas antigo
           ficaria esticado e borrado. */
        const ajustarZoom = (novoZoom: number) => {
          if (cancelado || novoZoom === zoomDaVez) return;
          zoomDaVez = novoZoom;
          livro.update();
          for (const indice of desenhadas) folhaDe(indice)?.replaceChildren();
          desenhadas.clear();
          renderizarVizinhas(indiceAtual);
        };

        livroDaVez = livro;
        controlesRef.current = { livro, renderizarVizinhas, ajustarZoom };
        renderizarVizinhas(0);
        aoMudarPagina.current?.(1);
        setResolvido({ url, erro: false });
      } catch (causa) {
        if (cancelado) return;
        console.warn("[Flipbook] não foi possível abrir o PDF:", causa);
        setResolvido({ url, erro: true });
      }
    })();

    return () => {
      cancelado = true;
      livroDaVez?.destroy();
      if (controlesRef.current?.livro === livroDaVez) controlesRef.current = null;
      palcoDaVez.remove();
      void tarefa.destroy();
    };
  }, [url]);

  /* Arrastar move o livro. Só com o mouse: no toque a rolagem nativa já
     resolve, e capturar o ponteiro atrapalharia o gesto. */
  const aoPegar = (evento: React.PointerEvent<HTMLDivElement>) => {
    const area = areaRef.current;
    if (!area || !ampliado || evento.pointerType !== "mouse" || evento.button !== 0) return;

    arrasteRef.current = {
      x: evento.clientX,
      y: evento.clientY,
      esquerda: area.scrollLeft,
      topo: area.scrollTop,
    };
    setArrastando(true);
    /* Seguir o ponteiro fora da área é um extra: se o navegador recusar a
       captura, o arrasto continua funcionando por dentro. */
    try {
      area.setPointerCapture(evento.pointerId);
    } catch {
      /* sem captura */
    }
  };

  const aoArrastar = (evento: React.PointerEvent<HTMLDivElement>) => {
    const area = areaRef.current;
    const arraste = arrasteRef.current;
    if (!area || !arraste) return;

    area.scrollLeft = arraste.esquerda - (evento.clientX - arraste.x);
    area.scrollTop = arraste.topo - (evento.clientY - arraste.y);
  };

  const aoSoltar = (evento: React.PointerEvent<HTMLDivElement>) => {
    const area = areaRef.current;
    if (!arrasteRef.current) return;

    arrasteRef.current = null;
    setArrastando(false);
    if (area?.hasPointerCapture(evento.pointerId)) area.releasePointerCapture(evento.pointerId);
  };

  useImperativeHandle(
    ref,
    () => ({
      proximaPagina: () => controlesRef.current?.livro.flipNext(),
      paginaAnterior: () => controlesRef.current?.livro.flipPrev(),
      irParaPagina: (pagina: number) => {
        const controles = controlesRef.current;
        if (!controles) return;
        const indice = Math.min(Math.max(pagina - 1, 0), controles.livro.getPageCount() - 1);
        controles.renderizarVizinhas(indice);
        controles.livro.turnToPage(indice);
      },
    }),
    [],
  );

  return (
    <Area
      data-flipbook
      ref={areaRef}
      $ampliado={ampliado}
      $arrastando={arrastando}
      onPointerDown={aoPegar}
      onPointerMove={aoArrastar}
      onPointerUp={aoSoltar}
      onPointerCancel={aoSoltar}
    >
      {estado === "carregando" && <Aviso>Carregando o catálogo...</Aviso>}
      {estado === "erro" && (
        <Aviso>Não foi possível abrir o catálogo. Tente novamente em instantes.</Aviso>
      )}
      <Palco $zoom={zoom}>
        <Capa $ampliado={ampliado}>
          <Miolo ref={palcoRef} />
        </Capa>
      </Palco>
    </Area>
  );
};
