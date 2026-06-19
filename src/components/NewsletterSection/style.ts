import styled from "styled-components";

export const NewsletterSectionContainer = styled.section`
  padding: 4% !important;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Input = styled.input`
  padding: 1.5% 4% !important;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 1.5% 4% !important;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Terms = styled.div`
  padding: 1.5% 0 !important;
  flex-wrap: nowrap !important;
  align-items: flex-start;

  input {
    transform: scale(1.2);
    flex-shrink: 0;
    margin-top: 4px;

    &:focus {
      outline: none !important;
    }
  }
`;
