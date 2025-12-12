import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FeedbackCard from "./FeedbackCard";
import { StyledLink } from "../../styles/Feedback/feedbackStyles";
import {
  useGetCommentsQuery,
  useUpvoteSuggestionMutation,
  useDownvoteSuggestionMutation,
} from "../../services/feedbacks";

const Feedback = ({ feedback }) => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(false);
  const [upvote] = useUpvoteSuggestionMutation();
  const [downvote] = useDownvoteSuggestionMutation();
  const username = useSelector((state) => state.user.value.username);

  const toggleVote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = {
      id: feedback["_id"],
      body: {
        username: username,
      },
    };

    if (feedback.isLiked) {
      setSelected(!selected);
      downvote(data).catch((error) => console.log(error));
    } else {
      setSelected(!selected);
      upvote(data)
        .then((res) => {
          // if (res.data.likes.includes(username)) {
          //   setSelected(true);
          // }
        })
        .catch((error) => console.log(error));
    }
  };

  const { data: commentData } = useGetCommentsQuery(feedback["_id"]);

  return (
    <>
      {pathname === "/" || pathname === "/roadmap" ? (
        <StyledLink to={`/feedback/${feedback["_id"]}`} state={feedback["_id"]}>
          <FeedbackCard
            feedback={feedback}
            toggleVote={toggleVote}
            commentData={commentData}
          />
        </StyledLink>
      ) : (
        <FeedbackCard
          feedback={feedback}
          toggleVote={toggleVote}
          commentData={commentData}
        />
      )}
    </>
  );
};

export default Feedback;
