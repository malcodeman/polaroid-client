import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Notifications extends Component {
  render() {
    return (
      <Wrapper>
        <GoBack />
        <span>Notifications, coming soon</span>
      </Wrapper>
    );
  }
}

export default Notifications;
