import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    feedbackAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { feedbackAdded } = feedbacksSlice.actions;

export default feedbacksSlice.reducer;
