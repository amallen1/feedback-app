import React from "react";
import styled from "styled-components/macro";

//currently for new feedback
const Container = styled.div`
  padding: 2.125rem 1.5rem;
  max-width: 540px;
  margin: 0 auto;
`;

//reusable container, optimized for
const ContainerDiv = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerDiv;
