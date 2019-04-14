import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import LoginForm from "../../auth/components/LoginForm";
import SignupForm from "../../auth/components/SignupForm";
import bg from "../assets/bg.jpg";

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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Header = styled.header``;

const Heading = styled.h1`
  font-size: 1rem;
  color: ${props => props.theme.primary};
`;

const Footer = styled.footer``;

const Text = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.link};
`;

const Signup = () => {
  return (
    <>
      <Header>
        <Heading>Signup</Heading>
      </Header>
      <SignupForm />
      <Footer>
        <Text>
          Have an account? <StyledLink to="/login">Log in</StyledLink>
        </Text>
      </Footer>
    </>
  );
};

const Login = () => {
  return (
    <>
      <Header>
        <Heading>Login</Heading>
      </Header>
      <LoginForm />
      <Footer>
        <Text>
          Don't have an account? <StyledLink to="/">Sign up</StyledLink>
        </Text>
      </Footer>
    </>
  );
};

const Landing = () => {
  return (
    <Grid>
      <ImageContainer />
      <Main>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
      </Main>
    </Grid>
  );
};

export default Landing;
