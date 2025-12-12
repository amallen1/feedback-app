import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type SortOptionState =
  | "Most Upvotes"
  | "Least Upvotes"
  | "Most Likes"
  | "Least Likes";

interface SortingState {
  value: SortOptionState;
}

const initialState: SortingState = { value: "Most Upvotes" };

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortOption(state, action: PayloadAction<SortOptionState>) {
      state.value = action.payload;
    },
  },
});

export const { setSortOption } = sortSlice.actions;

export default sortSlice.reducer;
