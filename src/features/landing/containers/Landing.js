import React, { Component } from "react";
import styled from "styled-components";

import LoginForm from "../../auth/containers/LoginForm";
import SignupForm from "../../auth/containers/SignupForm";

import bg from "../bg.jpg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 380px;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Content = styled.div`
  background-color: rgba(237, 25, 101, 0.1);
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Copyright = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

const Header = styled.header``;

const Heading = styled.h1`
  font-size: 1rem;
  color: #3a3133;
`;

const Footer = styled.footer``;

const Text = styled.p`
  color: #3a3133;
  font-size: 0.8rem;
`;

const Span = styled.span`
  color: #ed1965;
  cursor: pointer;
`;

class LandingPage extends Component {
  state = {
    showLogin: true,
    showSignup: false
  };
  handleShowLogin = () => {
    this.setState({ showLogin: true, showSignup: false });
  };
  handleShowSignup = () => {
    this.setState({ showSignup: true, showLogin: false });
  };
  renderHeader = () => {
    const { showLogin } = this.state;
    if (showLogin) {
      return <Heading>Login</Heading>;
    } else {
      return <Heading>Signup</Heading>;
    }
  };
  renderForm = () => {
    const { showLogin } = this.state;
    if (showLogin) {
      return <LoginForm />;
    } else {
      return <SignupForm />;
    }
  };
  renderFooter = () => {
    const { showLogin } = this.state;
    const { handleShowLogin, handleShowSignup } = this;
    if (showLogin) {
      return (
        <Text>
          Don't have an account?{" "}
          <Span onClick={() => handleShowSignup()}>Sign up</Span>
        </Text>
      );
    } else {
      return (
        <Text>
          Have an account? <Span onClick={() => handleShowLogin()}>Log in</Span>
        </Text>
      );
    }
  };
  render() {
    const { renderHeader, renderForm, renderFooter } = this;
    return (
      <Grid>
        <ImageContainer>
          <Content>
            <Copyright>2018 Ministry of Programming</Copyright>
          </Content>
        </ImageContainer>
        <Main>
          <Header>{renderHeader()}</Header>
          {renderForm()}
          <Footer>{renderFooter()}</Footer>
        </Main>
      </Grid>
    );
  }
}

export default LandingPage;
