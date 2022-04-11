import React from "react";
import styled from "styled-components/macro";
import Comment from "./Comment";
import { useGetCommentsQuery } from "../../services/suggestions";

const Container = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  color: var(--lighterNavyBlue);
`;

const CommentList = ({ data }) => {
  return (
    <Container>
      <Heading>{data ? `${data.length} Comments` : "0 Comments"}</Heading>
      {data
        ? data.map((comment, index) => {
            return <Comment comment={comment} key={index} />;
          })
        : null}
    </Container>
  );
};

export default CommentList;
