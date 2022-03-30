import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link, Navigate } from "react-router-dom";
import {
  CancelButton,
  BackButton,
  StyledButton,
} from "../styles/reusable/Button";
import ContainerDiv from "../styles/reusable/Container";
import Dropdown from "../styles/reusable/Dropdown";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { feedbackAdded } from "../features/feedbacks/feedbacksSlice";

const Nav = styled.div`
  margin-bottom: 3.5em;
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 2.75em 1.5em 0.5rem 1.5em;
  position: relative;
  max-width: 540px;
  margin: 0 auto;
`;

const Image = styled.img`
  position: absolute;
  top: -28px;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
  color: var(--lighterNavyBlue);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--gray);
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: var(--lighterNavyBlue);
  margin-bottom: 0.1875rem;
`;

const Description = styled.p`
  font-size: 0.8125em;
  margin-bottom: 1rem;
  color: var(--dullGray);
`;

const InputWrapper = styled.div`
  position: relative;

  ${({ error }) =>
    error &&
    css`
      ::after {
        content: "Can't be empty";
        color: red;
        position: absolute;
        bottom: 2%;
        left: 0px;
        font-size: 0.875rem;
      }
    `}
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  border: none;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
    `}
`;

const TextArea = styled.textarea`
  margin-bottom: 1.5rem;
  height: 120px;
  padding: 1rem;
  resize: none;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;

      ::after {
        content: "texttt";
        position: relative;
        top: 0px;
        left: 0px;
        height: 50px;
        width: 50px;
      }
    `}
`;

const ListButton = styled.button`
  padding: 0.8125rem 1.5rem;
  background-color: #f7f8fd;
  border: none;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;

  &:focus {
    outline-style: solid;
    outline-color: #4661e6;
    outline-width: thin;
  }

  ::after {
    content: url("/assets/shared/icon-arrow-down.svg");
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;

    a:nth-child(1) {
      order: 1;
      margin-left: 1rem;
    }
    a:nth-child(2) {
      order: -2;
    }

    margin-left: auto;
  }
`;

const NewFeedback = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Feature");
  const [description, setDescription] = useState("");
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const [formError, setFormError] = useState(false);

  //new stuff
  const initialState = { title: "", category: "Feature", description: "" };

  const validate = () => {
    //need to work on validation
    if (title === "" && description === "") {
      console.log("error, title and description is required");
      setFormError(true);
    }
    // } else if (title === "") {
    //   console.log("error, title is required");
    //   setFormError(true);
    // } else if (description === "") {
    //   console.log("error, desc is required");
    //   setFormError(true);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();

    console.log(`Error is ${formError}`);

    setFormError(false);

    //creates a new feedback object and saves it in redux store
    dispatch(
      feedbackAdded({
        id: nanoid(),
        title: title,
        category: category,
        description: description,
        upvotes: 0,
        status: "suggestion",
        comments: [],
      })
    );

    //reseting input values
    setTitle("");
    setCategory("Feature");
    setDescription("");

    // navigate("/");
  };

  return (
    <ContainerDiv>
      <Nav>
        <BackButton as={Link} to="/" color="var(--dullGray)">
          Go Back
        </BackButton>
      </Nav>

      <Card>
        <Image src="/assets/shared/icon-new-feedback.svg" alt="New feedback" />
        <Title>Create New Feedback</Title>

        <Form>
          <Label htmlFor="title">Feedback Title</Label>
          <Description>Add a short, descriptive headline</Description>
          <InputWrapper error={formError}>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={formError}
            />
          </InputWrapper>

          <Label htmlFor="category">Category</Label>
          <Description>Choose a category for your feedback</Description>
          <Dropdown categories={categories} setCategory={setCategory} />
          <input type="hidden" value={category} />
          {/* {console.log(categor
            y)} */}

          <Label htmlFor="detail">Feedback Detail</Label>
          <Description>
            Include any specific comments on what should be improved, added,
            etc.
          </Description>
          <InputWrapper error={formError}>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              error={formError}
            ></TextArea>
          </InputWrapper>

          <ButtonWrapper>
            <StyledButton onClick={handleSubmit} margin="true">
              Add feedback
            </StyledButton>

            <CancelButton as={Link} to="/" margin="true">
              Cancel
            </CancelButton>
          </ButtonWrapper>
        </Form>
      </Card>
    </ContainerDiv>
  );
};

export default NewFeedback;
