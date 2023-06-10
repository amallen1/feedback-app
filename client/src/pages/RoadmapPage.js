import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { BackButton, StyledButton } from "../styles/reusable/Button";

import { useGetRoadmapFeedbacksQuery } from "../services/feedbacks";
import Feedback from "../components/Feedback/Feedback";

const Container = styled.div`
  @media (min-width: 768px) {
    padding: 3.5rem 2.4375rem;
    max-width: 1110px;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  padding: 1.5rem 1.625rem;
  background-color: var(--lighterNavyBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`;

const Title = styled.h3`
  color: white;
`;

const Content = styled.div`
  padding: 1.25rem 1.5rem 0;
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-around;
  color: #3a4374;
  position: relative;

  padding: 1.25rem;

  :after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: rgba(140, 146, 179, 0.25);
  }
`;

const Section = styled.button`
  background-color: transparent;
  font-weight: 700;
  color: var(--lighterNavyBlue);
  position: relative;
  cursor: pointer;

  color: ${({ selected }) => (selected ? "var(--brightPurple)" : "black")};

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const RoadmapPage = () => {
  const navigate = useNavigate();
  // console.log("AM I RERENDERING");
  const location = useLocation();

  console.log(location);

  const [status, setStatus] = useState("Planned");
  const [selected, setSelected] = useState([
    { name: "Planned", selected: true },
    { name: "In-progress", selected: false },
    { name: "Live", selected: false },
  ]);
  const [fakeVar, setFakeVar] = useState("fake");

  const { data, isLoading } = useGetRoadmapFeedbacksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.filter((item) => item.status === status),
    }),
  });

  // const [feedbackList, setFeedbackList] = useState(data);

  const toggle = (value) => {
    setStatus(value.name);

    let copyArray = [...selected];

    copyArray.forEach((item) => (item.selected = false));
    const selectedCat = copyArray.find((el) => el.name === value.name);
    if (selectedCat) {
      selectedCat.selected = true;
    }

    setSelected(copyArray);
  };

  useEffect(() => {
    console.log("testing in roadmap");
    console.log("did something change");
    console.log(data);
    
  }, [data]);

  const items = selected.map((item, index) => {
    return (
      <Section
        onClick={() => toggle(item)}
        selected={item.selected}
        key={index}
      >{`${item.name}`}</Section>
    );
  });

  return (
    <Container>
      <Header>
        <div>
          <BackButton onClick={() => navigate("/")} color="var(--white)">
            Go Back
          </BackButton>
          <Title>Roadmap</Title>
        </div>

        <StyledButton plus="true" as={Link} to="/newfeedback">
          Add feedback
        </StyledButton>
      </Header>

      <Categories>{items}</Categories>

      <Content>
        {!isLoading && data && data.length > 0
          ? data.map((item, index) => {
              return <Feedback feedback={item} key={index} />;
            })
          : null}
      </Content>
    </Container>
  );
};
