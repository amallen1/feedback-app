import styled from "styled-components/macro";

export const Menu = styled.div`
  background-color: #f7f8fd;
  height: calc(100vh - (72px));
  width: 72%;
  margin-left: auto;
  padding: 1.5rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  right: 0;
  z-index: 10;
`;

export const Search = styled.div`
  background-color: var(--white);
  padding: 1.5rem 1rem 2.25rem 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
  }
`;

export const RoadmapContainer = styled.div`
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-height: 178px;
    flex: 1;
  }
`;

export const RoadmapView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

export const ViewLink = styled.a`
  color: #4661e6;
  font-weight: 600;
`;

export const ProgressTracker = styled.div`
  margin-top: 1rem;
`;

export const ProgressList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-left: 1rem;
  font-weight: 400;
  color: var(--lighterDarkBlue);

  ::before {
    padding: inherit;
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 7px;
    left: -15px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.color};
  }
`;

export const Span = styled.span`
  font-weight: 700;
  color: #647196;
`;
