import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FilterButton, UpvoteButton } from "../../styles/reusable/Button";
import {
  useGetCommentsQuery,
  useUpvoteSuggestionMutation,
  useDownvoteSuggestionMutation,
} from "../../services/feedbacks";
import {
  Card,
  StyledLink,
  MainInfo,
  Title,
  Description,
  CommentButton,
  UpvoteDiv,
  CommentDiv,
} from "../../styles/Feedback/feedbackStyles";

const Feedback = ({ feedback }) => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(false);

  const [upvote] = useUpvoteSuggestionMutation();
  const [downvote] = useDownvoteSuggestionMutation();

  const username = useSelector((state) => state.user.value.username);

  const toggleVote = () => {
    const data = {
      id: feedback["_id"],
      body: {
        username: username,
      },
    };

    if (feedback.isLiked) {
      setSelected(!selected);
      console.log("downvoting");
      downvote(data).catch((error) => console.log(error));
    } else {
      setSelected(!selected);
      console.log("upvoting");
      upvote(data)
        .then((res) => {
          // if (res.data.likes.includes(username)) {
          //   setSelected(true);
          // }
        })
        .catch((error) => console.log(error));
    }
  };

  const { data } = useGetCommentsQuery(feedback["_id"]);

  return (
    <Card>
      {pathname === "/" || pathname === "/roadmap" ? (
        <StyledLink to={`/feedback/${feedback["_id"]}`} state={feedback["_id"]}>
          <MainInfo>
            <Title>{feedback.title}</Title>
            <Description>{feedback.description}</Description>
            <FilterButton>{feedback.category}</FilterButton>
          </MainInfo>
        </StyledLink>
      ) : (
        <MainInfo>
          <Title>{feedback.title}</Title>
          <Description>{feedback.description}</Description>
          <FilterButton>{feedback.category}</FilterButton>
        </MainInfo>
      )}

      <UpvoteDiv>
        <UpvoteButton onClick={() => toggleVote()} selected={feedback.isLiked}>
          {feedback.upvotes}
        </UpvoteButton>
      </UpvoteDiv>

      <CommentDiv>
        <CommentButton>{data ? data.length : 0}</CommentButton>
      </CommentDiv>
    </Card>
  );
};

export default Feedback;
