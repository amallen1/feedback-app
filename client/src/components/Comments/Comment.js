import {
  CommentContainer,
  CommentHeader,
  Button,
} from "../../styles/Comments/commentStyles";

const Comment = ({ comment }) => {
  return (
    <CommentContainer>
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
    </CommentContainer>
  );
};

export default Comment;
