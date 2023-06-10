import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllSuggestionsQuery } from "../../services/feedbacks";
import styled from "styled-components/macro";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import EmptyFeedbackList from "./EmptyFeedbackList";
import Feedback from "./Feedback";

const Container = styled.div`
  padding: 2em 1em 2.4375em 1em;
  height: 100%;

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

  const { data, isLoading } = useGetAllSuggestionsQuery();

  const [feedbackList, setFeedbackList] = useState(data);
  console.log("rerendering!")

  const sortData = (copydata) => {
    let newData = [];

    if (copydata) {
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

    setFeedbackList(newData);
  };

  useEffect(() => {
    if (category === "All") {
      sortData(data);
    } else {
      sortData(data?.filter((item) => item.category === category));
    }
  }, [data, category, sortingCategory]);

  return (
    <Container>
      {!isLoading && feedbackList ? (
        feedbackList.length > 0 ? (
          feedbackList.map((feedback, index) => {
            return <Feedback feedback={feedback} key={index} />;
          })
        ) : (
          <EmptyFeedbackList />
        )
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default FeedbackList;
