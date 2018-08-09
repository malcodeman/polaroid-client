import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Photo = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%
  object-fit: cover;
`;

const UserCircle = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #007aff;
  color: ${props => props.theme.primary};
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

class Toolbar extends Component {
  renderProfilePhoto = () => {
    const { profilePhotoURL, nameFirstLetter } = this.props.me;
    if (profilePhotoURL) {
      return <Photo src={profilePhotoURL} />;
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

export default connect(
  mapStateToProps,
  null
)(Toolbar);
