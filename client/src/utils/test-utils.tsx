import { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/feedbacks/categoriesSlice";
import sortingCategoryReducer from "../features/feedbacks/sortSlice";
import userReducer from "../features/user/userSlice";
import { feedbackApi } from "../services/feedbacks";
import { RootState, AppStore } from "../app/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

// Helper function to create a new store for each test (IMPORTANT!)
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: {
      [feedbackApi.reducerPath]: feedbackApi.reducer, // Include your API slice reducer
      categories: categoryReducer, // Import reducers
      sortingCategories: sortingCategoryReducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(feedbackApi.middleware),
    preloadedState,
  });
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
