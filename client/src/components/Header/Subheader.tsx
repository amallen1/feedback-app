import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import useWindowDimensions from "../../hooks/window";
import { useGetAllSuggestionsQuery } from "../../services/feedbacks";
import { StyledButton } from "../../styles/reusable/Button";
import SortOptionsDropdown from "../SortOptionsDropdown";

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

const FilterButton = styled.button<{ $isDropdownOpen: boolean }>`
  background-color: transparent;
  color: var(--white);
  font-size: 0.8125rem;
  cursor: pointer;

  &::after {
    content: ${(props) =>
      props.$isDropdownOpen
        ? `url("/assets/shared/white-up-arrow.svg")`
        : `url("/assets/shared/white-arrow.svg")`};
    margin-left: 7px;
  }

  &:hover {
    opacity: 75%;
  }

  span {
    font-weight: 700;
  }
`;

const Subheader = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const sortOption = useAppSelector((state) => state.sortOption.value);
  const feedbackCategory = useAppSelector(
    (state) =>
      state.categories.find(({ selected }) => selected === true)?.name ?? "All"
  );

  const { data } = useGetAllSuggestionsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data:
        feedbackCategory === "All"
          ? data
          : data?.filter((feedback) => feedback.category === feedbackCategory),
    }),
  });

  return (
    <SubheaderContainer>
      {width >= 768 ? (
        <Suggestions>
          <img
            src="/assets/suggestions/icon-suggestions.svg"
            alt="Lightbulb icon"
          />
          <span> {data ? data.length : 0} Suggestions</span>
        </Suggestions>
      ) : null}

      <FilterButton onClick={() => setIsOpen(!isOpen)} $isDropdownOpen={isOpen}>
        Sort by : <span>{sortOption}</span>
      </FilterButton>

      {isOpen && <SortOptionsDropdown setIsOpen={setIsOpen} />}

      <StyledButton $plus as={Link} to="/newfeedback">
        Add Feedback
      </StyledButton>
    </SubheaderContainer>
  );
};

export default Subheader;
