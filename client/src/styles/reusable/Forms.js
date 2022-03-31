import styled from "styled-components/macro";

export const Input = styled.input`
  padding: 0.9375rem 1rem 0.875rem;
  width: 100%;
  background-color: var(--offWhite);
  border: none;
  border-radius: 5px;
  font-family: inherit;
  color: var(--lighterDarkBlue);

  &:focus {
    outline-style: solid;
    outline-color: var(--royalBlue);
    outline-width: thin;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: var(--offWhite);
  border: none;
  border-radius: 5px;
  font-family: inherit;
  color: var(--lighterDarkBlue);
  resize: none;

  &:focus {
    outline-style: solid;
    outline-color: var(--royalBlue);
    outline-width: thin;
  }
`;
