import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1228px;
`;

/* ---- Cabeçalho "Seja um COLABORADOR" ---- */
const Header = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  width: 100%;
  max-width: 1009px;
  margin-bottom: -215px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    margin-bottom: 0;
  }
`;

const HeaderTitle = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1;
  margin: 0;
  font-size: 60px;

  strong {
    display: block;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 80px;
    font-style: italic;
    font-weight: 700;
  }

  span {
    font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
    font-style: italic;
    font-weight: 300;
  }

  @media (max-width: 600px) {
    font-size: 38px;
    strong {
      font-size: 52px;
    }
  }
`;

const Collage = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 444px;
  aspect-ratio: 444 / 566;
  max-width: 100%;

  @media (max-width: 1100px) {
    width: 360px;
  }

  @media (max-width: 600px) {
    width: 280px;
  }
`;

const CollageBack = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 59.4%;
  height: auto;
`;

const CollageFront = styled.img`
  position: absolute;
  left: 29.7%;
  top: 2.5%;
  width: 70.3%;
  height: auto;
`;

/* ---- Caixa cinza ---- */
const GrayBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 50px 96px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    padding: 40px 32px;
  }

  @media (max-width: 600px) {
    padding: 32px 20px;
  }
`;

const BlockTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 40px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Centered = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const Subtle = styled(Centered)`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-weight: 300;
`;

const Divider = styled.img`
  width: 100%;
  height: auto;
`;

/* ---- Etapas do processo ---- */
const StepsRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  width: 100%;

  @media (min-width: 901px) {
    flex-wrap: nowrap;
  }
`;

const StepCard = styled.div`
  align-items: flex-start;
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  min-width: 220px;
  padding: 44px 25px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex: 1 1 240px;
  }
`;

const StepTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const StepDesc = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
`;

/* ---- Benefícios ---- */
const BenefitsRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;

  @media (min-width: 901px) {
    flex-wrap: nowrap;
    gap: 16px;
  }
`;

const Benefit = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 160px;
  flex-direction: column;
  gap: 14px;
  max-width: 220px;
  min-width: 150px;
  text-align: center;
`;

const BenefitIcon = styled.img`
  height: 59px;
  width: auto;
  object-fit: contain;
`;

const BenefitLabel = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;

/* ---- Oportunidades ---- */
const OppsHeader = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
`;

const OppsText = styled.p`
  color: #333333;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;

  strong {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }
`;

const OppsCount = styled.div`
  color: #333333;
  font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  white-space: nowrap;
`;

const JobsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

const JobCard = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex: 1 1 280px;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  max-width: 300px;
  min-width: 260px;
  min-height: 100px;
  padding: 14px 16px;
  box-sizing: border-box;
`;

const JobBadge = styled.div`
  align-items: center;
  background-color: #f6be00;
  border-radius: 5px;
  color: #000000;
  display: inline-flex;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 14px;
  font-weight: 300;
  justify-content: center;
  padding: 3px 10px;
`;

const JobTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
`;

const ExploreButton = styled.button`
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
  height: 58px;
  justify-content: center;
  padding: 17px 40px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const steps = [
  {
    title: "Candidate-se",
    desc: "Para fazer parte da nossa equipe, cadastre seu currículo no Gupy e venha mostrar o que você tem a oferecer. As informações do LinkedIn podem ser importadas diretamente para agilizar o processo.",
  },
  {
    title: "Entrevista RH",
    desc: "Nosso objetivo é entender quem você é além do currículo. A entrevista com o RH é a oportunidade de alinharmos expectativas e falarmos sobre sua experiência e como podemos crescer juntos.",
  },
  {
    title: "Entrevista Gestor",
    desc: "Vamos aprofundar na sua experiência prática. Durante a entrevista com o gestor, buscamos entender suas habilidades e como você pode contribuir diretamente para a área, sempre com foco na excelência.",
  },
  {
    title: "Etapas finais",
    desc: "Buscamos profissionais que se alinhem com nossos valores e possam multiplicar conhecimento e impacto dentro da VONDER. Esperamos poder contar e crescer junto com você em breve!",
  },
];

const benefits = [
  { icon: "https://c.animaapp.com/fkOynynE/img/group-69132@2x.png", label: "VALE ALIMENTAÇÃO" },
  { icon: "https://c.animaapp.com/fkOynynE/img/group-69132-1@2x.png", label: "REFEIÇÃO NO LOCAL" },
  { icon: "https://c.animaapp.com/fkOynynE/img/group-69132-2@2x.png", label: "VALE TRANSPORTE OU ESTACIONAMENTO" },
  { icon: "https://c.animaapp.com/fkOynynE/img/group-69132-3@2x.png", label: "PLANO DE SAÚDE" },
  { icon: "https://c.animaapp.com/fkOynynE/img/group-69132-4@2x.png", label: "PLANO ODONTOLÓGICO" },
];

const jobs = [
  { local: "Curitiba - PR", title: "Analista de Marketing Digital" },
  { local: "Curitiba - PR", title: "Assistente de Remuneração" },
  { local: "Curitiba - PR", title: "Auxiliar de Logística" },
  { local: "Novo Hamburgo - RS", title: "Auxiliar de Logística" },
  { local: "Aparecida de Goiânia - GO", title: "Auxiliar de Logística" },
  { local: "Curitiba - PR", title: "Auxiliar de Logística - 3° TURNO" },
  { local: "Aparecida de Goiânia - GO", title: "Auxiliar de Recebimento (Carga e Descarga)" },
  { local: "Jundiaí - SP", title: "Auxiliar de Recebimento (Carga e Descarga)" },
  { local: "Curitiba - PR", title: "Auxiliar de Recebimento (Carga e Descarga) - 3° TURNO" },
  { local: "Curitiba - PR", title: "Auxiliar Técnico" },
  { local: "Curitiba - PR", title: "Banco de Talentos" },
  { local: "Cabo de Santo Agostinho - PE", title: "Banco de Talentos" },
  { local: "Novo Hamburgo - RS", title: "Banco de Talentos Logística" },
  { local: "Itajaí - SC", title: "Banco de Talentos Logística" },
  { local: "Curitiba - PR", title: "Banco de Talentos Logística" },
  { local: "Feira de Santana - BA", title: "Banco de Talentos Logística" },
  { local: "Jundiaí - SP", title: "Banco de Talentos Logística" },
  { local: "Jundiaí - SP", title: "Banco de Talentos Logística PCDs" },
  { local: "Curitiba - PR", title: "Estagiário Engenharia Civil" },
  { local: "Florianópolis - SC", title: "Gestor (a) de Vendas Externas" },
  { local: "Sinop - MT", title: "Gestor (a) de Vendas Externas" },
  { local: "Ji-Paraná - RO", title: "Gestor (a) de Vendas Externas" },
  { local: "Betim - MG", title: "Jovem Aprendiz" },
  { local: "Novo Hamburgo - RS", title: "Jovem Aprendiz" },
  { local: "Curitiba - PR", title: "Jovem Aprendiz" },
  { local: "Curitiba - PR", title: "Vendedor (a) Interno" },
  { local: "Curitiba - PR", title: "Vendedor (a) Interno" },
  { local: "Aparecida de Goiânia - GO", title: "Banco de Talentos Logística" },
];

const DIVIDER = "https://c.animaapp.com/fkOynynE/img/frame-69661.svg";

const repReqs = [
  "Registro no Conselho Regional de Representação Comercial (regularizado);",
  "Empresa de Representação Comercial ativa;",
  "Condução própria (carro ou moto);",
  "Celular e rede de internet móvel",
  "Não ter vínculo empregatício;",
];

const repLastReq = (
  <>
    No currículo, incluir as seguintes informações:{" "}
    <strong>nome, endereço completo, CNPJ, experiências profissionais e área de atuação;</strong>
  </>
);

const ReqCard = styled.div`
  align-items: flex-start;
  align-self: stretch;
  background-color: #f6be00;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 74px;
  padding: 14px 22px;
  box-sizing: border-box;
`;

const ReqText = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;

  strong {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }
`;

const ReqLastText = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.3;
  margin: 0;

  strong {
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-style: italic;
    font-weight: 700;
  }
`;

const TwoColGrid = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TwoColGridCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
`;

const SendCvButton = styled.button`
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
  height: 58px;
  justify-content: center;
  padding: 17px 40px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

function RepresentanteContent() {
  const left = repReqs.slice(0, 3);
  const right = repReqs.slice(3);
  return (
    <>
      <Centered>
        Ajude a expandir a presença da VONDER em todo o Brasil, conquistando
        novos clientes e fortalecendo nossa rede de parceiros.
        <br />
        Confira abaixo os requisitos para ser um Representante Comercial VONDER:
      </Centered>
      <TwoColGrid>
        <TwoColGridCol>
          {left.map((r) => (
            <ReqCard key={r}>
              <ReqText>{r}</ReqText>
            </ReqCard>
          ))}
        </TwoColGridCol>
        <TwoColGridCol>
          {right.map((r) => (
            <ReqCard key={r}>
              <ReqText>{r}</ReqText>
            </ReqCard>
          ))}
          <ReqCard>
            <ReqLastText>{repLastReq}</ReqLastText>
          </ReqCard>
        </TwoColGridCol>
      </TwoColGrid>
      <SendCvButton type="button">Enviar currículo</SendCvButton>
    </>
  );
}

function ColaboradorContent() {
  return (
    <>
      <BlockTitle>Etapas do processo</BlockTitle>
      <Centered>
        A VONDER oferece oportunidades em diversas áreas, onde você pode
        crescer e contribuir para nossa busca constante pela excelência no
        mercado de ferramentas.
      </Centered>
      <StepsRow>
        {steps.map((step) => (
          <StepCard key={step.title}>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.desc}</StepDesc>
          </StepCard>
        ))}
      </StepsRow>
      <Centered>
        A ordem e o nome de cada etapa do processo de contratação podem mudar
        de acordo com o departamento e cargo em que você participar. Durante o
        processo, a equipe de Recursos Humanos oferecerá mais detalhes sobre
        cada etapa.
      </Centered>

      <BlockTitle>Nossos benefícios</BlockTitle>
      <Subtle>
        Confira um pouco do que oferecemos para promover qualidade de vida,
        segurança e crescimento profissional de cada um dos nossos
        colaboradores
      </Subtle>
      <Divider alt="" src={DIVIDER} />
      <BenefitsRow>
        {benefits.map((b) => (
          <Benefit key={b.label}>
            <BenefitIcon alt={b.label} src={b.icon} />
            <BenefitLabel>{b.label}</BenefitLabel>
          </Benefit>
        ))}
      </BenefitsRow>
      <Centered>
        É assim que a <strong>VONDER</strong> e o <strong>Grupo OVD</strong>{" "}
        procuram estabelecer seu diferencial no mercado: com foco no
        atendimento e na superação das expectativas de cada um de seus
        clientes, a começar pelo interno. Nosso sonho continua grande, graças
        à dedicação da nossa gente, que tem paixão genuína por tudo o que faz!
      </Centered>
      <Divider alt="" src={DIVIDER} />

      <BlockTitle>Nossas oportunidades</BlockTitle>
      <OppsHeader>
        <OppsText>
          Confira nossas vagas abertas e faça a diferença com a gente!{" "}
          <strong>#VemPraOVD</strong>
        </OppsText>
        <OppsCount>(28 vagas abertas)</OppsCount>
      </OppsHeader>
      <JobsGrid>
        {jobs.map((job, i) => (
          <JobCard key={`${job.title}-${i}`}>
            <JobBadge>{job.local}</JobBadge>
            <JobTitle>{job.title}</JobTitle>
          </JobCard>
        ))}
      </JobsGrid>
      <ExploreButton type="button">Explorar todas as vagas</ExploreButton>
    </>
  );
}

interface GroupWrapperSubsectionProps {
  title?: string;
  activeTab?: number;
}

/* ── Formulário Revendedor ── */
const FormTitle = styled.div`
  color: #000000;
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-size: 40px;
  font-style: italic;
  font-weight: 700;
  text-align: center;
  width: 100%;

  @media (max-width: 600px) { font-size: 28px; }
`;

const FormDesc = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Roman", Helvetica;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const SectionHeading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: #000000;
    font-family: "Swis721 Cn BT-Bold", Helvetica;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin: 0;

    em {
      font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
      font-style: italic;
      font-weight: 700;
    }

    span {
      font-family: "Swis721 LtCn BT-LightItalic", Helvetica;
      font-style: italic;
      font-weight: 300;
    }
  }

  @media (max-width: 600px) {
    p { font-size: 26px; }
  }
`;

const FormBox = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 48px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) { padding: 28px 20px; }
`;

const FieldsRow = styled.div`
  display: flex;
  gap: 28px;
  width: 100%;

  @media (max-width: 768px) { flex-direction: column; gap: 16px; }
`;

const FieldsCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
`;

const FormField = styled.input`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  color: #3e3e3e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  height: 60px;
  outline: none;
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;

  &::placeholder { color: #3e3e3e; }
  &:focus { border-color: #f6be00; }
`;

const CheckGrid = styled.div`
  display: grid;
  gap: 15px 28px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 768px)  { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px)  { grid-template-columns: 1fr; }
`;

const CheckItem = styled.label`
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  min-height: 60px;
  padding: 16px 20px;
  box-sizing: border-box;

  input[type="checkbox"] {
    accent-color: #f6be00;
    border: 1px solid #979797;
    border-radius: 5px;
    flex-shrink: 0;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  span {
    color: #3e3e3e;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.3;
  }
`;

const MessageArea = styled.textarea`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  color: #3e3e3e;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  height: 200px;
  outline: none;
  padding: 20px 30px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;

  &::placeholder { color: #3e3e3e; }
  &:focus { border-color: #f6be00; }
`;

const PrivacyText = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-align: right;
  width: 100%;
`;

const SubmitRow = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const VonderLogo = styled.img`
  height: 73px;
  width: 300px;
  object-fit: contain;
`;

const SubmitBtn = styled.button`
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
  height: 58px;
  justify-content: center;
  padding: 17px 0;
  width: 300px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px #00000040;
  }
`;

const products = [
  "Abrasivos", "Ferramentas manuais", "Metais", "Químicos",
  "Construção civil", "Jardinagem", "Movimentação de materiais", "Rolamento",
  "Correias", "Mangueiras", "Máquinas e compressores", "Solda",
  "EPI", "Materiais elétricos", "Parafusos e fixadores", "Teste",
  "Ferramentas elétricas", "Medição e teste", "Pintura", "Usinagem e corte",
];

const segments = [
  "Água e Esgoto", "Energia Elétrica", "Madeira, Reflorestamento e Beneficiamento", "Papel e Celulose",
  "Alimentício", "Frigoríficos e Comércio de carnes", "Manutenção Automotiva", "Telecomunicações",
  "Construção Civil", "Hotéis", "Manutenção Predial e Industrial", "Transporte e Armazenagem",
  "Construção Naval", "Indústria Química", "Meio Ambiente", "Usina Açúcar e Álcool",
  "Cozinhas Industriais", "Informática", "Metalurgia", "Ensino",
  "Limpeza, Conservação e Vigilância", "Moveleiro",
];

function RevendedorContent() {
  return (
    <>
      <FormTitle>Formulário de cadastro</FormTitle>
      <FormDesc>
        Se você é LOJISTA, REVENDEDOR ou ATACADISTA e deseja comercializar os
        produtos VONDER, preencha o formulário abaixo para que possamos
        conhecê-lo!
      </FormDesc>

      <Divider alt="" src={DIVIDER} />

      <SectionHeading>
        <p><em>Dados da empresa</em><span>*</span></p>
      </SectionHeading>
      <FormBox>
        <FieldsRow>
          <FieldsCol>
            <FormField type="text" placeholder="Perfil" />
            <FormField type="text" placeholder="Nome da empresa" />
            <FormField type="email" placeholder="E-mail" />
            <FormField type="text" placeholder="Estado" />
          </FieldsCol>
          <FieldsCol>
            <FormField type="text" placeholder="CNPJ" />
            <FormField type="tel" placeholder="Telefone" />
            <FormField type="text" placeholder="Falar com" />
            <FormField type="text" placeholder="Cidade" />
          </FieldsCol>
        </FieldsRow>
        <FormField type="text" placeholder="Como conheceu a VONDER?" />
      </FormBox>

      <Divider alt="" src={DIVIDER} />

      <SectionHeading>
        <p><em>Produtos de interesse</em><span>*</span></p>
      </SectionHeading>
      <FormBox>
        <CheckGrid>
          {products.map((p) => (
            <CheckItem key={p}>
              <input type="checkbox" />
              <span>{p}</span>
            </CheckItem>
          ))}
        </CheckGrid>
      </FormBox>

      <Divider alt="" src={DIVIDER} />

      <SectionHeading>
        <p><em>Segmentos que atende</em><span>*</span></p>
      </SectionHeading>
      <FormBox>
        <CheckGrid>
          {segments.map((s) => (
            <CheckItem key={s}>
              <input type="checkbox" />
              <span>{s}</span>
            </CheckItem>
          ))}
        </CheckGrid>
      </FormBox>

      <Divider alt="" src={DIVIDER} />

      <SectionHeading>
        <p><em>Deixe sua mensagem</em></p>
      </SectionHeading>
      <FormBox>
        <MessageArea placeholder="Complemente seus dados" />
      </FormBox>

      <Divider alt="" src={DIVIDER} />

      <PrivacyText>
        Ao enviar este formulário, você declara estar ciente de que seus dados
        pessoais serão tratados para atendimento à sua solicitação.
      </PrivacyText>
      <SubmitRow>
        <VonderLogo
          alt="VONDER"
          src="https://c.animaapp.com/V0zyAfrU/img/image-141@2x.png"
        />
        <SubmitBtn type="button">Enviar</SubmitBtn>
      </SubmitRow>
    </>
  );
}

const collageImages: Record<number, { back: string; front: string }> = {
  0: {
    back: "https://c.animaapp.com/fkOynynE/img/h-3@2x.png",
    front: "https://c.animaapp.com/fkOynynE/img/h-2-1.png",
  },
  1: {
    back: "https://c.animaapp.com/V4Bq3Bj7/img/h-3.png",
    front: "https://c.animaapp.com/V4Bq3Bj7/img/h-2.png",
  },
  2: {
    back: "https://c.animaapp.com/V0zyAfrU/img/h-3.png",
    front: "https://c.animaapp.com/V0zyAfrU/img/h-2.png",
  },
};

export const GroupWrapperSubsection = ({
  title = "COLABORADOR",
  activeTab = 0,
}: GroupWrapperSubsectionProps = {}): React.JSX.Element => {
  const imgs = collageImages[activeTab] ?? collageImages[0];

  return (
    <Section className="group-wrapper-subsection">
      <Header>
        <HeaderTitle>
          <span>Seja um</span>
          <strong>{title}</strong>
        </HeaderTitle>
        <Collage>
          <CollageBack alt="VONDER" src={imgs.back} />
          <CollageFront alt="VONDER" src={imgs.front} />
        </Collage>
      </Header>

      <GrayBox>
        {activeTab === 2
          ? <RevendedorContent />
          : activeTab === 1
          ? <RepresentanteContent />
          : <ColaboradorContent />}
      </GrayBox>
    </Section>
  );
};
