import React from "react";
import SuggestionsHeader from "./Header/SuggestionsHeader";
import styled from "styled-components/macro";
import Subheader from "./Header/Subheader";

const HomeContainer = styled.div`
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
    column-gap: 3rem;
  }
`;

const FirstSection = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SecondSection = styled.div`
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <FirstSection>
        <SuggestionsHeader />
      </FirstSection>

      <SecondSection>
        <Subheader />
        feedback Content
      </SecondSection>
    </HomeContainer>
  );
};

export default Home;
