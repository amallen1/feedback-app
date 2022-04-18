import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 689px;
    margin: 3.5rem auto;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    max-width: none;
    justify-content: center;
    column-gap: 2rem;
    width: 95%;
  }
`;

export const FirstSection = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1100px) {
    max-width: 255px;
  }
`;

export const SecondSection = styled.div`
  height: inherit;
  width: 100%;
  overflow: scroll;

  @media (min-width: 768px) {
    overflow: initial;
  }

  @media (min-width: 1100px) {
    max-width: 825px;
  }
`;
