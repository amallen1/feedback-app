import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";

const DropDownContainer = styled.div`
  position: relative;
`;
const DropDownHeader = styled.div`
  background-color: var(--offWhite);
  padding: 0.8125rem 1.4375rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 13px;

  :after {
    content: url("/assets/shared/icon-arrow-down.svg");
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      &:after {
        content: url("/assets/shared/icon-arrow-up.svg");
      }
    `}

  &:active {
    outline-style: solid;
    outline-color: var(--royalBlue);
    outline-width: thin;
  }

  @media (min-width: 768px) {
    font-size: 0.9375rem;
  }
`;

const DropDownListContainer = styled.div`
  position: absolute;
  top: 49px;
  width: 100%;
  z-index: 15;
  text-decoration: capitalize;
`;
const DropDownList = styled.ul`
  margin: 1em 0;

  background: var(--white);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.3505);
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  cursor: pointer;

  &:last-child {
    border: none;
  }

  :hover {
    color: var(--brightPurple);
  }
`;

const Dropdown = ({ optionsList, setCategory, currOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(currOption);

  useEffect(() => {
    // console.log(selectedOption);
  }, [selectedOption]);

  const select = (value) => {
    setSelectedOption(value); //sets the current option
    setIsOpen(false); //closes the menu
    setCategory(value); //actually sets the category
  };

  const options = optionsList.map((category, index) => {
    return (
      <ListItem key={index} onClick={() => select(category)}>
        {category}
      </ListItem>
    );
  });

  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>{options}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Dropdown;
