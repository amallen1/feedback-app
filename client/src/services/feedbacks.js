import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.REACT_APP_BASE_URL}/api`,
  }),
  tagTypes: ["Suggestions", "Comments", "Planned", "In-progress", "Live"],
  endpoints: (builder) => ({
    getAllSuggestions: builder.query({
      query: () => "/get_suggestions",
      providesTags: [{ type: "Suggestions", id: "LIST" }],
    }),
    getSingleSuggestion: builder.query({
      query: (id) => ({ url: `/get_single_suggestion/${id}` }),
      providesTags: [{ type: "Suggestions", id: "LIST" }],
    }),
    getRoadmapFeedbacks: builder.query({
      query: () => "/get_feedbacks",
      providesTags: [
        { type: "Suggestions", id: "LIST" },
        "Planned",
        "In-progress",
        "Live",
      ],
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
    updateSuggestion: builder.mutation({
      query(data) {
        const { id, body } = data;
        return {
          url: `update_suggestion/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [
        { type: "Suggestions", id: "LIST" },
        "Planned",
        "In-progress",
        "Live",
      ],
    }),
    deleteSuggestion: builder.mutation({
      query(id) {
        return {
          url: `delete_suggestion/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [
        { type: "Suggestions", id: "LIST" },
        "Planned",
        "In-progress",
        "Live",
      ],
    }),
    upvoteSuggestion: builder.mutation({
      query(data) {
        const { id, body } = data;
        return {
          url: `${id}/upvote`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [{ type: "Suggestions", id: "LIST" }],
    }),

    downvoteSuggestion: builder.mutation({
      query(data) {
        const { id, body } = data;
        return {
          url: `${id}/downvote`,
          method: "PUT",
          body,
        };
      },
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
    deleteComment: builder.mutation({
      query(data) {
        const { postId, commentId } = data;
        return {
          url: `delete_comment/${postId}/${commentId}`,
          method: "DELETE",
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
  useGetSingleSuggestionQuery,
  useGetRoadmapFeedbacksQuery,
  useAddSuggestionMutation,
  useUpdateSuggestionMutation,
  useDeleteSuggestionMutation,
  useUpvoteSuggestionMutation,
  useDownvoteSuggestionMutation,
  useAddCommentMutation,
  useGetCommentsQuery,
  useDeleteCommentMutation,
} = feedbackApi;
