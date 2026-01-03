// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { Feedback } from "../types/FeedbackInterface";

export const handlers = [
  //Request handler for GET request for all suggestions
  http.get("http://localhost/api/get_suggestions", () => {
    return HttpResponse.json<Feedback[]>([
      {
        category: "All",
        comments: [],
        title: "Test title",
        upvotes: 0,
        status: "Suggestion",
        description: "Test description",
        isLiked: false,
        likes: [],
      },
    ]);
  }),
];
