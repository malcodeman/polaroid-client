import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

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

class Login extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <LoginForm />
          <LoginWrapper>
            <Text>
              Don't have an account?{" "}
              <StyledLink to="/signup">Sign up</StyledLink>
            </Text>
          </LoginWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default Login;
