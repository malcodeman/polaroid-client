import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../auth/actions/auth_actions";
import { findMe } from "../../users/actions";

import user from "../images/user.svg";

const Button = styled.button`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 6px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

const Photo = styled.img`
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

const UserCircle = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: #007aff;
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-left: 6px;
`;

class Toolbar extends Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;
    if (me === null) {
      findMe();
    }
  };
  logoutHandler = () => {
    const { logout, me } = this.props;
    logout(me);
  };
  renderProfilePhoto = () => {
    const { profilePhotoURL, nameFirstLetter } = this.props.me;
    if (profilePhotoURL) {
      return <Photo src={profilePhotoURL} height="24" width="24" circle />;
    } else {
      return <UserCircle>{nameFirstLetter}</UserCircle>;
    }
  };
  renderUser = () => {
    const { me } = this.props;
    if (me !== null) {
      return <Link to={`${me.username}`}>{this.renderProfilePhoto()}</Link>;
    } else return <UserCircle />;
  };
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.logoutHandler}>Log Out</Button>
        {this.renderUser()}
      </React.Fragment>
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
)(Toolbar);
