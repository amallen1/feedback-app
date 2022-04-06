import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import ContainerDiv from "../styles/reusable/Container";
import Feedback from "../components/Feedback/Feedback";
import styled from "styled-components/macro";

import { BackButton } from "../styles/reusable/Button";
import { EditButton } from "../styles/reusable/Button";
import { Link } from "react-router-dom";

// import { TextInput } from "../styles/newFeedbackStyles";
import { StyledButton } from "../styles/reusable/Button";
import { TextArea } from "../styles/reusable/Forms";

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

  const handleInput = (e) => {
    const input = e.target.value;
    setMessage(input);
    setCharCount(MAX_LENGTH - input.length);
  };

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
          <StyledButton as={Link} to="/">
            Post Comment
          </StyledButton>
        </EndSection>
      </AddComment>
    </Container>
  );
};
