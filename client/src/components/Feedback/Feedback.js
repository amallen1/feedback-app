import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FilterButton, UpvoteButton } from "../../styles/reusable/Button";

const Card = styled.div`
  padding: 1.5em;
  background-color: var(--white);
  margin-bottom: 1rem;
  border-radius: 10px;
  position: relative;

  ${({ border }) => border && `border-top: 6px solid black;`}

  :hover h3 {
    color: var(--royalBlue);
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MainInfo = styled.div`
  margin-bottom: 1.125rem;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Title = styled.h3`
  color: var(--lighterNavyBlue);
  margin-bottom: 0.5rem;
  font-size: 0.8125rem;
  letter-spacing: -0.18px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    letter-spacing: -0.25px;
    /* line-height: auto; */
  }
`;

const Description = styled.p`
  font-size: 13px;
  font-weight: 400px;
  color: var(--dullGray);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const CommentButton = styled.div`
  background-color: transparent;
  color: var(--lighterNavyBlue);
  font-size: 13px;
  font-weight: 700;
  display: flex;

  ::before {
    content: url("/assets/shared/icon-comments.svg");
    margin-right: 6px;
  }
`;

const UpvoteDiv = styled.div`
  /* display: inline-block; */

  @media (min-width: 768px) {
    order: -1;
    margin-right: 2.5rem;
  }
`;

const CommentDiv = styled.div`
  /* display: inline-block; */
  position: absolute;
  right: 2rem;
  bottom: 1.75em;

  @media (min-width: 768px) {
    position: relative;
    right: 0px;
    bottom: 0px;
    margin-left: auto;
  }
`;

const Feedback = () => {
  return (
    <Card>
      <Link to="/">
        <MainInfo>
          <Title>Add tags for solutions</Title>
          <Description>
            Easier to search for solutions based on a specific stack.
          </Description>
          <FilterButton>category</FilterButton>
        </MainInfo>
      </Link>

      <UpvoteDiv>
        <UpvoteButton>1</UpvoteButton>
      </UpvoteDiv>

      <CommentDiv>
        <CommentButton>1</CommentButton>
      </CommentDiv>
    </Card>
  );
};

export default Feedback;
