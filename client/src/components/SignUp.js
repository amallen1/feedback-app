import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Wrapper, Title, Form } from "../styles/loginStyles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("duplicate email");
        //duplicate email?
        if (res.error) {
          console.log(res.error);
          setErrorMessage(true);
        } else {
          setErrorMessage(false);
          setName("");
          setEmail("");
          setPassword("");
          setAccountCreated(true);

        
          setTimeout(() => {
            navigate("/");
          }, 1500);

          //navigates to the main homepage

          //account is assumed to be created
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        {errorMessage ? (
          <p>This email is already exists. Please enter another email.</p>
        ) : null}
        {accountCreated ? <p>Account successfully created!</p> : null}
        <Form onSubmit={registerUser}>
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <label>Email address</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button>Sign Up</button>
        </Form>

        <Link to="/">Already have an account?</Link>
      </Wrapper>
    </Container>
  );
}
