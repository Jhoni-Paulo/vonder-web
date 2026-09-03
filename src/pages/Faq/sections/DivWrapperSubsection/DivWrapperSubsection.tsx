import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import minusIcon from "../../../../assets/Group69338.png";

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

const QuestionItem = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #00000026;
  overflow: hidden;
  width: 100%;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 6px 22px #0000003a;
  }
`;

const QuestionRow = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 16px 20px 16px 29px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

const AnswerPanel = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? "800px" : "0")};
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1);
`;

const AnswerText = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
  padding: 4px 29px 24px;

  @media (max-width: 600px) {
    font-size: 16px;
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

/* ----- CTA final (mesmo layout de "Acompanhe também as Redes Sociais da OVD!") ----- */
const CtaWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
  max-width: 1230px;

  @media (max-width: 1000px) {
    align-items: center;
    box-sizing: border-box;
    max-width: 640px;
    padding: 0 24px;
    width: 100%;
  }
`;

const CtaGroup = styled.div`
  height: 570px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    height: auto;
    width: 100%;
  }
`;

const CtaFrame = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 445px;
  justify-content: center;
  left: 204px;
  padding: 39px 40px;
  position: absolute;
  right: 0;
  /* Centraliza o card (445px) verticalmente no CtaGroup (570px):
     (570 - 445) / 2 = 62.5px em cima e embaixo. */
  top: 62.5px;
  width: auto;

  @media (max-width: 1000px) {
    align-items: stretch;
    height: auto;
    left: auto;
    padding: 32px 24px;
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
  }
`;

const RectangleWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;

  @media (max-width: 1000px) {
    inset: 0;
    padding: 0;
    width: 100%;
  }
`;

const Rectangle = styled.div`
  align-self: stretch;
  background-color: #f2f2f2;
  border-radius: 20px;
  height: 425px;
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

const CtaContent = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  /* Mantém o texto começando logo após a imagem, independente da largura. */
  margin-left: 290px;
  padding-left: 40px;
  position: relative;

  @media (max-width: 1000px) {
    margin-left: 0;
    max-width: 100%;
    width: 100%;
  }
`;

const CtaTitle = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 45px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  max-width: 100%;
  position: relative;
  width: 510px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const CtaText = styled.p`
  align-self: stretch;
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: relative;

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
  flex: 0 0 auto;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  height: 58px;
  justify-content: center;
  padding: 17px 60px;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const CtaImageWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;

  @media (max-width: 1000px) {
    padding: 0;
    position: relative;
  }
`;

const CtaImage = styled.img`
  aspect-ratio: 1.08;
  height: auto;
  position: relative;
  width: 526px;

  @media (max-width: 1000px) {
    height: auto;
    max-width: 100%;
    width: 280px;
  }
`;

const ARROW = "https://c.animaapp.com/lFhe4nh2/img/frame-69640.svg";

type FaqQuestion = string | { q: string; a?: string };

const faqCategories: { title: string; questions: FaqQuestion[] }[] = [
  {
    title: "Produtos VONDER",
    questions: [
      {
        q: "Quais tipos de ferramentas a VONDER oferece?",
        a: "A VONDER oferece uma linha completa de ferramentas projetadas para atender profissionais, indústrias e consumidores que buscam qualidade, eficiência e durabilidade. Nosso portfólio inclui ferramentas elétricas, como parafusadeiras, furadeiras e serras; ferramentas manuais, como chaves, alicates e martelos; além de soluções portáteis a bateria para maior mobilidade. Também contamos com uma ampla variedade de abrasivos, discos de corte e acessórios que garantem desempenho e precisão em cada aplicação. Seja para uso profissional ou industrial, nossas ferramentas são desenvolvidas com tecnologia de ponta e certificação de qualidade para proporcionar segurança e resultados confiáveis em qualquer projeto.",
      },
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
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <Container>
      {faqCategories.map((category) => (
        <Category key={category.title}>
          <CategoryHeader>
            <CategoryTitle>{category.title}</CategoryTitle>
            <SeeAllButton type="button">Ver tudo</SeeAllButton>
          </CategoryHeader>
          <QuestionList>
            {category.questions.map((item, qi) => {
              const q = typeof item === "string" ? item : item.q;
              const a = typeof item === "string" ? undefined : item.a;
              const key = `${category.title}::${qi}`;
              const isOpen = openKey === key;
              return (
                <QuestionItem key={q}>
                  <QuestionRow
                    onClick={() => setOpenKey(isOpen ? null : key)}
                  >
                    <QuestionText>{q}</QuestionText>
                    <ArrowIcon
                      alt={isOpen ? "Fechar" : "Abrir"}
                      src={isOpen ? minusIcon : ARROW}
                    />
                  </QuestionRow>
                  <AnswerPanel $open={isOpen} aria-hidden={!isOpen}>
                    {a && <AnswerText>{a}</AnswerText>}
                  </AnswerPanel>
                </QuestionItem>
              );
            })}
          </QuestionList>
        </Category>
      ))}

      <CtaWrapper>
        <CtaGroup>
          <CtaFrame>
            <RectangleWrapper>
              <Rectangle />
            </RectangleWrapper>
            <CtaContent>
              <CtaTitle>Ainda tem dúvidas?</CtaTitle>
              <CtaText>
                Contamos com uma equipe de profissionais altamente capacitados
                e sempre à disposição para atendê-lo!
                <br />
                Clique aqui para enviar sua opinião, sugestões ou dúvidas sobre
                nossos produtos e serviços.
              </CtaText>
              <CtaButton to="/fale-conosco">Fale Conosco</CtaButton>
            </CtaContent>
          </CtaFrame>
          <CtaImageWrapper>
            <CtaImage
              alt="VONDER"
              src="https://c.animaapp.com/lFhe4nh2/img/png-mock-vonder-2.png"
            />
          </CtaImageWrapper>
        </CtaGroup>
      </CtaWrapper>
    </Container>
  );
};
