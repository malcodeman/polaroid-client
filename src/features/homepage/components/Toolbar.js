import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../auth/actions/auth_actions";

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
  logoutHandler = () => {
    this.props.logout(this.props.user);
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <Nav>
            <Link to="/">Confessio</Link>
            <span onClick={this.logoutHandler}>Log Out</span>
          </Nav>
        </Header>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    logout_success: state.auth.logout_success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
