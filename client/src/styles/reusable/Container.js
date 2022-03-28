import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2.125rem 1.5rem;
`;

//reusable container, optimized for
const ContainerDiv = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerDiv;
