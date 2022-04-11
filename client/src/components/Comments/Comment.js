import React from "react";
import styled from "styled-components/macro";

const CommentContainer = styled.div`
  font-size: 13px;
  color: var(--dullGray);
  margin: 1.5rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #8c92b33e;

  ${({ padding }) =>
    padding &&
    `  padding-left: 1.5rem;
    `}
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h5 {
    color: var(--lighterNavyBlue);
  }

  p {
    font-size: 13px;
    color: var(--dullGray);
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  margin-left: auto;
  color: var(--royalBlue);
  font-weight: 600;

  :focus {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  color: var(--brightPurple);
  margin-right: 5px;
  font-weight: 700;
`;

const Comment = ({ comment }) => {
  //   console.log("comment");
  //   console.log(comment);
  return (
    <CommentContainer>
      <CommentHeader>
        {/* <Image src={`.${comment.user.image}`} alt="image of person" /> */}
        <div>
          <h5>{comment.user.name}</h5>
          <p>@{comment.user.username}</p>
        </div>

        <Button>Reply</Button>
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
