import React, { Component } from "react";
import styled from "styled-components";

import Modal from "../components/Modal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.div`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  background-color: #007aff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

class ProfilePhoto extends Component {
  state = {
    openModal: false
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleEscape, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape, false);
  }
  handleClick = () => {
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }));
  };
  handleEscape = event => {
    if (event.keyCode === 27) {
      this.setState({ openModal: false });
    }
  };
  renderModal = () => {
    const { openModal } = this.state;
    if (openModal) {
      return <Modal />;
    }
  };
  render() {
    return (
      <Wrapper>
        <Photo onClick={this.handleClick}>{this.props.nameFirstLetter}</Photo>
        {this.renderModal()}
      </Wrapper>
    );
  }
}

export default ProfilePhoto;
