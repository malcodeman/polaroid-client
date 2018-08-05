import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Labs extends Component {
  render() {
    return (
      <Wrapper>
        <GoBack />
        <span>Labs, coming soon</span>
      </Wrapper>
    );
  }
}

export default Labs;
