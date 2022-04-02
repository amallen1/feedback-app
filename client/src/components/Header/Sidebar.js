import React from "react";
import { Search } from "../../styles/sidebarStyles";
import CategoryButton from "./CategoryButton";
import { useSelector } from "react-redux";

const Sidebar = () => {
  //gets all the categories from redux store
  const categories = useSelector((state) => state.categories);

  const buttons = categories.map((category, index) => {
    return (
      <CategoryButton
        aria-pressed={category.selected}
        key={index}
        category={category.name}
        selected={category.selected}
      />
    );
  });

  return <Search>{buttons}</Search>;
};

export default Sidebar;
