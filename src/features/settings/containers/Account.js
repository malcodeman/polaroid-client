import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";
import NameFrom from "./forms/NameForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Account extends Component {
  render() {
    return (
      <Wrapper>
        <GoBack />
        <span>Account</span>
        <NameFrom />
      </Wrapper>
    );
  }
}

export default Account;
