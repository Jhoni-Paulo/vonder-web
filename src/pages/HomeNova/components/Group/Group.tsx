import React from "react";
import styled from "styled-components";

export interface GroupProps {
  className?: string;
  divClassName?: string;
  divClassNameOverride?: string;
  divClassName1?: string;
}

const StyledGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 64px;
  justify-content: center;
  width: 100%;
`;

const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  gap: 20px;
  max-width: 340px;
  min-width: 260px;
`;

const ColTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 34px;
  }
`;

const ColText = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

const Button = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  margin-top: auto;
  padding: 15px 24px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

export const Group = ({ className }: GroupProps): React.JSX.Element => {
  return (
    <StyledGroup className={className}>
      <Column>
        <ColTitle>
          Sempre
          <br />
          com você
        </ColTitle>
        <ColText>
          Oferecemos soluções completas em manutenção, reposição de peças e
          acessórios, visando maximizar o rendimento e a vida útil dos produtos,
          além de suporte ao cliente para eventuais dúvidas no manuseio das
          ferramentas.
        </ColText>
        <Button>Assistência técnica</Button>
      </Column>
      <Column>
        <ColTitle>
          Saiba onde
          <br />
          comprar
        </ColTitle>
        <ColText>
          A VONDER não trabalha com vendas diretas para consumidores finais.
          <br />
          Por isso, indicaremos sempre um revendedor dos nossos produtos que
          esteja próximo da sua localidade.
        </ColText>
        <Button>Encontre um distribuidor</Button>
      </Column>
      <Column>
        <ColTitle>
          Entre em
          <br />
          contato
        </ColTitle>
        <ColText>
          Contamos com uma equipe de profissionais altamente capacitados e
          sempre à disposição para atendê-lo!
          <br />
          Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre nossos
          produtos.
        </ColText>
        <Button>Fale Conosco</Button>
      </Column>
    </StyledGroup>
  );
};

export default Group;
