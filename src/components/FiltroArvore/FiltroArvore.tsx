import React, { useState } from "react";
import styled from "styled-components";

/** Opção de um nível da árvore (grupo, subgrupo ou categoria). */
export interface OpcaoArvore {
  id: number;
  nome: string;
}

/** 1 = grupo, 2 = subgrupo, 3 = categoria. */
export type NivelArvore = 1 | 2 | 3;

/* ── Estilos ──────────────────────────────────────────── */

const Sidebar = styled.aside`
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 30px 24px 40px;
  width: 300px;
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SidebarNote = styled.div`
  color: #3e3e3e;
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-size: 17px;
  font-style: italic;
  font-weight: 300;
  padding: 6px 8px;
`;

const Divider = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

const FilterGroupTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  padding: 6px 8px;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
`;

const FilterLabel = styled.span`
  color: #000000;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
`;

const FilterChevron = styled.img<{ $aberta?: boolean }>`
  width: 32px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
  transform: rotate(${({ $aberta }) => ($aberta ? "180deg" : "0deg")});
`;

const FilterRow = styled.label`
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 5px 8px;
  cursor: pointer;
`;

const CheckboxBox = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #979797;
  border-radius: 5px;
  height: 20px;
  width: 20px;
  flex-shrink: 0;
`;

const CheckboxChecked = styled.img`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
`;

const FilterOptionText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 17px;
  font-weight: 300;
`;

const ShowMoreRow = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 5px 8px;
  cursor: pointer;
`;

const ShowMoreIcon = styled.img`
  height: 18px;
  width: 18px;
`;

const ShowMoreText = styled.span`
  color: #3e3e3e;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 17px;
  font-weight: 700;
`;

/* ── Ícones do layout ─────────────────────────────────── */

const ICONE_DIVISOR = "https://c.animaapp.com/a8ORmsbd/img/frame-69892.svg";
const ICONE_CHEVRON = "https://c.animaapp.com/a8ORmsbd/img/frame-69894.svg";
const ICONE_CHECK = "https://c.animaapp.com/a8ORmsbd/img/checkbox-inactive-1.svg";
const ICONE_MAIS = "https://c.animaapp.com/a8ORmsbd/img/add.svg";

/** Opções exibidas em cada seção antes do "Ver mais". */
const MAX_OPCOES_VISIVEIS = 6;

interface SecaoFiltroProps {
  titulo: string;
  opcoes: OpcaoArvore[];
  selecionado?: number;
  aberta: boolean;
  verTudo: boolean;
  onAlternarSecao: () => void;
  onVerTudo: () => void;
  onSelecionar: (id: number) => void;
}

/**
 * Seção de checkboxes. Seleção é única por nível, porque a API aceita um id
 * por nível — clicar no item já marcado limpa o filtro.
 */
const SecaoFiltro = ({
  titulo,
  opcoes,
  selecionado,
  aberta,
  verTudo,
  onAlternarSecao,
  onVerTudo,
  onSelecionar,
}: SecaoFiltroProps): React.JSX.Element => {
  const visiveis = verTudo ? opcoes : opcoes.slice(0, MAX_OPCOES_VISIVEIS);

  return (
    <FilterSection>
      <FilterHeader onClick={onAlternarSecao}>
        <FilterLabel>{titulo}</FilterLabel>
        <FilterChevron $aberta={aberta} alt="" src={ICONE_CHEVRON} />
      </FilterHeader>

      {aberta &&
        visiveis.map((opcao) => (
          <FilterRow key={opcao.id} onClick={() => onSelecionar(opcao.id)}>
            {opcao.id === selecionado ? (
              <CheckboxChecked alt="Selecionado" src={ICONE_CHECK} />
            ) : (
              <CheckboxBox />
            )}
            <FilterOptionText>{opcao.nome}</FilterOptionText>
          </FilterRow>
        ))}

      {aberta && opcoes.length > MAX_OPCOES_VISIVEIS && (
        <ShowMoreRow onClick={onVerTudo}>
          <ShowMoreIcon alt="" src={ICONE_MAIS} />
          <ShowMoreText>{verTudo ? "Ver menos" : "Ver mais"}</ShowMoreText>
        </ShowMoreRow>
      )}
    </FilterSection>
  );
};

export interface FiltroArvoreProps {
  /** Texto do contador, ex.: "Resultados: 15 de 741". */
  resultado: string;
  grupos: OpcaoArvore[];
  subgrupos: OpcaoArvore[];
  categorias: OpcaoArvore[];
  grupoId?: number;
  subgrupoId?: number;
  categoriaId?: number;
  onSelecionar: (nivel: NivelArvore, id: number) => void;
}

/**
 * Sidebar de filtros por Grupo → Subgrupo → Categoria, usada na listagem de
 * produtos e na de lançamentos.
 *
 * Um nível só oferece opções depois que o nível de cima foi escolhido; os
 * títulos continuam na tela, apenas fechados, para a sidebar não "pular"
 * conforme o usuário filtra.
 */
export const FiltroArvore = ({
  resultado,
  grupos,
  subgrupos,
  categorias,
  grupoId,
  subgrupoId,
  categoriaId,
  onSelecionar,
}: FiltroArvoreProps): React.JSX.Element => {
  const [secoesAlternadas, setSecoesAlternadas] = useState<Record<string, boolean>>({});
  const [secoesVerTudo, setSecoesVerTudo] = useState<Record<string, boolean>>({});

  const estaAberta = (chave: string, padrao: boolean) => secoesAlternadas[chave] ?? padrao;
  const alternarSecao = (chave: string, padrao: boolean) =>
    setSecoesAlternadas((atual) => ({ ...atual, [chave]: !(atual[chave] ?? padrao) }));
  const alternarVerTudo = (chave: string) =>
    setSecoesVerTudo((atual) => ({ ...atual, [chave]: !atual[chave] }));

  const opcoesSubgrupo = grupoId ? subgrupos : [];
  const opcoesCategoria = subgrupoId ? categorias : [];

  return (
    <Sidebar>
      <SidebarNote>{resultado}</SidebarNote>
      <Divider alt="" src={ICONE_DIVISOR} />
      <FilterGroupTitle>Filtros:</FilterGroupTitle>
      <Divider alt="" src={ICONE_DIVISOR} />

      <SecaoFiltro
        titulo="Grupo"
        opcoes={grupos}
        selecionado={grupoId}
        aberta={estaAberta("grupo", true)}
        verTudo={!!secoesVerTudo.grupo}
        onAlternarSecao={() => alternarSecao("grupo", true)}
        onVerTudo={() => alternarVerTudo("grupo")}
        onSelecionar={(id) => onSelecionar(1, id)}
      />
      <Divider alt="" src={ICONE_DIVISOR} />

      <SecaoFiltro
        titulo="Subgrupo"
        opcoes={opcoesSubgrupo}
        selecionado={subgrupoId}
        aberta={estaAberta("subgrupo", opcoesSubgrupo.length > 0)}
        verTudo={!!secoesVerTudo.subgrupo}
        onAlternarSecao={() => alternarSecao("subgrupo", opcoesSubgrupo.length > 0)}
        onVerTudo={() => alternarVerTudo("subgrupo")}
        onSelecionar={(id) => onSelecionar(2, id)}
      />
      <Divider alt="" src={ICONE_DIVISOR} />

      <SecaoFiltro
        titulo="Categoria"
        opcoes={opcoesCategoria}
        selecionado={categoriaId}
        aberta={estaAberta("categoria", opcoesCategoria.length > 0)}
        verTudo={!!secoesVerTudo.categoria}
        onAlternarSecao={() => alternarSecao("categoria", opcoesCategoria.length > 0)}
        onVerTudo={() => alternarVerTudo("categoria")}
        onSelecionar={(id) => onSelecionar(3, id)}
      />
    </Sidebar>
  );
};

export default FiltroArvore;
