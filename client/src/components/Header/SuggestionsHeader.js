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

const SuggestionsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Header>
        <Div>
          <Title>Frontend Mentor</Title>
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

      {/* TODO: fix so you don't have to manually close the overlay */}
      {isOpen && width < 768 ? <Overlay toggle={setIsOpen} /> : null}
    </Container>
  );
};

export default SuggestionsHeader;
