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
    background-color: red;
  }
`;

export const EditButton = styled(StyledButton)`
  :hover {
    background-color: #7c91f9;
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
  background-color: #f2f4ff;
  font-weight: 600;
  color: #4661e6;
  font-size: 13px;
  text-transform: capitalize;
  :hover {
    background-color: #cfd7ff;
  }
  :active {
    background-color: #4661e6;
    color: #fff;
  }
  ${({ margin }) => margin && { marginBottom: "1rem" }}
`;

export const UpvoteButton = styled.button`
  padding: 0.375rem 1rem 0.4375rem;
  border-radius: 10px;
  background-color: #f2f4ff;
  font-weight: 600;
  color: #3a4374;
  font-size: 13px;
  :hover {
    background-color: #cfd7ff;
  }
  :active {
    background-color: #4661e6;
    color: #fff;
  }
  ::before {
    content: url("/assets/shared/icon-arrow-up.svg");
    margin-right: 6px;
  }
`;
