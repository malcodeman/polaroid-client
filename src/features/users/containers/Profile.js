import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Posts from "../components/Posts";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 0.8rem;
  margin: 4px 0;
`;

class Profile extends Component {
  renderMe = () => {
    const { me } = this.props;
    if (me !== null) {
      return (
        <React.Fragment>
          <TextContainer>
            <Text>Username: {me.username}</Text>
            <Text>Email: {me.email}</Text>
            <Text>Name: {me.name}</Text>
          </TextContainer>
          <Posts posts={me.posts} />
        </React.Fragment>
      );
    }
  };
  render() {
    return <div>{this.renderMe()}</div>;
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
)(Profile);
