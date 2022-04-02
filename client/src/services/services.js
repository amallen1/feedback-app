import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const suggestionApi = createApi({
  reducerPath: "suggestionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getAllSuggestions: builder.query({
      query: () => "/get_suggestions",
    }),
  }),
});
//fetches the feedback data

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSuggestionsQuery } = suggestionApi;
