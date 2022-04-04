import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "Most Upvotes" };

const sortingCategorySlice = createSlice({
  name: "sortingCategory",
  initialState,
  reducers: {
    changeSortingCategory(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeSortingCategory } = sortingCategorySlice.actions;

export default sortingCategorySlice.reducer;
