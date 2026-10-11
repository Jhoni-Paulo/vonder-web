import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { useListaProdutos } from "../../hooks/useListaProdutos";
import type { TipoOrdenacao } from "../../services/produtoService";
import { useFiltrosProduto } from "../../hooks/useFiltrosProduto";
import { useMegaMenuCategorias } from "../../hooks/useMegaMenuCategorias";
import {
  FiltroArvore,
  type NivelArvore,
  type OpcaoArvore,
} from "../../components/FiltroArvore/FiltroArvore";

/* ── Página ────────────────────────────────────────────── */

const Page = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 50px 95px 80px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 50px 48px 64px;
  }

  @media (max-width: 600px) {
    padding: 50px 20px 48px;
    gap: 24px;
  }
`;

/* ── Breadcrumb ────────────────────────────────────────── */

const Breadcrumb = styled.p`
  align-self: stretch;
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  .bold {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }
`;

/* ── Título ───────────────────────────────────────────── */

const Title = styled.h1`
  align-self: stretch;
  color: #000000;
  text-transform: uppercase;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

/* ── Body: sidebar + conteúdo ─────────────────────────── */

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

/* ── Sidebar ──────────────────────────────────────────── */

/* ── Conteúdo principal ───────────────────────────────── */

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 36px;
  min-width: 0;
`;

/* ── Controles (ordenar + paginação) ──────────────────── */

const ControlsRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  width: 100%;
`;

const SortButton = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 100px;
  display: flex;
  gap: 12px;
  height: 32px;
  padding: 7px 20px;
  cursor: pointer;
  user-select: none;
`;

const SortText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;

  .bold { font-weight: 700; }
  .light {
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-weight: 300;
  }
`;

const SortIcon = styled.img<{ $aberto?: boolean }>`
  height: 8px;
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
  gap: 8px;
`;

const PageBubble = styled.div<{ $active?: boolean }>`
  align-items: center;
  background-color: ${({ $active }) => ($active ? "#555a57" : "#f6be00")};
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
  cursor: pointer;
  user-select: none;
`;

const PageNumber = styled.span<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? "#ffffff" : "#3e3e3e")};
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 15px;
  font-weight: 700;
`;

const PageArrow = styled.img`
  height: 32px;
  width: 32px;
`;

/* ── Grid de produtos ────────────────────────────────── */

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 233px);
  justify-content: space-between;
  gap: 50px 22px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    justify-content: start;
    gap: 32px 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

/* ── Card de produto ─────────────────────────────────── */

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /* Borda gradiente */
  &::before {
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(102,102,102,1) 100%);
    border-radius: 15px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
    transition: background 0.25s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }

  &:hover::before {
    background: linear-gradient(180deg, rgba(246,190,0,0.4) 0%, rgba(246,190,0,1) 100%);
  }
`;

const CardImageArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px 16px 16px;
  width: 100%;
  min-height: 180px;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  height: 180px;
  object-fit: contain;
  width: auto;
  max-width: 100%;
`;

const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 16px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const CardName = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;
  text-align: center;
`;

const CardCode = styled.span`
  color: #555a57;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
`;

/* ── Aviso da listagem (carregando / erro / vazio) ────── */

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



/* ── Componente ───────────────────────────────────────── */

/** Quantidade de bolhas de página exibidas por vez, como no layout. */
const MAX_BOLHAS = 4;

/** Valores aceitos por `tipoOrdenacao`, na ordem em que aparecem no menu. */
const ORDENACOES: { valor: TipoOrdenacao; rotulo: string }[] = [
  { valor: "alfAsc", rotulo: "Nome A-Z" },
  { valor: "alfDesc", rotulo: "Nome Z-A" },
  { valor: "dataDesc", rotulo: "Mais recentes" },
  { valor: "dataAsc", rotulo: "Mais antigos" },
];

/** A listagem abre por nome (A-Z), que é como o layout mostra o botão. */
const ORDENACAO_PADRAO: TipoOrdenacao = "alfAsc";

const rotuloDaOrdenacao = (valor: TipoOrdenacao) =>
  ORDENACOES.find((opcao) => opcao.valor === valor)?.rotulo ?? "";

/** Só aceita da URL um valor que a API reconheça. */
const ordenacaoDaUrl = (valor: string | null): TipoOrdenacao =>
  ORDENACOES.find((opcao) => opcao.valor === valor)?.valor ?? ORDENACAO_PADRAO;

/** Nível da árvore ↔ parâmetro na URL (e na API). */
const CHAVE_POR_NIVEL: Record<NivelArvore, string> = {
  1: "grupo",
  2: "subgrupo",
  3: "categoria",
};

interface ControlesProps {
  iconeOrdenacao: string;
  iconeSeta: string;
  ordenacao: TipoOrdenacao;
  onOrdenar: (valor: TipoOrdenacao) => void;
  paginas: number[];
  paginaAtual: number;
  temProxima: boolean;
  onPagina: (indice: number) => void;
}

/** Linha de "Ordenar por" + paginação, repetida acima e abaixo da grade. */
const ControlesListagem = ({
  iconeOrdenacao,
  iconeSeta,
  ordenacao,
  onOrdenar,
  paginas,
  paginaAtual,
  temProxima,
  onPagina,
}: ControlesProps): React.JSX.Element => {
  /* Cada linha de controles tem seu próprio menu: a de cima e a de baixo
     abrem e fecham de forma independente. */
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
    <ControlsRow>
      <SortWrapper ref={wrapperRef}>
        <SortButton
          role="button"
          tabIndex={0}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <SortText>
            <span className="bold">Ordenar por:&nbsp;&nbsp;</span>
            <span className="light">{rotuloDaOrdenacao(ordenacao)}</span>
          </SortText>
          <SortIcon $aberto={menuAberto} alt="" src={iconeOrdenacao} />
        </SortButton>

        {menuAberto && (
          <SortMenu role="listbox">
            {ORDENACOES.map((opcao) => (
              <SortOption
                key={opcao.valor}
                role="option"
                aria-selected={opcao.valor === ordenacao}
                $ativa={opcao.valor === ordenacao}
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
          <PageBubble
            key={indice}
            $active={indice === paginaAtual}
            onClick={() => onPagina(indice)}
          >
            <PageNumber $active={indice === paginaAtual}>{indice + 1}</PageNumber>
          </PageBubble>
        ))}
        {temProxima && (
          <PageArrow
            alt="Próxima página"
            src={iconeSeta}
            onClick={() => onPagina(paginaAtual + 1)}
            style={{ cursor: "pointer" }}
          />
        )}
      </Pagination>
    </ControlsRow>
  );
};

export const CategoriasEProdutos = (): React.JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* Os três níveis vivem na URL, com os mesmos nomes que a API usa, então o
     link da listagem filtrada é compartilhável. */
  const idDaUrl = (chave: string) => Number(searchParams.get(chave)) || undefined;
  const grupoId = idDaUrl("grupo");
  const subgrupoId = idDaUrl("subgrupo");
  const categoriaId = idDaUrl("categoria");
  const paginaUrl = Math.max(1, Number(searchParams.get("pagina")) || 1);
  const ordenacao = ordenacaoDaUrl(searchParams.get("ordenacao"));

  /* Os grupos (nível 1) saem da listagem do mega menu, que já está em cache:
     pedir a lista completa ao /produto/filtro custaria ~1,8 MB. */
  const { categorias: gruposMenu } = useMegaMenuCategorias();
  const { subgrupos, categorias } = useFiltrosProduto({ grupoId, subgrupoId });

  /* A grade é filtrada pelo nível mais fundo que estiver selecionado. */
  const nivelSelecionado: NivelArvore | undefined = categoriaId
    ? 3
    : subgrupoId
      ? 2
      : grupoId
        ? 1
        : undefined;
  const idSelecionado = categoriaId ?? subgrupoId ?? grupoId;

  const { produtos, paginacao, carregando, erro } = useListaProdutos({
    idNivelArvore: idSelecionado,
    nivel: nivelSelecionado,
    ordenacao,
    pagina: paginaUrl - 1,
  });

  const opcoesGrupo: OpcaoArvore[] = gruposMenu;

  const nomeDe = (opcoes: OpcaoArvore[], id?: number) =>
    id ? opcoes.find((opcao) => opcao.id === id)?.nome : undefined;

  const nomeGrupo = nomeDe(opcoesGrupo, grupoId);
  const nomeSubgrupo = nomeDe(subgrupos, subgrupoId);
  const nomeCategoria = nomeDe(categorias, categoriaId);
  const trilha = [nomeGrupo, nomeSubgrupo, nomeCategoria].filter(Boolean) as string[];
  const titulo = trilha[trilha.length - 1] ?? "Nossos produtos";

  /**
   * Trocar (ou limpar) um nível invalida os níveis abaixo dele, e qualquer
   * mudança de filtro volta para a primeira página.
   */
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

  const totalPaginas = paginacao?.totalPaginas ?? 0;
  const paginaAtual = paginacao?.pagina ?? paginaUrl - 1;

  /* Janela deslizante de páginas: mantém a atual visível sem listar todas. */
  const paginas = useMemo(() => {
    if (totalPaginas <= 1) return [];
    const inicio = Math.min(
      Math.max(0, paginaAtual - 1),
      Math.max(0, totalPaginas - MAX_BOLHAS),
    );
    return Array.from({ length: Math.min(MAX_BOLHAS, totalPaginas) }, (_, i) => inicio + i);
  }, [paginaAtual, totalPaginas]);

  /** Trocar a ordenação recomeça a leitura pela primeira página. */
  const ordenar = (valor: TipoOrdenacao) => {
    const proxima = new URLSearchParams(searchParams);
    if (valor === ORDENACAO_PADRAO) proxima.delete("ordenacao");
    else proxima.set("ordenacao", valor);
    proxima.delete("pagina");
    setSearchParams(proxima);
  };

  const irParaPagina = (indice: number) => {
    const proxima = new URLSearchParams(searchParams);
    if (indice <= 0) proxima.delete("pagina");
    else proxima.set("pagina", String(indice + 1));
    setSearchParams(proxima);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const controles = (iconeOrdenacao: string, iconeSeta: string) => (
    <ControlesListagem
      iconeOrdenacao={iconeOrdenacao}
      iconeSeta={iconeSeta}
      ordenacao={ordenacao}
      onOrdenar={ordenar}
      paginas={paginas}
      paginaAtual={paginaAtual}
      temProxima={paginacao?.temProxima ?? false}
      onPagina={irParaPagina}
    />
  );

  return (
    <Page>
      <Breadcrumb>
        <span>Página inicial &gt; </span>
        {trilha.length === 0 ? (
          <span className="bold">Nossos produtos</span>
        ) : (
          <>
            <span>Nossos produtos &gt; </span>
            {trilha.map((nome, i) => (
              <span key={nome} className={i === trilha.length - 1 ? "bold" : undefined}>
                {nome}
                {i < trilha.length - 1 ? " > " : ""}
              </span>
            ))}
          </>
        )}
      </Breadcrumb>

      <Title>{titulo}</Title>

      <Body>
        <FiltroArvore
          resultado={
            carregando
              ? "Resultados: ..."
              : `Resultados: ${produtos.length} de ${paginacao?.totalRegistros ?? 0}`
          }
          grupos={opcoesGrupo}
          subgrupos={subgrupos}
          categorias={categorias}
          grupoId={grupoId}
          subgrupoId={subgrupoId}
          categoriaId={categoriaId}
          onSelecionar={selecionarNivel}
        />

        {/* ── Conteúdo principal ── */}
        <Main>
          {produtos.length > 0 &&
            controles(
              "https://c.animaapp.com/a8ORmsbd/img/modo-de-isolamento.svg",
              "https://c.animaapp.com/a8ORmsbd/img/frame-389.svg",
            )}

          {carregando && <Aviso>Carregando produtos...</Aviso>}

          {!carregando && erro && (
            <Aviso>Não foi possível carregar os produtos. Tente novamente em instantes.</Aviso>
          )}

          {!carregando && !erro && produtos.length === 0 && (
            <Aviso>Nenhum produto encontrado para este filtro.</Aviso>
          )}

          {produtos.length > 0 && (
            <ProductGrid>
              {produtos.map((produto) => (
                <ProductCard
                  key={produto.idProduto}
                  as={produto.codigoOvd ? Link : "div"}
                  to={produto.codigoOvd ? `/produto/${produto.codigoOvd}` : undefined}
                >
                  <CardImageArea>
                    {produto.imagemUrl && (
                      <CardImage alt={produto.nome ?? "Produto VONDER"} src={produto.imagemUrl} />
                    )}
                  </CardImageArea>
                  <CardTextArea>
                    {produto.nome && <CardName>{produto.nome}</CardName>}
                    {produto.codigoOvd && <CardCode>{produto.codigoOvd}</CardCode>}
                  </CardTextArea>
                </ProductCard>
              ))}
            </ProductGrid>
          )}

          {produtos.length > 0 &&
            controles(
              "https://c.animaapp.com/a8ORmsbd/img/modo-de-isolamento-1.svg",
              "https://c.animaapp.com/a8ORmsbd/img/frame-389-1.svg",
            )}
        </Main>
      </Body>
    </Page>
  );
};

export default CategoriasEProdutos;
