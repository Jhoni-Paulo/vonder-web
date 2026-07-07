import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* ── Page wrapper ─────────────────────────────────── */

const Page = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 max(24px, calc((100% - 1229px) / 2 + 24px));
  box-sizing: border-box;
`;

/* ── Breadcrumb ───────────────────────────────────── */

const Breadcrumb = styled.p`
  color: #000000;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  padding: 20px 10px;
  align-self: flex-start;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 16px 0;
  }
`;

const BreadcrumbBold = styled.span`
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-weight: 700;
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

/* ── Two-column layout ────────────────────────────── */

const Columns = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 48px;
  }
`;

/* ── LEFT — yellow panel ──────────────────────────── */

const LeftPanel = styled.div`
  flex: 0 0 44%;
  background-color: #f6be00;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 56px 60px 0;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    padding: 48px 40px 0;
    gap: 32px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    padding: 40px 32px;
    gap: 28px;
    border-radius: 16px 16px 0 0;
    z-index: 1;
  }

  @media (max-width: 600px) {
    padding: 32px 24px;
    gap: 24px;
  }
`;

const Title = styled.h1`
  color: #000000;
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

const InfoText = styled.p`
  color: #000000;
  font-family: "Swis721 Cn BT-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.5;
  margin: 0;
  max-width: 400px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const InfoItalic = styled.span`
  font-family: "Swis721 Cn BT-Italic", Helvetica;
  font-style: italic;
`;

const InfoBold = styled.span`
  font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

const ContactImg = styled.div`
  background-image: url(https://c.animaapp.com/I3F7pjDB/img/camada-1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  height: 373px;
  margin-top: auto;

  @media (max-width: 600px) {
    display: none;
  }
`;

/* ── RIGHT — black panel ──────────────────────────── */

const RightPanel = styled.div`
  flex: 0 0 60%;
  margin-left: -4%;
  background-color: #000000;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 48px 44px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);

  @media (max-width: 1200px) {
    padding: 40px 32px;
  }

  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    margin-left: 0;
    margin-top: -16px;
    border-radius: 0 0 16px 16px;
    align-items: stretch;
    padding: 36px 32px;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`;

const FormTitle = styled.div`
  color: #ffffff;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  align-self: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  height: 58px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 0 24px;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  color: #3e3e3e;
  box-sizing: border-box;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder {
    color: #3e3e3e;
  }

  &:focus {
    box-shadow: 0 0 0 2px #f6be00;
  }

  @media (max-width: 600px) {
    height: 50px;
    font-size: 16px;
    padding: 0 18px;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  min-height: 160px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 18px 24px;
  font-family: "Swis721 LtCn BT-Light", Helvetica;
  font-size: 18px;
  font-weight: 300;
  color: #3e3e3e;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  transition: box-shadow 0.2s ease;

  &::placeholder {
    color: #3e3e3e;
  }

  &:focus {
    box-shadow: 0 0 0 2px #f6be00;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 14px 18px;
    min-height: 130px;
  }
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SubmitBtn = styled.button`
  background-color: #f6be00;
  border: none;
  border-radius: 100px;
  height: 58px;
  width: 300px;
  cursor: pointer;
  font-family: "Swis721 Cn BT-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(246, 190, 0, 0.4);
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 52px;
    font-size: 18px;
  }
`;

/* ── Component ────────────────────────────────────── */

export function FaleConosco() {
  const [form, setForm] = useState({
    cpf: "", nome: "", telefone: "", email: "",
    endereco: "", bairro: "", estado: "", cidade: "",
    assunto: "", mensagem: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Page>
      <Breadcrumb>
        <BreadcrumbLink to="/">Página inicial</BreadcrumbLink>
        {" > "}
        <BreadcrumbBold>Fale conosco</BreadcrumbBold>
      </Breadcrumb>

      <Columns>
        {/* ── LEFT ── */}
        <LeftPanel>
          <Title>FALE CONOSCO</Title>
          <InfoText>
            <InfoItalic>
              Contamos com uma equipe de profissionais altamente capacitados
              e sempre à disposição para atendê-lo!
              <br /><br />
              Preencha o formulário ao lado e envie sua opinião, sugestões
              ou dúvidas sobre nossos produtos, que em breve entraremos em
              contato. Assistência ao consumidor -{" "}
            </InfoItalic>
            <InfoBold>0800 723 4762</InfoBold>
            <InfoItalic> · Atendimento comercial - </InfoItalic>
            <InfoBold>(41) 2101-0550</InfoBold>
            <InfoItalic>
              <br /><br />
              Atendimento de segunda a sexta-feira, das 08:00 às 18:00
              (exceto feriados)
            </InfoItalic>
          </InfoText>
          <ContactImg />
        </LeftPanel>

        {/* ── RIGHT ── */}
        <RightPanel>
          <FormTitle>PREENCHA:</FormTitle>
          <Form onSubmit={submit}>
            <InputField name="cpf"      value={form.cpf}      onChange={handle} placeholder="CPF/CNPJ"  />
            <InputField name="nome"     value={form.nome}     onChange={handle} placeholder="Nome"      />
            <InputField name="telefone" value={form.telefone} onChange={handle} placeholder="Telefone"  />
            <InputField name="email"    value={form.email}    onChange={handle} placeholder="E-mail"    type="email" />
            <InputField name="endereco" value={form.endereco} onChange={handle} placeholder="Endereço"  />
            <InputField name="bairro"   value={form.bairro}   onChange={handle} placeholder="Bairro"    />
            <InputField name="estado"   value={form.estado}   onChange={handle} placeholder="Estado"    />
            <InputField name="cidade"   value={form.cidade}   onChange={handle} placeholder="Cidade"    />
            <InputField name="assunto"  value={form.assunto}  onChange={handle} placeholder="Assunto"   />
            <TextAreaField name="mensagem" value={form.mensagem} onChange={handle} placeholder="Mensagem" />
            <SubmitRow>
              <SubmitBtn type="submit">Enviar</SubmitBtn>
            </SubmitRow>
          </Form>
        </RightPanel>
      </Columns>
    </Page>
  );
}
