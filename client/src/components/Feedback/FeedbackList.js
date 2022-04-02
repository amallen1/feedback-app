import React, { useState, useEffect } from "react";
import Feedback from "./Feedback";
import styled from "styled-components/macro";
import EmptyFeedbackList from "./EmptyFeedbackList";
import { useSelector } from "react-redux";
import { useGetAllSuggestionsQuery } from "../../services/services";

const Container = styled.div`
  padding: 2em 1em 2.4375em 1em;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const FeedbackList = () => {
  const [loading, setLoading] = useState(true);

  //buttons clicked in category button/sidebar should update here
  const { data, error, isLoading } = useGetAllSuggestionsQuery();

  console.log(data);

  return (
    <Container>
      {data &&
        data.map((feedback, index) => {
          return <Feedback feedback={feedback} key={index} />;
        })}
    </Container>
  );
};

export default FeedbackList;
