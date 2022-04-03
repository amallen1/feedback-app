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
    padding-bottom: 1rem;
  }
`;

const FeedbackList = () => {
  const category = useSelector((state) =>
    state.categories
      .find(({ selected }) => selected === true)
      .name
  );


  //buttons clicked in category button/sidebar should update here
  const { data } = useGetAllSuggestionsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data:
        category === "All"
          ? data
          : data?.filter((item) => item.category === category),
    }),
  });


  useEffect(() => {
    if (data) console.log("filtered result", data);
  }, [data]);

  return (
    <Container>
      {data && data.length > 0 ? (
        data.map((feedback, index) => {
          return <Feedback feedback={feedback} key={index} />;
        })
      ) : (
        <EmptyFeedbackList />
      )}
    </Container>
  );
};

export default FeedbackList;
