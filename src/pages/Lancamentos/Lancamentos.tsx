import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import {
  FiltroArvore,
  type NivelArvore,
} from "../../components/FiltroArvore/FiltroArvore";
import { Lightbox } from "../../components/Lightbox/Lightbox";
import { useLancamentos } from "../../hooks/useLancamentos";
import type { Lancamento } from "../../services/lancamentoService";

/* ══════════════════════════════════════════════
   ESTILOS
══════════════════════════════════════════════ */

const Page = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 96px 80px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 40px 48px 60px; }
  @media (max-width: 600px)  { padding: 32px 20px 48px; gap: 28px; }
`;

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
  min-width: 0;
`;

const Aviso = styled.p`
  color: #555a57;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  padding: 32px 0;
  text-align: center;
  width: 100%;
`;

const Breadcrumb = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  margin: 0;

  span {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

const PageTitle = styled.h1`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: clamp(32px, 5vw, 55px);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
`;

/* ── Controles (sort + paginação) ── */

const Controls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
`;

const SortBtn = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 38px;
  padding: 0 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }
`;

const SortLabel = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;

  em {
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-style: normal;
    font-weight: 300;
  }
`;

const SortIcon = styled.img<{ $aberto?: boolean }>`
  width: 13px;
  transition: transform 0.25s ease;
  transform: rotate(${({ $aberto }) => ($aberto ? "180deg" : "0deg")});
`;

const SortWrapper = styled.div`
  position: relative;
`;

const SortMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 3;
  min-width: 100%;
  padding: 4px 0;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14);
  overflow: hidden;
`;

const SortOption = styled.div<{ $ativa: boolean }>`
  background-color: ${({ $ativa }) => ($ativa ? "#f6be00" : "transparent")};
  color: #3e3e3e;
  cursor: pointer;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: ${({ $ativa }) => ($ativa ? 700 : 400)};
  padding: 8px 20px;
  white-space: nowrap;

  &:hover {
    background-color: ${({ $ativa }) => ($ativa ? "#f6be00" : "#f2f2f2")};
  }
`;

const Pagination = styled.div`
  align-items: center;
  display: flex;
  gap: 11px;
`;

const PageDot = styled.div<{ $active?: boolean }>`
  align-items: center;
  background-color: ${({ $active }) => ($active ? "#000000" : "#f6be00")};
  border-radius: 100px;
  color: ${({ $active }) => ($active ? "#f6be00" : "#3e3e3e")};
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  height: 32px;
  justify-content: center;
  width: 32px;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#000000" : "#e0aa00")};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const NextBtn = styled.img`
  height: 32px;
  width: 32px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateX(3px);
    opacity: 0.8;
  }
`;

/* ── Grid de cards ── */

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  width: 100%;

  @media (max-width: 1280px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 768px)  { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px)  { grid-template-columns: 1fr; }
`;

/* Vira `button` quando o lançamento tem conteúdo para abrir, daí o reset. */
const Card = styled.div`
  appearance: none;
  background: none;
  border: none;
  border-radius: 12px;
  color: inherit;
  font: inherit;
  padding: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardImageWrap = styled.div`
  aspect-ratio: 286 / 550;
  position: relative;
  width: 100%;
  /* Lançamento sem imagem cadastrada ainda precisa de fundo para o texto. */
  background-color: #3e3e3e;

  @media (max-width: 768px) { aspect-ratio: 3 / 4; }
`;

const CardImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  transition: transform 0.4s ease;
`;

/* Gradiente escuro no fundo para o texto ficar legível */
const CardOverlay = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const CardContent = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 0;
  padding: 24px 20px;
  position: absolute;
  right: 0;
`;

const CardTitle = styled.p`
  color: #f6be00;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: clamp(16px, 1.8vw, 22px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDesc = styled.p`
  color: #ffffff;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: clamp(13px, 1.4vw, 18px);
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardLink = styled.span`
  color: #f6be00;
  cursor: pointer;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: clamp(14px, 1.4vw, 18px);
  font-weight: 700;
  text-decoration: none;
  transition: letter-spacing 0.2s ease;

  ${Card}:hover & {
    letter-spacing: 0.5px;
    text-decoration: underline;
  }
`;

/* ══════════════════════════════════════════════
   COMPONENTE
══════════════════════════════════════════════ */

/** Cards por página — a grade tem 3 colunas ao lado da sidebar. */
const POR_PAGINA = 12;

/** Bolhas de paginação exibidas por vez, como no layout. */
const MAX_BOLHAS = 4;

/* A rota de lançamentos não aceita `tipoOrdenacao` nem devolve data, então a
   ordenação é feita no front e só pelo nome. "Mais recente" (do layout) fica
   de fora até o back expor a data do lançamento. */
type OrdemLancamento = "alfAsc" | "alfDesc";

const ORDENACOES: { valor: OrdemLancamento; rotulo: string }[] = [
  { valor: "alfAsc", rotulo: "Nome A-Z" },
  { valor: "alfDesc", rotulo: "Nome Z-A" },
];

const ORDENACAO_PADRAO: OrdemLancamento = "alfAsc";

const rotuloDaOrdem = (valor: OrdemLancamento) =>
  ORDENACOES.find((opcao) => opcao.valor === valor)?.rotulo ?? "";

const ordemDaUrl = (valor: string | null): OrdemLancamento =>
  ORDENACOES.find((opcao) => opcao.valor === valor)?.valor ?? ORDENACAO_PADRAO;

/** Nível da árvore ↔ parâmetro na URL (os mesmos nomes que a API usa). */
const CHAVE_POR_NIVEL: Record<NivelArvore, string> = {
  1: "grupo",
  2: "subgrupo",
  3: "categoria",
};

interface ControlesProps {
  iconeSeta: string;
  ordem: OrdemLancamento;
  onOrdenar: (valor: OrdemLancamento) => void;
  paginas: number[];
  paginaAtual: number;
  temProxima: boolean;
  onPagina: (indice: number) => void;
}

/** Linha de "Ordenar por" + paginação, repetida acima e abaixo da grade. */
const ControlesLancamentos = ({
  iconeSeta,
  ordem,
  onOrdenar,
  paginas,
  paginaAtual,
  temProxima,
  onPagina,
}: ControlesProps): React.JSX.Element => {
  const [menuAberto, setMenuAberto] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuAberto) return;

    const aoClicarFora = (evento: MouseEvent) => {
      if (!wrapperRef.current?.contains(evento.target as Node)) setMenuAberto(false);
    };
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAberto(false);
    };

    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [menuAberto]);

  return (
    <Controls>
      <SortWrapper ref={wrapperRef}>
        <SortBtn
          role="button"
          tabIndex={0}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <SortLabel>
            Ordenar por:&nbsp;&nbsp;<em>{rotuloDaOrdem(ordem)}</em>
          </SortLabel>
          <SortIcon
            $aberto={menuAberto}
            alt=""
            src="https://c.animaapp.com/wSrmTlud/img/modo-de-isolamento.svg"
          />
        </SortBtn>

        {menuAberto && (
          <SortMenu role="listbox">
            {ORDENACOES.map((opcao) => (
              <SortOption
                key={opcao.valor}
                role="option"
                aria-selected={opcao.valor === ordem}
                $ativa={opcao.valor === ordem}
                onClick={() => {
                  setMenuAberto(false);
                  onOrdenar(opcao.valor);
                }}
              >
                {opcao.rotulo}
              </SortOption>
            ))}
          </SortMenu>
        )}
      </SortWrapper>

      <Pagination>
        {paginas.map((indice) => (
          <PageDot
            key={indice}
            $active={indice === paginaAtual}
            onClick={() => onPagina(indice)}
          >
            {indice + 1}
          </PageDot>
        ))}
        {temProxima && (
          <NextBtn alt="Próxima página" src={iconeSeta} onClick={() => onPagina(paginaAtual + 1)} />
        )}
      </Pagination>
    </Controls>
  );
};

export const Lancamentos = (): React.JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const idDaUrl = (chave: string) => Number(searchParams.get(chave)) || undefined;
  const grupo = idDaUrl("grupo");
  const subgrupo = idDaUrl("subgrupo");
  const categoria = idDaUrl("categoria");
  const paginaUrl = Math.max(1, Number(searchParams.get("pagina")) || 1);
  const ordem = ordemDaUrl(searchParams.get("ordenacao"));

  const { dados, carregando, erro } = useLancamentos({ grupo, subgrupo, categoria });

  /* Conteúdo aberto na lightbox; `null` com ela fechada. */
  const [emDestaque, setEmDestaque] = useState<Lancamento | null>(null);

  /* Cada nó traz o `idNivelPai`, então a cascata é montada aqui mesmo: só
     aparecem os filhos do nível selecionado acima. */
  const subgrupos = useMemo(
    () => dados.subgrupos.filter((item) => !item.idPai || item.idPai === grupo),
    [dados.subgrupos, grupo],
  );
  const categorias = useMemo(
    () => dados.categorias.filter((item) => !item.idPai || item.idPai === subgrupo),
    [dados.categorias, subgrupo],
  );

  /* Ordenação no front: a rota devolve a lista inteira de uma vez. */
  const ordenados = useMemo(() => {
    const lista = [...dados.lancamentos].sort((a, b) =>
      a.titulo.localeCompare(b.titulo, "pt-BR"),
    );
    return ordem === "alfDesc" ? lista.reverse() : lista;
  }, [dados.lancamentos, ordem]);

  /* Paginação também no front, pelo mesmo motivo. */
  const totalPaginas = Math.ceil(ordenados.length / POR_PAGINA);
  const paginaAtual = Math.min(paginaUrl - 1, Math.max(0, totalPaginas - 1));
  const visiveis = ordenados.slice(paginaAtual * POR_PAGINA, (paginaAtual + 1) * POR_PAGINA);

  const paginas = useMemo(() => {
    if (totalPaginas <= 1) return [];
    const inicio = Math.min(
      Math.max(0, paginaAtual - 1),
      Math.max(0, totalPaginas - MAX_BOLHAS),
    );
    return Array.from({ length: Math.min(MAX_BOLHAS, totalPaginas) }, (_, i) => inicio + i);
  }, [paginaAtual, totalPaginas]);

  const irParaPagina = (indice: number) => {
    const proxima = new URLSearchParams(searchParams);
    if (indice <= 0) proxima.delete("pagina");
    else proxima.set("pagina", String(indice + 1));
    setSearchParams(proxima);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Trocar (ou limpar) um nível invalida os níveis abaixo dele. */
  const selecionarNivel = (nivel: NivelArvore, id: number) => {
    const proxima = new URLSearchParams(searchParams);
    const chave = CHAVE_POR_NIVEL[nivel];
    const jaSelecionado = proxima.get(chave) === String(id);

    ([1, 2, 3] as NivelArvore[])
      .filter((outro) => outro >= nivel)
      .forEach((outro) => proxima.delete(CHAVE_POR_NIVEL[outro]));

    if (!jaSelecionado) proxima.set(chave, String(id));
    proxima.delete("pagina");
    setSearchParams(proxima);
  };

  const ordenar = (valor: OrdemLancamento) => {
    const proxima = new URLSearchParams(searchParams);
    if (valor === ORDENACAO_PADRAO) proxima.delete("ordenacao");
    else proxima.set("ordenacao", valor);
    proxima.delete("pagina");
    setSearchParams(proxima);
  };

  const controles = (iconeSeta: string) => (
    <ControlesLancamentos
      iconeSeta={iconeSeta}
      ordem={ordem}
      onOrdenar={ordenar}
      paginas={paginas}
      paginaAtual={paginaAtual}
      temProxima={paginaAtual + 1 < totalPaginas}
      onPagina={irParaPagina}
    />
  );

  return (
    <Page>
      <Breadcrumb>
        Página inicial &gt; <span>Lançamentos</span>
      </Breadcrumb>

      <PageTitle>LANÇAMENTOS</PageTitle>

      <Body>
        <FiltroArvore
          resultado={
            carregando
              ? "Resultados: ..."
              : `Resultados: ${visiveis.length} de ${ordenados.length}`
          }
          grupos={dados.grupos}
          subgrupos={subgrupos}
          categorias={categorias}
          grupoId={grupo}
          subgrupoId={subgrupo}
          categoriaId={categoria}
          onSelecionar={selecionarNivel}
        />

        <Main>
          {visiveis.length > 0 &&
            controles("https://c.animaapp.com/wSrmTlud/img/frame-389.svg")}

          {carregando && <Aviso>Carregando lançamentos...</Aviso>}

          {!carregando && erro && (
            <Aviso>Não foi possível carregar os lançamentos. Tente novamente em instantes.</Aviso>
          )}

          {!carregando && !erro && ordenados.length === 0 && (
            <Aviso>Nenhum lançamento encontrado para este filtro.</Aviso>
          )}

          {visiveis.length > 0 && (
            <CardGrid>
              {visiveis.map((lancamento) => (
                <Card
                  key={lancamento.idProduto}
                  as={lancamento.url ? "button" : "div"}
                  type={lancamento.url ? "button" : undefined}
                  onClick={lancamento.url ? () => setEmDestaque(lancamento) : undefined}
                >
                  <CardImageWrap>
                    {lancamento.imagemUrl && (
                      <CardImage alt={lancamento.titulo} src={lancamento.imagemUrl} />
                    )}
                    <CardOverlay />
                    <CardContent>
                      <CardTitle>{lancamento.titulo}</CardTitle>
                      {lancamento.descricao && <CardDesc>{lancamento.descricao}</CardDesc>}
                      {lancamento.url && <CardLink>Ver mais</CardLink>}
                    </CardContent>
                  </CardImageWrap>
                </Card>
              ))}
            </CardGrid>
          )}

          {visiveis.length > 0 &&
            controles("https://c.animaapp.com/wSrmTlud/img/frame-389-1.svg")}
        </Main>
      </Body>

      {emDestaque?.url && (
        <Lightbox
          aberto
          titulo={emDestaque.titulo}
          descricao={emDestaque.descricao}
          url={emDestaque.url}
          onFechar={() => setEmDestaque(null)}
        />
      )}
    </Page>
  );
};

export default Lancamentos;
