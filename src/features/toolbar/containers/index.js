import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Photo = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%
  object-fit: cover;
  display: ${props => (props.show ? "block" : "none")};
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
  state = { imageLoaded: false };
  handleImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };
  renderProfilePhoto = (profilePhotoURL, nameFirstLetter) => {
    if (profilePhotoURL && !this.state.imageLoaded) {
      return (
        <React.Fragment>
          <UserCircle>{nameFirstLetter}</UserCircle>
          <Photo
            src={profilePhotoURL}
            onLoad={this.handleImageLoaded}
            show={false}
          />
        </React.Fragment>
      );
    } else if (profilePhotoURL && this.state.imageLoaded) {
      return (
        <Photo
          src={profilePhotoURL}
          onLoad={this.handleImageLoaded}
          show={this.state.imageLoaded}
        />
      );
    } else {
      return <UserCircle>{nameFirstLetter}</UserCircle>;
    }
  };
  render() {
    const { loading } = this.props;
    const { profilePhotoURL, nameFirstLetter } = this.props.me;
    if (loading) {
      return <UserCircle />;
    }
    return this.renderProfilePhoto(profilePhotoURL, nameFirstLetter);
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me,
    loading: state.users.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Toolbar);
