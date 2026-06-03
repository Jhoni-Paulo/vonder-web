import styled from "styled-components";

const Header = styled.header`
  background-color: transparent;
  height: 225px;
  left: 0;
  position: absolute;
  top: -51px;
  width: 100vw;
  max-width: 100vw;
`;

const Rectangle = styled.div`
  background-color: #efefef;
  border-radius: 0px 0px 15px 15px;
  height: 225px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  max-width: 100vw;
`;

const Div = styled.div`
  background-color: #0e0e0e;
  border-radius: 0px 0px 15px 15px;
  height: 91px;
  left: 0;
  position: absolute;
  top: 41px;
  width: 100vw;
  max-width: 100vw;
`;

const Camada = styled.img`
  height: 22px;
  left: 1269px;
  position: absolute;
  top: 70px;
  width: 22px;
`;

const Img = styled.img`
  height: 49px;
  left: 37px;
  position: absolute;
  top: 156px;
  width: 176px;
`;

const TextWrapper = styled.div`
  color: #f6be00;
  font-family: "Inter", Helvetica;
  font-size: 17px;
  font-weight: 700;
  left: 760px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 70px;
`;

const TextWrapper2 = styled(TextWrapper)`
  left: 976px;
`;

const TextWrapper3 = styled(TextWrapper)`
  left: 1103px;
`;

const TextWrapper4 = styled(TextWrapper)`
  left: 1295px;
`;

const Vector = styled.img`
  height: 23.11%;
  left: 95.17%;
  position: absolute;
  top: 76.89%;
  width: 4.83%;
`;

export function HeaderSubsection(){
  return (
    <Header>
      <Rectangle />

      <Div />

      <Camada
        alt="Camada"
        src="https://c.animaapp.com/7nCxdmTD/img/camada-1.svg"
      />

      <Img
        alt="Camada"
        src="https://c.animaapp.com/7nCxdmTD/img/camada-1-1.svg"
      />

      <TextWrapper>Assistência Técnica</TextWrapper>

      <TextWrapper2>Garantias</TextWrapper2>

      <TextWrapper3>Atendimento</TextWrapper3>

      <TextWrapper4>PT</TextWrapper4>

      <Vector
        alt="Vector"
        src="https://c.animaapp.com/7nCxdmTD/img/vector.svg"
      />
    </Header>
  );
};
