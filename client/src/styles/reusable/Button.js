import styled from "styled-components/macro";

export const StyledButton = styled.a`
  /* background-color: ${(props) => props.bgcolor}; */
  background-color: var(--brightPurple);
  color: var(--buttonTextColor);
  padding: 0.625rem 1rem;
  font-weight: 700;
  font-size: 0.8125rem;
  display: inline-block;
  border-radius: 10px;
  /* text-align: center; //need for button in newfeedback */

  ${({ plus }) =>
    plus &&
    `
      ::before {
        content: url("/assets/shared/icon-plus.svg");
        margin-right: 4px;
      }
    `}
  ${({ margin }) => margin && { marginBottom: "1rem" }}
  
  :hover {
    background-color: var(--hoverPurple);
  }
`;

export const CancelButton = styled(StyledButton)`
  :hover {
    background-color: var(--hoverRoyalBlue);
  }
`;

export const DeleteButton = styled(StyledButton)`
  :hover {
    background-color: var(--brightRed);
  }
`;

export const EditButton = styled(StyledButton)`
  :hover {
    background-color: var(--hoverRoyalBlue);
  }
`;

export const BackButton = styled.a`
  ::before {
    content: url("/assets/shared/icon-arrow-left.svg");
    margin-right: 14px;
  }
  :focus {
    text-decoration: underline;
  }
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  font-size: 13px;
  color: ${(props) => props.color};
`;

//Actual buttons
export const FilterButton = styled.button`
  padding: 0.3125rem 1rem 0.375rem;
  border-radius: 10px;
  background-color: var(--lightGray);
  font-weight: 600;
  color: var(--royalBlue);
  font-size: 13px;
  text-transform: capitalize;

  :hover {
    background-color: var(--paleBlue);
  }

  :active {
    background-color: var(--royalBlue);
    color: var(--white);
  }
  ${({ margin }) => margin && { marginBottom: "1rem" }}
`;

export const UpvoteButton = styled.button`
  padding: 0.375rem 1rem 0.4375rem;
  border-radius: 10px;
  background-color: var(--offWhite);
  font-weight: 600;
  color: var(--lighterNavyBlue);
  font-size: 13px;
  position: relative;
 

  :hover {
    background-color: var(--paleBlue);
  }

  :active {
    background-color: var(--royalBlue);
    color: var(--white);
  }

  ::before {
    content: url("/assets/shared/icon-arrow-up.svg");
    margin-right: 6px;
  }

  @media (min-width: 768px) {
    padding: 1.625rem 0.6875rem 0.5rem;

    ::before {
      margin: 0;
      position: absolute;
      top: 0px;
      transform: translate(-15%, 25%);
      margin: 0;
    }
  }
`;
