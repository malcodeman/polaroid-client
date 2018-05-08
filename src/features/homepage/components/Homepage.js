import React from "react";
import styled from "styled-components";

import Toolbar from "./Toolbar";
import Posts from "../../posts/components/Posts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Homepage = props => {
  return (
    <Wrapper>
      <Toolbar />
      <Posts />
    </Wrapper>
  );
};

export default Homepage;
