import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user/userSlice";

import {
  Container,
  Wrapper,
  Title,
  FormTitle,
  Form,
  FormButton,
  Links,
} from "../styles/loginStyles";
import { ErrorMessage } from "../styles/newFeedbackStyles";
import { InputWrapper } from "../styles/reusable/Forms";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountError, setAccountError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = () => {
    setAccountError(false);
    fetch(`${process.env.REACT_APP_BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") {
          console.log(res);
          //storing jwt token in local storage
          localStorage.setItem("token", res.token);
          localStorage.setItem("name", res.name);
          localStorage.setItem("username", res.username);

          dispatch(login({ name: res.name, username: res.username }));
          navigate("/");
        } else {
          setAccountError(true);
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
        <Title> Product Feedback App</Title>
        <FormTitle>Login</FormTitle>

        {accountError && (
          <ErrorMessage>Username and/or password is incorrect</ErrorMessage>
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <InputWrapper>
            <input
              type="text"
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearErrors("password");
              }}
            />
            {errors.password && (
              <ErrorMessage>Please enter password</ErrorMessage>
            )}
          </InputWrapper>

          <FormButton>Login!</FormButton>
        </Form>

        <Links>
          <Link to="/">Browse as guest</Link>
          <Link to="/signup">Don't have an account?</Link>
        </Links>
      </Wrapper>
    </Container>
  );
};
