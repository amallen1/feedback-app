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
`;

const DropDownListContainer = styled.div`
  position: absolute;
  top: 49px;
  width: 100%;
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

const Dropdown = ({ categories, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState("Feature");

  useEffect(() => {
    // localStorage.getItem("choice");
    console.log(selectedOption);
  }, [selectedOption]);

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    // localStorage.setItem("choice", value);
    setCategory(value);
  };

  const items = categories.map((category, index) => {
    return (
      <ListItem key={index} onClick={() => onOptionClicked(category)}>
        {category}
      </ListItem>
    );
  });

  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} isOpen={isOpen}>
          {selectedOption}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>{items}</DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
  );
};

export default Dropdown;
