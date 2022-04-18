import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Card = styled.div`
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

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const MainInfo = styled.div`
  margin-bottom: 1.125rem;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h3`
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

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400px;
  color: var(--dullGray);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

export const CommentButton = styled.div`
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

export const UpvoteDiv = styled.div`
  @media (min-width: 768px) {
    order: -1;
    margin-right: 2.5rem;
  }
`;

export const CommentDiv = styled.div`
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
