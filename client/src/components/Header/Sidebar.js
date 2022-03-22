import React from "react";
import { FilterButton } from "../../styles/sharedStyles";
import { Search } from "../../styles/sidebarStyles";

const Sidebar = () => {
  return (
    <Search>
      <FilterButton>All</FilterButton>
      <FilterButton>UI</FilterButton>
      <FilterButton>UX</FilterButton>
      <FilterButton>Enhancement</FilterButton>
      <FilterButton>Bug</FilterButton>
      <FilterButton>Feature</FilterButton>
    </Search>
  );
};

export default Sidebar;
