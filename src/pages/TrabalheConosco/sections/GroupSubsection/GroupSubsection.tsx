import React from "react";
import styled from "styled-components";

const StyledGroupSubsection = styled.div`
  width: 100%;
  max-width: 1248px;

  & .group-3 {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 56px;
    justify-content: center;
    width: 100%;
  }

  & .frame-2,
  & .frame-3 {
    align-items: center;
    display: flex;
    flex: 1 1 240px;
    flex-direction: column;
    gap: 5px;
    max-width: 270px;
  }

  & .img-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    padding: 10px;
    position: relative;
  }

  & .img-2 {
    aspect-ratio: 1;
    height: 50px;
    position: relative;
    width: 50px;
  }

  & .div-wrapper {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Swis721 Cn BT-BoldItalic", Helvetica;
    font-size: 22px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 250px;
  }

  & .p {
    color: #000000;
    font-family: "Swis721 LtCn BT-Light", Helvetica;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 250px;
  }
`;

export const GroupSubsection = (): React.JSX.Element => {
  return (
    <StyledGroupSubsection className="group-subsection">
      <div className="group-3">
        <div className="frame-2">
          <div className="img-wrapper">
            <img
              className="img-2"
              alt="Morale"
              src="https://c.animaapp.com/fkOynynE/img/morale@2x.png"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">
              ÉTICA, RESPEITO
              <br />E VALORES
            </div>
          </div>
          <div className="div-wrapper">
            <p className="p">
              A base para todas as nossas decisões, garantindo soluções
              duradouras e justas.
            </p>
          </div>
        </div>
        <div className="frame-3">
          <div className="img-wrapper">
            <img
              className="img-2"
              alt="Handshake"
              src="https://c.animaapp.com/fkOynynE/img/handshake@2x.png"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">
              COLABORAÇÃO
              <br />E PROATIVIDADE
            </div>
          </div>
          <div className="div-wrapper">
            <p className="p">
              Valorizamos o trabalho em equipe, onde todos têm a oportunidade de
              contribuir para o sucesso comum.
            </p>
          </div>
        </div>
        <div className="frame-3">
          <div className="img-wrapper">
            <img
              className="img-2"
              alt="Project manager"
              src="https://c.animaapp.com/fkOynynE/img/project-manager@2x.png"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">
              LIBERDADE COM
              <br />
              RESPONSABILIDADE
            </div>
          </div>
          <div className="div-wrapper">
            <p className="p">
              Incentivamos a autonomia em suas ações, com responsabilidade e
              foco nos resultados.
            </p>
          </div>
        </div>
        <div className="frame-3">
          <div className="img-wrapper">
            <img
              className="img-2"
              alt="Customer insights"
              src="https://c.animaapp.com/fkOynynE/img/customer-insights-manager@2x.png"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">
              DESAFIAR O<br />
              STATUS QUO
            </div>
          </div>
          <div className="div-wrapper">
            <p className="p">
              Estamos sempre em busca de novas soluções, melhores processos e
              mais eficiência.
            </p>
          </div>
        </div>
      </div>
    </StyledGroupSubsection>
  );
};
