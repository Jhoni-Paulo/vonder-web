import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconeDownload from "../../../assets/catalogo/vector-18.svg";
import { BotaoPilula, Conteudo, Titulo } from "../styles";

const Interno = styled(Conteudo)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Breadcrumb = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .atual {
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

/* Título à esquerda e as duas ações à direita; empilha quando falta largura. */
const Linha = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  width: 100%;
`;

const Acoes = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const IconeCompartilhar = styled.svg`
  flex-shrink: 0;
  height: 24px;
  width: 24px;
`;

const IconeDownload = styled.img`
  flex-shrink: 0;
  height: 22px;
  width: auto;
`;

export const CabecalhoSection = (): React.JSX.Element => {
  /* O catálogo em PDF ainda não tem endereço definido; quando vier (CMS ou
     arquivo estático), é só apontar estes dois botões. */
  const compartilhar = () => {
    if (navigator.share) {
      navigator.share({ title: "Catálogo VONDER", url: window.location.href });
      return;
    }
    navigator.clipboard?.writeText(window.location.href);
  };

  /* Sem <header> aqui: o index.css pinta toda tag header de amarelo com
     `!important`, por causa do cabeçalho do site. */
  return (
    <Interno>
      <Breadcrumb>
        <Link to="/">Página inicial</Link> &gt;{" "}
        <span className="atual">Catálogo VONDER</span>
      </Breadcrumb>

      <Linha>
        <Titulo>CATÁLOGO VONDER</Titulo>

        <Acoes>
          <BotaoPilula type="button" onClick={compartilhar}>
            <IconeCompartilhar viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .18 1.03L8.9 8.62a3 3 0 1 0 0 6.76l6.28 3.59A3 3 0 1 0 18 16a3 3 0 0 0-2.1.86L9.62 13.3a3 3 0 0 0 0-2.6l6.28-3.56A3 3 0 0 0 18 8Z"
                fill="#f6be00"
              />
            </IconeCompartilhar>
            Compartilhar
          </BotaoPilula>

          <BotaoPilula type="button" $amarelo>
            <IconeDownload alt="" aria-hidden="true" src={iconeDownload} />
            Fazer download do catálogo completo
          </BotaoPilula>
        </Acoes>
      </Linha>
    </Interno>
  );
};
