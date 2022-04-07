import React, { useState } from "react";
import useWindowDimensions from "../../hooks/window";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/reusable/Button";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";
import {
  Container,
  Header,
  Div,
  Title,
  SecondaryTitle,
  Icon,
} from "../../styles/headerStyles";
import styled from "styled-components/macro";

const Button = styled.button`
  color: white;
  font-weight: 700;
  background-color: transparent;

  :hover {
    text-decoration: underline;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  color: white;
  font-weight: 700;

  :hover {
    text-decoration: underline;
  }
`;

const SuggestionsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  //getting the current user who's logged in
  const user = useSelector((state) => state.user.value["name"]);

  return (
    <Container>
      <Header>
        <Div>
          {width >= 768 ? (
            <div>
              {user ? (
                <Button onClick={() => dispatch(logout())}>Logout</Button>
              ) : (
                <LinkWrapper>
                  <StyledLink as={Link} to="/login">
                    Login
                  </StyledLink>

                  <StyledLink as={Link} to="/signup">
                    Sign Up
                  </StyledLink>
                </LinkWrapper>
              )}
            </div>
          ) : null}

          <div>
            <Title>Welcome, {user ? user : "Guest"}</Title>
            <SecondaryTitle>Feedback Board</SecondaryTitle>
          </div>
        </Div>

        <div>
          {isOpen ? (
            <Icon
              src="/assets/shared/mobile/icon-close.svg"
              alt="Close menu icon"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Icon
              src="/assets/shared/mobile/icon-hamburger.svg"
              alt="Menu icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </Header>

      {width >= 768 ? <Sidebar /> : null}
      {width >= 768 ? <Roadmap /> : null}

      {/* TODO: fix so you don't have to manually close the menu */}
      {isOpen && width < 768 ? <MobileMenu toggle={setIsOpen} /> : null}
    </Container>
  );
};

export default SuggestionsHeader;
