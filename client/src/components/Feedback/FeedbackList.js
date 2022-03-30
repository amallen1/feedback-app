import React, { useState, useEffect } from "react";
import Feedback from "./Feedback";
import styled from "styled-components/macro";
import EmptyFeedbackList from "./EmptyFeedbackList";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 2em 1em 2.4375em 1em;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const FeedbackList = () => {
  // const [feedbackData, setFeedbackData] = useState([]);
  const feedbacks = useSelector((state) => state.feedbacks);
  const [loading, setLoading] = useState(true);

  //feedbackData.length needs to be the same as subheader count

  // useEffect(() => {
  //   //gets all comments
  //   fetch(`http://localhost:5000/api/load-comments`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setFeedbackData(res);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <Container>
      {/* {!loading
        ? feedbackData.map((feedback, index) => {
            return <Feedback feedback={feedback} key={index} />;
          })
        : null} */}

      {feedbacks.map((feedback, index) => {
        return <Feedback feedback={feedback} key={index} />;
      })}
    </Container>
  );
};

export default FeedbackList;
