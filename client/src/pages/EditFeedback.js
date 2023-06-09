import { useState } from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  useUpdateSuggestionMutation,
  useDeleteSuggestionMutation,
} from "../services/feedbacks";

import {
  BackButton,
  CancelButton,
  DeleteButton,
} from "../styles/reusable/Button";
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
  StyledButton,
  Title,
  Card,
  Image,
  Nav,
} from "../styles/newFeedbackStyles";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a:nth-child(1) {
    order: 3;
  }

  @media (min-width: 500px) {
    flex-direction: row;

    a:nth-child(1) {
      order: -1;
    }

    a:nth-child(3) {
      margin-left: auto;
      margin-right: 1rem;
    }

    button {
      order: 1;
      justify-self: flex-end;
    }
  }
`;

export const EditFeedback = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [category, setCategory] = useState(state.category);
  const [status, setStatus] = useState(state.status);
  const [description, setDescription] = useState(state.description);

  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const statuses = ["Suggestion", "Planned", "In-progress", "Live"];

  const [updateSuggestion] = useUpdateSuggestionMutation();
  const [deleteSuggestion, { isLoading }] = useDeleteSuggestionMutation();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const update = () => {

    const data = {
      id: state["_id"],
      body: {
        title: title,
        category: category,
        status: status,
        description: description,
      },
    };
    updateSuggestion(data);
  };

  const onSubmit = () => {
    update();
    navigate("/");
  };

  const remove = () => {
    deleteSuggestion(state["_id"]);
    navigate("/");
  };

  return (
    <ContainerDiv>
      <Nav>
        <BackButton onClick={() => navigate(-1)} color="var(--dullGray)">
          Go Back
        </BackButton>
      </Nav>

      <Card>
        <Image
          src="/assets/shared/icon-new-feedback.svg"
          alt="Add feedback icon"
        />

        <Title>{`Editing '${state.title}'`}</Title>

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

          <Label>Category</Label>
          <Sublabel>Choose a category for your feedback</Sublabel>
          <Dropdown
            optionsList={categories}
            currOption={category}
            setCategory={setCategory}
          />
          <input type="hidden" value={category} />

          <Label>Update Status</Label>
          <Sublabel>Change feedback state</Sublabel>
          <Dropdown
            optionsList={statuses}
            currOption={status}
            setCategory={setStatus}
          />
          <input type="hidden" value={status} />

          <Label>Feedback Detail</Label>
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
            <DeleteButton onClick={() => remove()} margin="true">
              Delete
            </DeleteButton>

            <StyledButton type="submit" margin="true">
              Save Changes
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
