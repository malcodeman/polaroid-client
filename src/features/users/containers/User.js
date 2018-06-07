import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Posts from "../components/Posts";
import { findUserByUsername } from "../actions";

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
        <React.Fragment>
          <TextContainer>
            <Text>Username: {user.username}</Text>
            <Text>Name: {user.name}</Text>
          </TextContainer>
          <Posts posts={user.posts} />
        </React.Fragment>
      );
    }
  };
  render() {
    return <div>{this.renderUser()}</div>;
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
