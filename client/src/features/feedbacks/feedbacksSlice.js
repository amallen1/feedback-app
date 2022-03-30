import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "bug",
    comments: [],
    description:
      "Screenshots of solutions with animations don’t display correctly.",
    id: 11,
    status: "in-progress",
    title: "Animated solution screenshots",
    upvotes: 9,
    _id: "62412e01a74c3f0bc0da4512",
  },
  {
    category: "enhancement",
    comments: [],
    description: "Please clean up your code",
    id: 13,
    status: "suggestion",
    title: "Code is messay",
    upvotes: 49,
    _id: "63512e234234320da45452",
  },
];

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    feedbackAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { feedbackAdded } = feedbacksSlice.actions

export default feedbacksSlice.reducer;
