import styled from "styled-components/macro";
import Comment from "./Comment";

const Container = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  color: var(--lighterNavyBlue);
`;

// let commentCount =
//   data.length === 1 ? "red" : task.priority === 2 ? "yellow" : "green";
// {data ? data.length === 1`${data.length} Comments` : "0 Comments"}

const CommentList = ({ data }) => {
  return (
    <Container>
      <Heading>
        {data
          ? data.length === 1
            ? "1 Comment"
            : `${data.length} Comments`
          : null}
      </Heading>
      {data
        ? data.map((comment, index) => {
            return <Comment comment={comment} key={index} />;
          })
        : null}
    </Container>
  );
};

export default CommentList;
