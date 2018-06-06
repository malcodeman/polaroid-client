import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
  componentDidMount = () => {};
  render() {
    return (
      <Center>
        <TextContainer>
          <Text>random user</Text>
        </TextContainer>
      </Center>
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
)(User);
