import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { categorySelected } from "../../features/feedbacks/categoriesSlice";
import { FilterButton } from "../../styles/reusable/Button";

const Menu = styled.div`
  background-color: var(--white);
  padding: 1.5rem 1rem 2.25rem 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
  }
`;

const CategoryMenu = () => {
  const categories = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const buttons = categories.map((category) => {
    return (
      <FilterButton
        onClick={() => dispatch(categorySelected(category.name))}
        aria-pressed={category.selected}
        key={category.name}
        selected={category.selected}
      >
        {category.name}
      </FilterButton>
    );
  });

  return <Menu>{buttons}</Menu>;
};

export default CategoryMenu;
