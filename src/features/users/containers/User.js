import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { findUserByUsername } from "../actions";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 0.8rem;
  margin: 4px 0;
`;

class User extends Component {
  componentDidMount = () => {
    const { username } = this.props;
    const { findUserByUsername } = this.props;
    findUserByUsername(username);
  };
  renderUser = () => {
    const { user } = this.props;
    if (user !== null) {
      return (
        <TextContainer>
          <Text>Username: {user.username}</Text>
          <Text>Name: {user.name}</Text>
        </TextContainer>
      );
    }
  };
  render() {
    return (
      <Center>
        <TextContainer>
          <Text>{this.renderUser()}</Text>
        </TextContainer>
      </Center>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  { findUserByUsername }
)(User);
