import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Privacy extends Component {
  render() {
    return (
      <Wrapper>
        <GoBack />
        <span>Privacy</span>
      </Wrapper>
    );
  }
}

export default Privacy;
