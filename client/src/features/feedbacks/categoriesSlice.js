import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "All", selected: true },
  { name: "UI", selected: false },
  { name: "UX", selected: false },
  { name: "Enhancement", selected: false },
  { name: "Bug", selected: false },
  { name: "Feature", selected: false },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categorySelected(state, action) {
      state.forEach((item) => (item.selected = false));
      const selectedCat = state.find((el) => el.name === action.payload);
      if (selectedCat) {
        selectedCat.selected = true;
      }
    },
  },
});

export const { categorySelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;
