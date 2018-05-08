import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  flex-basis: 64px;
`;

const Header = styled.header`
  top: 0;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  padding: 0 20px;
`;

class Toolbar extends Component {
  signout = () => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <Nav>
            <Link to="/">Confessio</Link>
            <span onClick={this.signout}>Sign Out</span>
          </Nav>
        </Header>
      </Wrapper>
    );
  }
}

export default Toolbar;
