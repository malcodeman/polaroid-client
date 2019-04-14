import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as userIcon } from "../assets/user.svg";

const StyledHeader = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  padding: 0 24px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  margin-right: 4px;
  color: ${props => props.theme.primary};
`;

const UserIcon = styled(userIcon)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.primary};
`;

const Header = props => {
  const { me } = props;

  function handleLogOut() {
    localStorage.removeItem("token");
  }

  function isLoggedIn() {
    return Boolean(localStorage.getItem("token"));
  }

  return (
    <StyledHeader>
      <Nav>
        <Links>
          <StyledLink to="/">Home</StyledLink>
        </Links>
        {isLoggedIn() ? (
          <Links>
            <StyledLink to="/settings">Settings</StyledLink>
            <StyledLink to="/" onClick={handleLogOut}>
              Log Out
            </StyledLink>
            <Link to={`/${me.username}`}>
              <UserIcon />
            </Link>
          </Links>
        ) : (
          <Links>
            <StyledLink to="/login">Log In </StyledLink>
            <StyledLink to="/">Sign Up</StyledLink>
          </Links>
        )}
      </Nav>
    </StyledHeader>
  );
};

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
