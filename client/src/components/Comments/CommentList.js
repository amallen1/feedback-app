import Comment from "./Comment";
import { Container, Heading } from "../../styles/Comments/commentStyles";
import { useGetCommentsQuery } from "../../services/feedbacks";

const CommentList = ({ feedback }) => {
  const { data: comments } = useGetCommentsQuery(feedback["_id"]);
  return (
    <Container>
      <Heading>
        {comments
          ? comments.length === 1
            ? "1 Comment"
            : `${comments.length} Comments`
          : null}
      </Heading>
      {comments &&
        comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
    </Container>
  );
};

export default CommentList;
