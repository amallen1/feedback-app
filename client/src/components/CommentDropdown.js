import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllSuggestionsQuery } from "../services/suggestions";
import { changeSortingCategory } from "../features/feedbacks/sortSlice";

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 3.45rem;
  width: 255px;
  background-color: var(--white);
  border-radius: 10px;
  color: var(--dullGray);
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.3505);

  @media (min-width: 768px) {
    top: 3.8rem;
    left: 33%;
  }
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

const Dropdown = ({ categories, setCategory, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const onOptionClicked = (value) => {
    // console.log(value);
    setIsOpen(false);
    setCategory(value);
    dispatch(changeSortingCategory(value));
  };

  const items = categories.map((category, index) => {
    return (
      <ListItem key={index} onClick={() => onOptionClicked(category)}>
        {category}
      </ListItem>
    );
  });

  return <DropdownContainer>{isOpen && <ul>{items}</ul>}</DropdownContainer>;
};

export default Dropdown;
