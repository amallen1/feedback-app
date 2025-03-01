import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import useWindowDimensions from "../../hooks/window";

import styled from "styled-components";
import {
  Container,
  Header,
  HeaderContent,
  Icon,
  SecondaryTitle,
  Title,
} from "../../styles/headerStyles";
import CategoryMenu from "./CategoryMenu";
import MobileMenu from "./MobileMenu";
import Roadmap from "./Roadmap";

const Button = styled.button`
  color: white;
  font-weight: 700;
  background-color: transparent;

  &:hover {
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

  &:hover {
    text-decoration: underline;
  }
`;

const SuggestionsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  //getting the current user who's logged in
  const { name } = useSelector((state) => state.user.value);

  return (
    <Container>
      <Header>
        <HeaderContent>
          {/* {width >= 768 && (
            <div>
              {name !== "Guest" ? (
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
          )} */}

          <div>
            <Title>Welcome, {name ? name : "Guest"}</Title>
            <SecondaryTitle>Feedback Board</SecondaryTitle>
          </div>
        </HeaderContent>

        {width < 768 && (
          <div>
            {isOpen ? (
              <Icon
                src="/assets/shared/mobile/icon-close.svg"
                alt="Close menu icon"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <Icon
                src="/assets/shared/mobile/icon-hamburger.svg"
                alt="Open menu icon"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        )}
      </Header>

      {width >= 768 && <CategoryMenu />}
      {width >= 768 && <Roadmap />}

      {isOpen && width < 768 && <MobileMenu toggle={setIsOpen} />}
    </Container>
  );
};

export default SuggestionsHeader;
