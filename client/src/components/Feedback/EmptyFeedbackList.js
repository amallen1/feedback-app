import styled from "styled-components/macro";
import { StyledButton } from "../../styles/reusable/Button";
import { Link } from "react-router-dom";

const Div = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 4.75em 1.5em;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 600px;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding: 0 6.75rem;
  }
`;

const Image = styled.img`
  margin-bottom: 2.25em;
`;

const Notice = styled.h3`
  margin-bottom: 0.875em;
  color: var(--lighterNavyBlue);
`;

const Message = styled.p`
  color: var(--dullGray);
  font-size: 13px;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const EmptyFeedbackList = () => {
  return (
    <Div>
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
    </Div>
  );
};

export default EmptyFeedbackList;
