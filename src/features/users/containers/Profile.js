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
    const { me, loading, error } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Sorry, this page isn't available.</p>;
    } else if (me !== null && loading === false && error === false) {
      return (
        <React.Fragment>
          <TextContainer>
            <Text>Username: {me.username}</Text>
            <Text>Name: {me.name}</Text>
            <Text>Email: {me.email}</Text>
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
    me: state.users.me,
    loading: state.users.loading,
    error: state.users.error
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
