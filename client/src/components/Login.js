import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Wrapper, Title, Form, Links } from "../styles/loginStyles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
        console.log(res);

        //storing jwt token in local storage
        localStorage.setItem("token", res.user);

        //navigate after logging in
        setTimeout(() => {
          console.log("logging in");
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title> Product Feedback App</Title>
        <h1>Welcome back!</h1>

        <Form onSubmit={handleSubmit}>
          <label>Email:</label>
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

          <button>Login!</button>
        </Form>

        <Links>
          <Link to="/">Browse as guest</Link>
          <Link to="/signup">Don't have an account?</Link>
        </Links>
      </Wrapper>
    </Container>
  );
}
