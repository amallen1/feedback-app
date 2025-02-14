import { Search } from "../../styles/sidebarStyles";
import { useSelector, useDispatch } from "react-redux";
import { FilterButton } from "../../styles/reusable/Button";
import { categorySelected } from "../../features/feedbacks/categoriesSlice";

const Sidebar = () => {
  //gets all the categories from redux store
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const buttons = categories.map((category, index) => {
    return (
      <FilterButton
        onClick={() => dispatch(categorySelected(category.name))}
        aria-pressed={category.selected}
        key={index}
        selected={category.selected}
      >
        {category.name}
      </FilterButton>
    );
  });

  return <Search>{buttons}</Search>;
};

export default Sidebar;
