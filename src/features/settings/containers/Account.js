import React, { Component } from "react";
import styled from "styled-components";

import GoBack from "../components/GoBack";
import NameFrom from "./forms/NameForm";
import UsernameForm from "./forms/UsernameForm";
import EmailForm from "./forms/EmailForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

class Account extends Component {
  render() {
    return (
      <Wrapper>
        <GoBack />
        <span>Account</span>
        <EmailForm />
        <NameFrom />
        <UsernameForm />
      </Wrapper>
    );
  }
}

export default Account;
