import {
  Card,
  MainInfo,
  Title,
  Description,
  CommentButton,
  UpvoteDiv,
  CommentDiv,
} from "../../styles/Feedback/feedbackStyles";
import { FilterButton, UpvoteButton } from "../../styles/reusable/Button";
const FeedbackCard = ({ feedback, toggleVote, commentData }) => {
  return (
    <Card>
      <MainInfo>
        <Title>{feedback.title}</Title>
        <Description>{feedback.description}</Description>
        <FilterButton>{feedback.category}</FilterButton>
      </MainInfo>

      <UpvoteDiv>
        <UpvoteButton
          onClick={toggleVote}
          selected={feedback.isLiked}
        >
          {feedback.upvotes}
        </UpvoteButton>
      </UpvoteDiv>

      <CommentDiv>
        <CommentButton>{commentData ? commentData.length : 0}</CommentButton>
      </CommentDiv>
    </Card>
  );
};
export default FeedbackCard;
