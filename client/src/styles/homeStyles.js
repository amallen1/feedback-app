import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 689px;
    margin: 3.5rem auto;
  }

  @media (min-width: 1000px) {
    display: flex;
    max-width: none;
    justify-content: center;
    column-gap: 2rem;
    width: 95%;
  }
`;

export const FirstSection = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
  }

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1100px) {
    max-width: 255px;
  }
`;

export const SecondSection = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 74px;
  }

  @media (min-width: 768px) {
    overflow: initial;
  }

  @media (min-width: 1100px) {
    max-width: 825px;
  }
`;
