import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { CancelButton, BackButton } from "../styles/reusable/Button";
import ContainerDiv from "../styles/reusable/Container";
import Dropdown from "../components/Dropdown";

import {
  Form,
  Label,
  Sublabel,
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

import { useAddSuggestionMutation } from "../services/feedbacks";

export const NewFeedback = () => {
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

  const [addSuggestion] = useAddSuggestionMutation();

  const onSubmit = () => {
    addSuggestion({
      id: nanoid(),
      title: title,
      category: category,
      description: description,
      upvotes: 0,
      status: "Suggestion",
      comments: [],
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    navigate("/");
  };

  return (
    <ContainerDiv>
      <Nav>
        <BackButton onClick={() => navigate("/")} color="var(--dullGray)">
          Go Back
        </BackButton>
      </Nav>

      <Card>
        <Image
          src="/assets/shared/icon-new-feedback.svg"
          alt="Add feedback icon"
        />
        <Title>Create New Feedback</Title>

        <Form onSubmit={handleSubmit(() => onSubmit())}>
          <Label htmlFor="title">Feedback Title</Label>
          <Sublabel>Add a short, descriptive headline</Sublabel>

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
          <Sublabel>Choose a category for your feedback</Sublabel>
          <Dropdown
            optionsList={categories}
            currOption={category}
            setCategory={setCategory}
          />
          <input type="hidden" value={category} />

          <Label htmlFor="detail">Feedback Detail</Label>
          <Sublabel>
            Include any specific comments on what should be improved, added,
            etc.
          </Sublabel>

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
