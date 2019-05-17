import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";

import Profile from "../containers/Profile";
import Notification from "./Notifications";

const Grid = styled.div`
  display: grid;
  padding: 0 24px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    padding: 0;
    grid-template-columns: 1fr 2fr;
    grid-gap: 24px;
  }
`;

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 16px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  background-color ${props => props.theme.backgroundSecondary};
`;

const StyledNavLink = styled(NavLink)`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
  :not(:last-child) {
    margin-bottom: 24px;
  }
  &.active {
    color: ${props => props.theme.primary};
  }
`;

const Settings = () => {
  return (
    <Grid>
      <SideNav>
        <StyledNavLink exact to="/settings">
          Edit profile
        </StyledNavLink>
        <StyledNavLink exact to="/settings/notifications">
          Notifications
        </StyledNavLink>
      </SideNav>
      <>
        <Route exact path="/settings" component={Profile} />
        <Route path="/settings/notifications" component={Notification} />
      </>
    </Grid>
  );
};

export default Settings;
