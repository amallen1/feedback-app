import { configureStore } from "@reduxjs/toolkit";

import feedbacksReducer from "./features/feedbacks/feedbacksSlice";

// This creates a Redux store, and also automatically configure
// the Redux DevTools extension so that you can inspect the store while developing.
export default configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
  },
});
