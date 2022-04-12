import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api`,
  }),
  tagTypes: ["Suggestions", "Comments"],
  endpoints: (builder) => ({
    getAllSuggestions: builder.query({
      query: () => "/get_suggestions",
      providesTags: [{ type: "Suggestions", id: "LIST" }],
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
    getComments: builder.query({
      query: (id) => ({ url: `get_comments/${id}` }),
      providesTags: () => [{ type: "Comments", id: "LIST" }],
    }),
    addComment: builder.mutation({
      query(body) {
        return {
          url: `add_comment`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllSuggestionsQuery,
  useAddSuggestionMutation,
  useAddCommentMutation,
  useGetCommentsQuery,
} = feedbackApi;
