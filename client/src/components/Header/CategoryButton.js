import React from "react";
import { FilterButton } from "../../styles/reusable/Button";
import { useDispatch } from "react-redux";
import { categorySelected } from "../../features/feedbacks/categoriesSlice";

const CategoryButton = ({ category, selected }) => {
  const dispatch = useDispatch();

  return (
    <FilterButton
      selected={selected}
      onClick={() => dispatch(categorySelected(category))}
    >
      {category}
    </FilterButton>
  );
};

export default CategoryButton;
