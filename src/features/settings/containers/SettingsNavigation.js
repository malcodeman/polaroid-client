import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    display: none;
  }
`;

const ControlsDesktop = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const ControlsItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  font-size: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &.active {
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid transparent;
  }
`;

class Account extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        <Controls>
          <ControlsItem to={"/settings/account"} exact>
            Account
          </ControlsItem>
          <ControlsItem to="/settings/privacy">Privacy</ControlsItem>
          <ControlsItem to="/settings/notifications">
            Notifications
          </ControlsItem>
          <ControlsItem to="/settings/labs">Labs</ControlsItem>
          <ControlsItem to="/settings/themes">Themes</ControlsItem>
        </Controls>
        <ControlsDesktop>
          <ControlsItem
            to={
              pathname === "/settings/account"
                ? "/settings/account"
                : "/settings"
            }
            exact
          >
            Account
          </ControlsItem>
          <ControlsItem to="/settings/privacy">Privacy</ControlsItem>
          <ControlsItem to="/settings/notifications">
            Notifications
          </ControlsItem>
          <ControlsItem to="/settings/labs">Labs</ControlsItem>
          <ControlsItem to="/settings/themes">Themes</ControlsItem>
        </ControlsDesktop>
      </React.Fragment>
    );
  }
}

export default withRouter(Account);
