import styled from "styled-components/macro";

// Styles for Login.js and SignUp.js

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(173, 31, 234);
  background: linear-gradient(
    30deg,
    rgba(173, 31, 234, 0.6237088585434174) 0%,
    rgba(253, 29, 29, 0.41082370448179273) 50%,
    rgba(252, 176, 69, 0.6265099789915967) 100%
  );
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  padding: 1rem;
  text-align: center;
  box-shadow: 8px 3px 25px -5px rgba(0, 0, 0, 0.55);
`;

export const Title = styled.h1`
  color: var(--lightDarkNavy);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const FormTitle = styled.h2`
  font-size: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0rem;

  label {
    text-align: left;
  }
  input {
    padding: 0.5rem;
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
`;

export const FormButton = styled.button`
  background-color: var(--brightPurple);
  border-radius: 10px;
  border: none;
  padding: 0.75rem;
  color: var(--buttonTextColor);
  font-weight: 700;

  :hover {
    background-color: var(--hoverPurple);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  a:nth-child(1) {
    margin-bottom: 0.5rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;
