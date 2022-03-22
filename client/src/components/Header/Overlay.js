import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";

const Div = styled.div`
  background-color: #000;
  opacity: 50%;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
`;

const Menu = styled.div`
  background-color: #f7f8fd;
  height: calc(100vh - (72px));
  width: 72%;
  margin-left: auto;
  z-index: 100;
  padding: 1.5em 1.5em 0 1.5em;
`;

const Overlay = () => {
  return (
    <div>
      <Div></Div>
      <Menu>
        <Sidebar />
        <Roadmap />
      </Menu>
    </div>
  );
};

export default Overlay;
