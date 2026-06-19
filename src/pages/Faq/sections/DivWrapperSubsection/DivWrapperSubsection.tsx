import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 48px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const CategoryHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const CategoryTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const SeeAllButton = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  border-radius: 100px;
  color: #f6be00;
  cursor: pointer;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  padding: 15px 48px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const QuestionRow = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #00000026;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 16px 20px 16px 29px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 6px 22px #0000003a;
  }
`;

const QuestionText = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const ArrowIcon = styled.img`
  flex-shrink: 0;
  height: 32px;
  width: 32px;
`;

/* ----- CTA final ----- */
const CtaWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1209px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CtaImage = styled.img`
  aspect-ratio: 1.08;
  height: auto;
  width: 460px;
  max-width: 100%;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 360px;
  }
`;

const CtaCard = styled.div`
  align-items: flex-start;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  padding: 56px 70px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 40px 28px;
    align-items: center;
    text-align: center;
  }
`;

const CtaTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const CtaText = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  max-width: 500px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CtaButton = styled(Link)`
  align-items: center;
  background-color: #000000;
  border-radius: 100px;
  color: #f6be00;
  display: flex;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  padding: 17px 60px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ARROW = "https://c.animaapp.com/lFhe4nh2/img/frame-69640.svg";

const faqCategories: { title: string; questions: string[] }[] = [
  {
    title: "Produtos VONDER",
    questions: [
      "Quais tipos de ferramentas a VONDER oferece?",
      "Como escolher a ferramenta certa para meu trabalho?",
      "Onde posso encontrar manuais de uso e especificações técnicas dos produtos?",
      "Os produtos VONDER são compatíveis com acessórios de outras marcas?",
      "Existe linha de produtos voltada para uso industrial ou doméstico?",
    ],
  },
  {
    title: "Garantia e Suporte",
    questions: [
      "Como acionar a garantia de um produto?",
      "Qual é o prazo da garantia dos produtos VONDER?",
      "O que a garantia cobre e o que não cobre?",
      "É necessário enviar o produto para análise na garantia?",
      "Como localizar uma assistência técnica autorizada perto de mim?",
    ],
  },
  {
    title: "Comprar e Revender",
    questions: [
      "A VONDER vende diretamente para consumidores finais ou apenas para revendedores?",
      "Onde posso comprar VONDER perto de mim?",
      "Como localizar uma assistência técnica autorizada perto de mim?",
      "A VONDER tem lojas oficiais nos marketplaces?",
      "Como posso me tornar um revendedor autorizado VONDER?",
    ],
  },
  {
    title: "Segurança e Confiabilidade",
    questions: [
      "Os produtos VONDER são certificados e seguem normas de segurança?",
      "Como a VONDER garante a qualidade de suas ferramentas?",
      "Existe seguro de transporte para produtos comprados online?",
      "Quais cuidados devo ter ao utilizar ferramentas elétricas da VONDER?",
      "Como devo fazer a manutenção das minhas ferramentas VONDER?",
    ],
  },
  {
    title: "Trabalhe Conosco",
    questions: [
      "Como me candidatar a uma vaga na VONDER?",
      "Como funciona o processo de seleção e entrevistas?",
      "Existe programa de estágio, jovem aprendiz ou trainee na VONDER?",
      "Como me tornar um revendedor autorizado VONDER?",
      "Como posso me tornar um representante comercial da VONDER?",
    ],
  },
  {
    title: "Contato",
    questions: [
      "Como entrar em contato com a VONDER?",
      "Como posso me tornar fornecedor da VONDER?",
      "Como participar de feiras, workshops ou eventos da VONDER?",
      "Como posso me tornar influenciador da VONDER nas Mídias Sociais?",
      "Onde posso fazer uma sugestão ou reclamação?",
    ],
  },
];

export const DivWrapperSubsection = (): React.JSX.Element => {
  return (
    <Container>
      {faqCategories.map((category) => (
        <Category key={category.title}>
          <CategoryHeader>
            <CategoryTitle>{category.title}</CategoryTitle>
            <SeeAllButton type="button">Ver tudo</SeeAllButton>
          </CategoryHeader>
          <QuestionList>
            {category.questions.map((question) => (
              <QuestionRow key={question}>
                <QuestionText>{question}</QuestionText>
                <ArrowIcon alt="Abrir" src={ARROW} />
              </QuestionRow>
            ))}
          </QuestionList>
        </Category>
      ))}

      <CtaWrapper>
        <CtaImage
          alt="VONDER"
          src="https://c.animaapp.com/lFhe4nh2/img/png-mock-vonder-2.png"
        />
        <CtaCard>
          <CtaTitle>Ainda tem dúvidas?</CtaTitle>
          <CtaText>
            Contamos com uma equipe de profissionais altamente capacitados e
            sempre à disposição para atendê-lo!
            <br />
            Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre
            nossos produtos e serviços.
          </CtaText>
          <CtaButton to="/fale-conosco">Fale Conosco</CtaButton>
        </CtaCard>
      </CtaWrapper>
    </Container>
  );
};
