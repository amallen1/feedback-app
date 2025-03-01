import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface CategoryState {
  name: string;
  selected: boolean;
}

// Define the initial state using that type
const initialState: CategoryState[] = [
  { name: "All", selected: true },
  { name: "UI", selected: false },
  { name: "UX", selected: false },
  { name: "Enhancement", selected: false },
  { name: "Bug", selected: false },
  { name: "Feature", selected: false },
];

const categoriesSlice = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    categorySelected(state, action: PayloadAction<string>) {
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
