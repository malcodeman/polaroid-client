import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";
import NameFrom from "./forms/NameForm";
import UsernameForm from "./forms/UsernameForm";

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
        <UsernameForm />
      </Wrapper>
    );
  }
}

export default Account;
