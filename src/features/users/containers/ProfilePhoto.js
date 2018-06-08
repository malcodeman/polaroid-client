import React, { Component } from "react";
import styled from "styled-components";

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
  render() {
    return (
      <Wrapper>
        <Photo>{this.props.nameFirstLetter}</Photo>
      </Wrapper>
    );
  }
}

export default ProfilePhoto;
