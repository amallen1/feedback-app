import React from "react";
import styled from "styled-components/macro";
import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";

const Wrapper = styled.div`
  /* position: absolute; */
  /* z-index: 200; */
  /* width: 100%; */
  /* height: 100%; */
`;

const Div = styled.div`
  background-color: #000;
  opacity: 50%;
  height: 100%;
  width: 28%;
  position: fixed;
  z-index: 100;
`;

const Menu = styled.div`
  background-color: #f7f8fd;
  height: calc(100vh - (72px));
  width: 72%;
  height: 100%;
  margin-left: auto;
  z-index: 150;
  padding: 1.5em 1.5em 0 1.5em;
  position: fixed;
  right: 0px;
`;

const Overlay = ({ toggle }) => {
  console.log(toggle);
  return (
    <Wrapper>
      <Div onClick={() => toggle()} />
      <Menu>
        <Sidebar />
        <Roadmap />
      </Menu>
    </Wrapper>
  );
};

export default Overlay;