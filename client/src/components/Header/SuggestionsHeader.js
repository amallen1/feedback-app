import React, { useState } from "react";
import {
  Container,
  Header,
  Div,
  Title,
  SecondaryTitle,
  Icon,
} from "../../styles/headerStyles";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";
import useWindowDimensions from "../../hooks/window";
import { useSelector } from "react-redux";

const SuggestionsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const user = useSelector((state) => state.user.value["name"]);

  console.log(user);

  return (
    <Container>
      <Header>
        <Div>
          <Title>Welcome, {user ? user : "Guest"}</Title>
          {/* Welcome, Guest or welcome Username */}
          <SecondaryTitle>Feedback Board</SecondaryTitle>
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
      {isOpen && width < 768 ? <Overlay toggle={setIsOpen} /> : null}
    </Container>
  );
};

export default SuggestionsHeader;
