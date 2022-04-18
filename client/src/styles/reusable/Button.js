import styled, { css } from "styled-components/macro";

//Styles for buttons that navigate to a different page
export const StyledButton = styled.a`
  background-color: var(--brightPurple);
  color: var(--buttonTextColor);
  padding: 0.625rem 1rem;
  font-weight: 700;
  font-size: 0.8125rem;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
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
  background-color: var(--brightRed);
  :hover {
    background-color: var(--hoverRed);
  }
`;

export const EditButton = styled(StyledButton)`
  background-color: var(--royalBlue);
  :hover {
    background-color: var(--hoverRoyalBlue);
  }
`;

export const BackButton = styled.button`
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
export const Button = styled.button`
  background-color: var(--brightPurple);
  color: var(--buttonTextColor);
  padding: 0.625rem 1rem;
  font-weight: 700;
  font-size: 0.8125rem;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: var(--hoverPurple);
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const FilterButton = styled.button`
  padding: 0.3125rem 1rem 0.375rem;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? "var(--royalBlue)" : "var(--lightGray)"};
  font-weight: 600;
  color: ${({ selected }) =>
    selected ? "var(--lightGray)" : "var(--royalBlue)"};
  font-size: .8125rem;

  :hover {
    background-color: var(--paleBlue);
  }

  ${({ margin }) => margin && { marginBottom: "1rem" }}
`;

export const UpvoteButton = styled.button`
  background-color: ${({ selected }) =>
    selected ? "var(--royalBlue)" : "var(--lightGray)"};
  color: ${({ selected }) =>
    selected ? "var(--white)" : "var(--lighterNavyBlue)"};
  padding: 0.375rem 1rem 0.4375rem 0.8125rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.8125rem;
  width: 69px;
  display: flex;
  justify-content: space-evenly;

  :before {
    content: url("/assets/shared/icon-arrow-up.svg");
  }

  ${({ selected }) =>
    selected &&
    css`
      :before {
        content: url("/assets/shared/white-up-arrow.svg");
      }
    `}

  :hover {
    background-color: var(--paleBlue);
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0.25rem 0.7rem 0.5rem;
    height: 53px;
    width: 40px;
  }
`;
