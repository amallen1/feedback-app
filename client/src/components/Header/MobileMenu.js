import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";
import { StyledButton } from "../../styles/reusable/Button";

const Wrapper = styled.div`
  position: relative;
`;

const Div = styled.div`
  background-color: #000;
  opacity: 50%;
  height: 100%;
  width: 28%;
  position: fixed;
  z-index: 100;
`;

const Menu = styled.div`
  background-color: #f7f8fd;
  height: calc(100vh - (72px));
  width: 72%;
  height: 100%;
  margin-left: auto;
  z-index: 150;
  padding: 1.5em 1.5em 0 1.5em;
  position: fixed;
  right: 0px;
`;

const LinkWrapper = styled.div`
  /* display: flex; */
  /* width: 100%; */
`;

const Button = styled(StyledButton)`
  width: 80%;
  display: block;
  margin: 0 auto 1rem;
`;

const Overlay = ({ toggle }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value["name"]);

  return (
    <Wrapper>
      <Div onClick={() => toggle()} />
      <Menu>
        {user ? (
          <LinkWrapper>
            <Button
              onClick={() => dispatch(logout({ name: null, username: null }))}
            >
              Logout
            </Button>
          </LinkWrapper>
        ) : (
          <LinkWrapper>
            <Button as={Link} to="/login">
              Login
            </Button>

            <Button as={Link} to="/signup">
              Sign Up
            </Button>
          </LinkWrapper>
        )}

        <Sidebar />
        <Roadmap />
      </Menu>
    </Wrapper>
  );
};

export default Overlay;
