import React from "react";
import Feedback from "./Feedback";

import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 2em 1em 2.4375em 1em;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const FeedbackList = () => {
  return (
    <Container>
      {/* map each feedback and it a link */}

      <Feedback />

      <Feedback />
      <Feedback />
    </Container>
  );
};

export default FeedbackList;
