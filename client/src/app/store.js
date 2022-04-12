import { configureStore } from "@reduxjs/toolkit";
import { feedbackApi } from "../services/feedbacks";
import categoryReducer from "../features/feedbacks/categoriesSlice";
import sortingCategoryReducer from "../features/feedbacks/sortSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    categories: categoryReducer,
    sortingCategories: sortingCategoryReducer,
    user: userReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedbackApi.middleware),
});
