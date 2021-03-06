import styled, { css } from "styled-components/macro";
import { Input, TextArea } from "../styles/reusable/Forms";

export const StyledButton = styled.button`
  background-color: var(--brightPurple);
  color: var(--buttonTextColor);
  padding: 0.625rem 1rem;
  font-weight: 700;
  font-size: 0.8125rem;
  display: inline-block;
  border-radius: 10px;
  text-align: center; //need for button in newfeedback
  cursor: pointer;

  ${({ plus }) =>
    plus &&
    `
      ::before {
        content: url("/assets/shared/icon-plus.svg");
        margin-right: 4px;
      }
    `}
  ${({ margin }) => margin && { marginBottom: "1rem" }}
  
  :hover {
    background-color: var(--hoverPurple);
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const Nav = styled.div`
  margin-bottom: 3.5em;
`;

export const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 2.75em 1.5em 0.5rem 1.5em;
  position: relative;
  /* max-width: 540px; */
  margin: 0 auto;
`;

export const Image = styled.img`
  position: absolute;
  top: -28px;
`;

export const Title = styled.h3`
  margin-bottom: 1.5rem;
  color: var(--lighterNavyBlue);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--gray);
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: var(--lighterNavyBlue);
  margin-bottom: 0.1875rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

export const Sublabel = styled.label`
  margin-bottom: 1rem;
  color: var(--dullGray);
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const TextInput = styled(Input)`
  ${({ error }) =>
    error &&
    css`
      :focus {
        outline: 1px solid red;
      }
    `}

  @media (min-width: 768px) {
    font-size: 0.9375rem;
  }
`;

export const DescInput = styled(TextArea)`
  height: 120px;
  padding: 1rem;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
      :focus {
        border: none;
      }
    `}

  @media (min-width: 768px) {
    font-size: 0.9375rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;

    button:nth-child(1) {
      order: 1;
      margin-left: 1rem;
    }
    a:nth-child(2) {
      order: -2;
    }

    margin-left: auto;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;
