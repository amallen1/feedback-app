import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { CancelButton, BackButton } from "../styles/reusable/Button";
import ContainerDiv from "../styles/reusable/Container";
import Dropdown from "../styles/reusable/Dropdown";

import {
  Form,
  Label,
  Description,
  InputWrapper,
  TextInput,
  ErrorMessage,
  DescInput,
  ButtonWrapper,
  StyledButton,
  Title,
  Card,
  Image,
  Nav,
} from "../styles/newFeedbackStyles";
import { feedbackAdded } from "../features/feedbacks/feedbacksSlice";

const NewFeedback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Feature");
  const [description, setDescription] = useState("");
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //data is the object containing the title and description properties

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

    fetch("http://localhost:5000/api/add_suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        category: category,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    navigate("/");
  };

  return (
    <ContainerDiv>
      <Nav>
        <BackButton as={Link} to="/" color="var(--dullGray)">
          Go Back
        </BackButton>
      </Nav>

      <Card>
        <Image
          src="/assets/shared/icon-new-feedback.svg"
          alt="Add feedback icon"
        />
        <Title>Create New Feedback</Title>

        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Label htmlFor="title">Feedback Title</Label>
          <Description>Add a short, descriptive headline</Description>

          <InputWrapper>
            <TextInput
              type="text"
              {...register("title", { required: true })}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                clearErrors("title");
              }}
              error={errors.title}
            />
            {errors.title && <ErrorMessage>Can't be empty</ErrorMessage>}
          </InputWrapper>

          <Label htmlFor="category">Category</Label>
          <Description>Choose a category for your feedback</Description>
          <Dropdown categories={categories} setCategory={setCategory} />
          <input type="hidden" value={category} />

          <Label htmlFor="detail">Feedback Detail</Label>
          <Description>
            Include any specific comments on what should be improved, added,
            etc.
          </Description>

          <InputWrapper>
            <DescInput
              {...register("description", { required: true })}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                clearErrors("description");
              }}
              error={errors.description}
            />
            {errors.description && <ErrorMessage>Can't be empty</ErrorMessage>}
          </InputWrapper>

          <ButtonWrapper>
            <StyledButton type="submit" margin="true">
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
