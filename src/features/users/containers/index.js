import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Profile from "./Profile";
import User from "./User";
import Header from "../../header/components/Header";
import NewPost from "../../header/components/NewPost";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 40px 0;
  @media (min-width: 768px) {
    padding: 40px 20px;
    max-width: 992px;
    margin: 0 auto;
  }
`;

class Root extends Component {
  renderUser = () => {
    const { username } = this.props.match.params;
    const { me } = this.props;
    if (me !== null) {
      if (username === me.username) {
        return <Profile />;
      } else {
        return <User username={username} />;
      }
    }
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <NewPost />
        </Header>
        <Container>{this.renderUser()}</Container>
      </Wrapper>
    );
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
)(Root);
