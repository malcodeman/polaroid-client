import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-basis: 64px;
`;

const Header = styled.header`
  top: 0;
  position: fixed;
  height: 64px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

class Toolbar extends Component {
  signout = () => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <span onClick={this.signout}>Sign Out</span>
        </Header>
      </Wrapper>
    );
  }
}

export default Toolbar;
