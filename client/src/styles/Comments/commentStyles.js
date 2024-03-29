import styled from "styled-components/macro";

//Comment styles
export const CommentContainer = styled.div`
  font-size: 13px;
  color: var(--dullGray);
  margin: 1.5rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #8c92b33e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ padding }) =>
    padding &&
    `  padding-left: 1.5rem;
    `}
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h5 {
    color: var(--lighterNavyBlue);
  }

  p {
    font-size: 13px;
    color: var(--dullGray);
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  margin-left: auto;
  color: var(--royalBlue);
  font-weight: 600;

  :focus {
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  color: var(--brightPurple);
  margin-right: 5px;
  font-weight: 700;
`;

//CommentList styles

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Heading = styled.h3`
  color: var(--lighterNavyBlue);
`;
