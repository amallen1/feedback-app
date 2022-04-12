import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const suggestionApi = createApi({
  reducerPath: "suggestionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://productfeedback-app.herokuapp.com/api",
  }),
  tagTypes: ["Suggestions"],
  endpoints: (builder) => ({
    getAllSuggestions: builder.query({
      query: () => "/get_suggestions",
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Suggestions", id })),
              { type: "Suggestions", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Suggestions', id: 'LIST' }` is invalidated
            [{ type: "Suggestions", id: "LIST" }],
    }),
    addSuggestion: builder.mutation({
      query(body) {
        return {
          url: `add_suggestion`,
          method: "POST",
          body,
        };
      },
      // Invalidates all Suggestion-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: "Suggestions", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSuggestionsQuery, useAddSuggestionMutation } =
  suggestionApi;
