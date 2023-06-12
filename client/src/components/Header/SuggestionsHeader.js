import { useState } from "react";
import useWindowDimensions from "../../hooks/window";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";
import styled from "styled-components/macro";
import {
  Container,
  Header,
  HeaderContent,
  Title,
  SecondaryTitle,
  Icon,
} from "../../styles/headerStyles";

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

      {width >= 768 && <Sidebar />}
      {width >= 768 && <Roadmap />}

      {isOpen && width < 768 && <MobileMenu toggle={setIsOpen} />}
    </Container>
  );
};

export default SuggestionsHeader;
