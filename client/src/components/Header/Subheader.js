import React, { useState } from "react";
import styled from "styled-components/macro";
import { StyledButton } from "../../styles/reusable/Button";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/window";

const SubheaderContainer = styled.div`
  display: flex;
  background-color: var(--darkButtonColor);
  color: var(--white);
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem;

  @media (min-width: 768px) {
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1000px) {
    flex: 1;
    width: 100%;
  }
`;

const Search = styled.p`
  font-size: 0.8125rem;
  cursor: pointer;
  
  ::after {
    content: url("/assets/shared/white-arrow.svg");
    margin-left: 7px;
  }

  span {
    font-weight: 700;
  }
`;

const Subheader = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <SubheaderContainer>
      {/* this is going to keep track of suggestions */}
      {width >= 768 ? "6 suggestions" : null}
      <Search onClick={() => setIsOpen(!isOpen)}>
        Sort by : <span>Most Upvotes</span>
      </Search>

      <StyledButton plus="true" as={Link} to="/home">
        Add feedback
      </StyledButton>
    </SubheaderContainer>
  );
};

export default Subheader;
