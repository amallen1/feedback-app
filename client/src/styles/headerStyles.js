import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
  }

  @media (min-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Header = styled.header`
  background-image: url("/assets/suggestions/mobile/background-header.png");
  background-size: cover;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex: 1;
    padding: 1rem 1.5rem 1.5rem;
    border-radius: 10px;
    background-image: url("/assets/suggestions/tablet/background-header.png");
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);

  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 0.9375em;
  letter-spacing: -0.19px;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 29px;
    letter-spacing: -0.25px;
  }

  @media (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`;

export const SecondaryTitle = styled.span`
  font-size: 0.8125em;
  font-weight: 500;
  opacity: 75%;

  @media (min-width: 768px) {
    font-size: 0.9375rem;
    line-height: 22px;
  }
`;

export const Icon = styled.img`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
