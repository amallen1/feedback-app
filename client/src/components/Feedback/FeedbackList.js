import React from "react";
import Feedback from "./Feedback";
import styled from "styled-components/macro";
import EmptyFeedbackList from "./EmptyFeedbackList";
import { useSelector } from "react-redux";
import { useGetAllSuggestionsQuery } from "../../services/suggestions";

const Container = styled.div`
  padding: 2em 1em 2.4375em 1em;

  @media (min-width: 768px) {
    padding: 0;
    padding-bottom: 1rem;
  }
`;

const FeedbackList = () => {
  const category = useSelector(
    (state) => state.categories.find(({ selected }) => selected === true).name
  );

  const sortingCategory = useSelector((state) => state.sortingCategories.value);

  const sortData = (copydata) => {
    let newData = [];
    if (copydata !== undefined) {
      newData = [...copydata];

      if (sortingCategory === "Most Upvotes") {
        newData.sort((a, b) => b.upvotes - a.upvotes);
      } else if (sortingCategory === "Least Upvotes") {
        newData.sort((a, b) => a.upvotes - b.upvotes);
      } else if (sortingCategory === "Most Comments") {
        newData.sort((a, b) => b.comments.length - a.comments.length);
      } else {
        newData.sort((a, b) => a.comments.length - b.comments.length);
      }
    }

    return newData;
  };

  const { data } = useGetAllSuggestionsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data:
        category === "All"
          ? sortData(data)
          : sortData(data?.filter((item) => item.category === category)),
    }),
  });

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
