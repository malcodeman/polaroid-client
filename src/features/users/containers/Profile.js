import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../../header/components/Header";
import NewPost from "../../header/components/NewPost";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 992px;
  margin: 0 auto;
`;

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

class Profile extends Component {
  renderMe = () => {
    const { me } = this.props;
    if (me !== null) {
      return (
        <TextContainer>
          <Text>Username: {me.username}</Text>
          <Text>Email: {me.email}</Text>
          <Text>Name: {me.name}</Text>
        </TextContainer>
      );
    }
  };
  render() {
    return (
      <Wrapper>
        <Header>
          <NewPost />
        </Header>
        <Content>
          <Container>
            <Center>{this.renderMe()}</Center>
          </Container>
        </Content>
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
)(Profile);
