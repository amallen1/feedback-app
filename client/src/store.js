import { configureStore } from "@reduxjs/toolkit";
import { suggestionApi } from "./services/services";
import categoryReducer from "./features/feedbacks/categoriesSlice";
import feedbacksReducer from "./features/feedbacks/feedbacksSlice";

// This creates a Redux store, and also automatically configure
// the Redux DevTools extension so that you can inspect the store while developing.
export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [suggestionApi.reducerPath]: suggestionApi.reducer,
    categories: categoryReducer,
    feedbacks: feedbacksReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(suggestionApi.middleware),
});
