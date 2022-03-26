import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Wrapper, Title, Form } from "../styles/loginStyles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

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
            navigate("/home");
          }, 1500);
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
        <h2>Join today!</h2>
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

          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
