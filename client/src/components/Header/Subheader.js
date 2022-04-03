import React, { useState } from "react";
import styled from "styled-components/macro";
import { StyledButton } from "../../styles/reusable/Button";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/window";
import CommentDropdown from "../CommentDropdown";
import { useGetAllSuggestionsQuery } from "../../services/services";

const SubheaderContainer = styled.div`
  display: flex;
  background-color: var(--darkButtonColor);
  color: var(--white);
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem;
  position: relative;

  @media (min-width: 768px) {
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1000px) {
    flex: 1;
    width: 100%;
  }
`;

const Suggestions = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }

  span {
    font-weight: 700;
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
  const [category, setCategory] = useState("Most Upvotes");
  const categories = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  //data is the list of suggestions
  const { data, error, isLoading, refetch } = useGetAllSuggestionsQuery();

  
  return (
    <SubheaderContainer>
      {width >= 768 ? (
        <Suggestions>
          <img src="/assets/suggestions/icon-suggestions.svg" alt="" />
          <span> {data ? data.length : null} Suggestions</span>
        </Suggestions>
      ) : null}

      <Search onClick={() => setIsOpen(!isOpen)}>
        Sort by : <span>{category}</span>
      </Search>

      <CommentDropdown
        categories={categories}
        setCategory={setCategory}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <StyledButton plus="true" as={Link} to="/newfeedback">
        Add feedback
      </StyledButton>
    </SubheaderContainer>
  );
};

export default Subheader;
