import styled from "styled-components/macro";



//EmptyFeedback styles
export const Container = styled.div`
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

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding: 0 6.75rem;
  }
`;

export const Image = styled.img`
  margin-bottom: 2.25em;
`;

export const Notice = styled.h3`
  margin-bottom: 0.875em;
  color: var(--lighterNavyBlue);
`;

export const Message = styled.p`
  color: var(--dullGray);
  font-size: 13px;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;