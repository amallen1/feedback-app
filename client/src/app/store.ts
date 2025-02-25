import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/feedbacks/categoriesSlice";
import sortOptionReducer from "../features/feedbacks/sortSlice";
import userReducer from "../features/user/userSlice";
import { feedbackApi } from "../services/feedbacks";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    categories: categoryReducer,
    sortOption: sortOptionReducer,
    user: userReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedbackApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
