import { StyledButton } from "../../styles/reusable/Button";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Image,
  Notice,
  Message,
} from "../../styles/Feedback/emptyFeedbackStyles";

const EmptyFeedbackList = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src="./assets/suggestions/illustration-empty.svg"
          alt="Empty suggestions"
        />

        <Notice>There is no feedback yet.</Notice>
        <Message>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Message>

        <StyledButton as={Link} to="/newfeedback" plus="true">
          Add Feedback
        </StyledButton>
      </Wrapper>
    </Container>
  );
};

export default EmptyFeedbackList;
