import { useEffect, useState } from "react";
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

  const toggleUpvote = () => {
    const data = {
      id: feedback["_id"],
      body: {
        username: username,
      },
    };

    if (selected) {
      // console.log("DOWNVOTING");
      setSelected(!selected);
      downvote(data).catch((error) => console.log(error));
    } else {
      // console.log("UPVOTING");
      setSelected(!selected);
      upvote(data)
        .then((res) => {
          // console.log(res.data.likes.includes(username));
          if (res.data.likes.includes(username)) {
            setSelected(true);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const { data } = useGetCommentsQuery(feedback["_id"]);

  useEffect(() => {
    // setSelected(feedback.likes.includes(username));
  }, []);

  return (
    <Card>
      {pathname === "/" || pathname === "/roadmap" ? (
        <StyledLink to={`/feedback/${feedback["_id"]}`} state={feedback}>
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
        {/* need to make an onclick that increments and decrements count */}
        <UpvoteButton onClick={() => toggleUpvote()} selected={selected}>
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
