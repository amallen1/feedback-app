import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { Button, BackButton, EditButton } from "../styles/reusable/Button";
import { TextArea } from "../styles/reusable/Forms";
import Feedback from "../components/Feedback/Feedback";
import CommentList from "../components/Comments/CommentList";
import { useAddCommentMutation } from "../services/feedbacks";

export const Container = styled.div`
  padding: 2.125rem 1.5rem;
  max-width: 689px;
  margin: 0 auto;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  height: 39px;
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

  p {
    color: var(--darkNavyBlue);
  }
`;

const TextInput = styled(TextArea)`
  padding: 1rem 1rem 1rem;
  height: 80px;
  margin-bottom: 1rem;
`;

export const FeedbackDetail = () => {
  const MAX_LENGTH = 250;
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(MAX_LENGTH);

  const { state } = useLocation(); //the info about this feedback
  const navigate = useNavigate();
  const [addComment] = useAddCommentMutation();
  const { name, username } = useSelector((state) => state.user.value);

  const handleInput = (e) => {
    const input = e.target.value;
    setMessage(input);
    setCharCount(MAX_LENGTH - input.length);
  };

  const submitComment = () => {
    addComment({
      title: state.title,
      message: message,
      name: name,
      username: username,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  console.log("test");
  return (
    <Container>
      <Nav>
        <BackButton onClick={() => navigate(-1)} color="var(--dullGray)">
          Go Back
        </BackButton>
        <EditButton
          as={Link}
          to={`/edit-feedback/${state["_id"]}`}
          state={state}
        >
          Edit Feedback
        </EditButton>
      </Nav>

      <Feedback feedback={state} />

      <CommentList feedback={state} />

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
          <Button onClick={() => submitComment()}>Post Comment</Button>
        </EndSection>
      </AddComment>
    </Container>
  );
};
