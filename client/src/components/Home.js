import React from "react";
import SuggestionsHeader from "./Header/SuggestionsHeader";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 768px) {
    padding: 3.5rem 2.4375rem;
  }
`;

const Home = () => {
  return (
    <Container>
      <SuggestionsHeader />
    </Container>
  );
};

export default Home;
