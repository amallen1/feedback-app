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
  text-align: center; //need for button in newfeedback
  cursor: pointer;

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

  @media (min-width: 768px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const CancelButton = styled(StyledButton)`
  background-color: var(--lighterNavyBlue);
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
  /* background-color: var(--lightGray); */
  background-color: ${({ selected }) =>
    selected ? "var(--royalBlue)" : "var(--lightGray)"};
  font-weight: 600;
  /* color: var(--royalBlue); */
  color: ${({ selected }) =>
    selected ? "var(--lightGray)" : "var(--royalBlue)"};
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
  padding: 0.375rem 1rem 0.4375rem 0.8125rem;
  border-radius: 10px;
  background-color: var(--offWhite);
  font-weight: 600;
  color: var(--lighterNavyBlue);
  font-size: 13px;
  position: relative;
  width: 69px;

  :hover {
    background-color: var(--paleBlue);
  }

  :active {
    background-color: var(--royalBlue);
    color: var(--white);
  }

  ::before {
    content: url("/assets/shared/icon-arrow-up.svg");
    margin-right: 9px;
  }

  @media (min-width: 768px) {
    padding: 0.25rem 0.7rem 0.5rem;
    height: 53px;
    width: 40px;

    ::before {
      margin: 0;
    }
  }
`;
