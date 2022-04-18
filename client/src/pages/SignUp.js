import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import {
  Container,
  Wrapper,
  Title,
  Form,
  FormButton,
} from "../styles/loginStyles";
import { ErrorMessage } from "../styles/newFeedbackStyles";
import { InputWrapper } from "../styles/reusable/Forms";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const navigate = useNavigate();

  const registerUser = () => {
    setErrorMessage(false);
    fetch(`${process.env.REACT_APP_BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          //checking for duplicate email
          console.log(res.error);
          setErrorMessage(true);
          setSignupError(res.error);
        } else {
          setErrorMessage(false);
          setAccountCreated(true);

          dispatch(login({ name: name, username: username }));

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        {errorMessage ? <p>{signupError}</p> : null}

        {accountCreated ? <p>Account successfully created!</p> : null}

        <Form onSubmit={handleSubmit(registerUser)}>
          <label>Name:</label>
          <InputWrapper>
            <input
              type="text"
              {...register("name", { required: true })}
              onChange={(e) => {
                setName(e.target.value);
                clearErrors("name");
              }}
              value={name}
            />
            {errors.name && <ErrorMessage>Please enter name</ErrorMessage>}
          </InputWrapper>

          <label>Username:</label>
          <InputWrapper>
            <input
              type="text"
              {...register("username", { required: true })}
              onChange={(e) => {
                setUsername(e.target.value);
                clearErrors("username");
              }}
              value={username}
            />
            {errors.username && (
              <ErrorMessage>Please enter username</ErrorMessage>
            )}
          </InputWrapper>

          <label>Email address</label>
          <InputWrapper>
            <input
              type="email"
              {...register("email", { required: true })}
              onChange={(e) => {
                setEmail(e.target.value);
                clearErrors("email");
              }}
              value={email}
            />
            {errors.email && <ErrorMessage>Please enter email</ErrorMessage>}
          </InputWrapper>

          <label>Password</label>
          <InputWrapper>
            <input
              type="password"
              {...register("password", { required: true })}
              onChange={(e) => {
                setPassword(e.target.value);
                clearErrors("password");
              }}
              value={password}
            />
            {errors.password && (
              <ErrorMessage>Please enter password</ErrorMessage>
            )}
          </InputWrapper>

          <FormButton>Sign Up</FormButton>
        </Form>

        <Link to="/login">Already have an account?</Link>
      </Wrapper>
    </Container>
  );
};
