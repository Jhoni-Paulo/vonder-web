import styled from "styled-components";

export const LogoFooter = styled.img`
  margin-bottom: 20px !important;
`;

export const FooterContainer = styled.div`
  padding: 0 4% 6% !important;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 6% 6% !important;
  }
`;

export const ColumnFooter = styled.div`
  h3{
  margin-bottom: 6% !important;
}
`;

export const ColumnFooter2 = styled(ColumnFooter)`

`;
export const ColumnFooter3 = styled(ColumnFooter)`

`;
export const ColumnFooter4 = styled(ColumnFooter)`

`;

export const HorarioAtendimento = styled.h4`
  margin-top: 10% !important;

  @media (max-width: 768px) {
    margin-top: 28px !important;
  }
`;

export const OvdLogoFooter = styled.img`
  margin-top: 20% !important;

  @media (max-width: 768px) {
    margin-top: 32px !important;
  }
`;

export const FooterBottom = styled.div`
  padding: 1% 0 !important;
`;
