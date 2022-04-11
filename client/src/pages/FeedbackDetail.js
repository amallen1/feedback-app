import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import ContainerDiv from "../styles/reusable/Container";
import Feedback from "../components/Feedback/Feedback";
import styled from "styled-components/macro";

import { BackButton } from "../styles/reusable/Button";
import { EditButton } from "../styles/reusable/Button";
import { Link } from "react-router-dom";

import { StyledButton } from "../styles/reusable/Button";
import { TextArea } from "../styles/reusable/Forms";
import CommentList from "../components/Comments/CommentList";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../services/suggestions";

const Container = styled.div`
  padding: 2.125rem 1.5rem;
  max-width: 689px;
  margin: 0 auto;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const AddComment = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;

  h3 {
    margin-bottom: 1.5rem;
    color: var(--lighterNavyBlue);
    font-size: 1.125rem;
  }
`;

const EndSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextInput = styled(TextArea)`
  padding: 1rem 1rem 1rem;
  height: 80px;
`;

export const FeedbackDetail = () => {
  const { state } = useLocation();

  const MAX_LENGTH = 250;
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(MAX_LENGTH);

  const [addComment] = useAddCommentMutation();

  const handleInput = (e) => {
    const input = e.target.value;
    setMessage(input);
    setCharCount(MAX_LENGTH - input.length);
  };

  const submitComment = () => {
    console.log("ADDING COMMENT");

    addComment({
      title: state.title,
      message: message,
      name: "Guest",
      username: "GuestUser",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const { data, isSuccess, isFetching, refetch } = useGetCommentsQuery(
    state["_id"]
  );
  console.log(data);
  console.log(isSuccess);
  return (
    <Container>
      <Nav>
        <BackButton as={Link} to="/" color="var(--dullGray)">
          Go Back
        </BackButton>
        <EditButton
        //   as={Link}
        //   to={`/edit-feedback/${id}`}
        >
          Edit Feedback
        </EditButton>
      </Nav>

      <Feedback feedback={state} />

      <CommentList data={data} />

      <AddComment>
        <h3>Add comment</h3>

        <TextInput
          name="message"
          onChange={handleInput}
          value={message}
          placeholder="Type your comment here"
          maxLength={MAX_LENGTH}
        />
        <EndSection>
          <p>{charCount} characters left</p>
          <button onClick={() => submitComment()}>Post Comment</button>
        </EndSection>
      </AddComment>
    </Container>
  );
};
