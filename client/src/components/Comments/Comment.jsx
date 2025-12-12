import {
  CommentContainer,
  CommentHeader,
  Button,
} from "../../styles/Comments/commentStyles";
import { useDeleteCommentMutation } from "../../services/feedbacks";
import { useSelector } from "react-redux";

const Comment = ({ data, comment }) => {
  const user = useSelector((state) => state.user.value.name);
  const [deleteComment] = useDeleteCommentMutation();

  const remove = () => {
    const info = {
      postId: data["_id"],
      commentId: comment["_id"],
    };
    deleteComment(info)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <CommentContainer>
      <div>
        <CommentHeader>
          {/* <Image src={`.${comment.user.image}`} alt="image of person" /> */}
          <div>
            <h5>{comment.user.name}</h5>
            <p>@{comment.user.username}</p>
          </div>

          {/* TODO: implement replying feature */}
          {/* <Button>Reply</Button> */}
        </CommentHeader>

        {/* {replyingTo ? (
        <p>
          <Span>@{replyingTo}</Span>
          {comment}
        </p>
      ) : null} */}
        <p>{comment.content}</p>
      </div>

      {user === comment.user.name && (
        <div>
          <Button onClick={() => remove()}>
            Delete
          </Button>
        </div>
      )}
    </CommentContainer>
  );
};

export default Comment;
