import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";

const Wrapper = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  padding: 24px;
  background-color: #fff;
  width: 256px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  text-align: center;
`;

const Text = styled.p`
  color: #262626;
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  color: #007aff;
`;

class Signup extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <SignupForm />
          <LoginWrapper>
            <Text>
              Have an account? <StyledLink to="/login">Log in</StyledLink>
            </Text>
          </LoginWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default Signup;
