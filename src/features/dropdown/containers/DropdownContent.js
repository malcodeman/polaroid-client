import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../auth/actions/auth_actions";
import { findMe } from "../../users/actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.8rem;
  margin: 6px 0;
`;

class DropdownContent extends Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;
    if (me.username === "") {
      findMe();
    }
  };
  handleLogout = () => {
    const { logout, me } = this.props;
    logout(me);
  };
  render() {
    const { me, handleToggleMenu } = this.props;
    return (
      <Wrapper>
        <StyledLink to={`${me.username}`} onClick={handleToggleMenu}>
          Profile
        </StyledLink>
        <StyledLink to={`/settings`} onClick={handleToggleMenu}>
          Settings
        </StyledLink>
        <StyledLink to={"#"} onClick={this.handleLogout}>
          Log out
        </StyledLink>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch(logout(user)),
    findMe: () => dispatch(findMe())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownContent);
