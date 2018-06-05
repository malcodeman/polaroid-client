import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../auth/actions/auth_actions";

import user from "../images/user.svg";

const Wrapper = styled.div`
  flex-basis: 64px;
`;

const StyledHeader = styled.header`
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

const Button = styled.button`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 6px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  ${props => {
    if (props.circle) {
      return "border-radius: 50%";
    } else if (props.margin) {
      return "margin: 0 6px";
    }
  }};
  object-fit: cover;
`;

class Header extends Component {
  logoutHandler = () => {
    this.props.logout(this.props.user);
  };
  render() {
    return (
      <Wrapper>
        <StyledHeader>
          <Nav>
            <Link to="/">Confessio</Link>
            <div>
              <Link to="/new-post">
                <Button>New Post</Button>
              </Link>
              <Button onClick={this.logoutHandler}>
                <span>Log Out</span>
              </Button>
              <Link to={`${this.props.user.email}`}>
                <Image height="20" width="20" margin src={user} />
              </Link>
            </div>
          </Nav>
        </StyledHeader>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
