import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { findMe } from "../../users/actions";

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
  border: 1px solid #007aff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

class Toolbar extends Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;
    if (me.username === "") {
      findMe();
    }
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
      return <React.Fragment>{this.renderProfilePhoto()}</React.Fragment>;
    } else return <UserCircle />;
  };
  render() {
    return this.renderUser();
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findMe: () => dispatch(findMe())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
