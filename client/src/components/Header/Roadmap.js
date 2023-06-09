import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetRoadmapFeedbacksQuery } from "../../services/feedbacks";
import {
  RoadmapContainer,
  RoadmapView,
  ViewLink,
  Span,
  ProgressTracker,
  ProgressList,
  ListItem,
} from "../../styles/sidebarStyles";

const Roadmap = () => {
  //grab the roapma data
  const { data, isLoading } = useGetRoadmapFeedbacksQuery();

  const [planned, setPlanned] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [live, setLive] = useState(0);

  const setValues = () => {
    setPlanned(data.filter((item) => item.status === "Planned").length);
    setInProgress(data.filter((item) => item.status === "In-progress").length);
    setLive(data.filter((item) => item.status === "Live").length);
  };

  useEffect(() => {
    if (data) {
      setValues();
    }
  }, [data]);

  return (
    <RoadmapContainer>
      <RoadmapView>
        <h3>Roadmap</h3>
        <ViewLink as={Link} to="/roadmap">
          View
        </ViewLink>
      </RoadmapView>

      <ProgressTracker>
        <ProgressList>
          {!isLoading && (
            <div>
              <ListItem color="var(--orange)">
                Planned <Span>{planned}</Span>
              </ListItem>
              <ListItem color="var(--brightPurple)">
                In Progress <Span>{inProgress}</Span>
              </ListItem>
              <ListItem color="var(--brightBlue)">
                Live <Span>{live}</Span>
              </ListItem>
            </div>
          )}
        </ProgressList>
      </ProgressTracker>
    </RoadmapContainer>
  );
};

export default Roadmap;
