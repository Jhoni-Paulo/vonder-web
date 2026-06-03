import styled from "styled-components";

export const NewsletterSectionContainer = styled.section`
  padding: 4% !important;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Input = styled.input`
  padding: 1.5% 4% !important;
`;

export const Button = styled.button`
  padding: 1.5% 4% !important;
`;

export const Terms = styled.div`
  padding: 1.5% 0 !important;

  input {
    transform: scale(1.2);

    &:focus {
      outline: none !important;
    }
  }
`;
