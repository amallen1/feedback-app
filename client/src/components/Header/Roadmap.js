import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [planned, setPlanned] = useState(2);
  const [inProgress, setInProgress] = useState(3);
  const [live, setLive] = useState(1);
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
          <ListItem color="var(--orange)">
            Planned <Span>{planned}</Span>
          </ListItem>
          <ListItem color="var(--brightPurple)">
            In Progress <Span>{inProgress}</Span>
          </ListItem>
          <ListItem color="var(--brightBlue)">
            Live <Span>{live}</Span>
          </ListItem>
        </ProgressList>
      </ProgressTracker>
    </RoadmapContainer>
  );
};

export default Roadmap;
