import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Account from "./Account";
import Privacy from "./Privacy";
import Notifications from "./Notifications";
import Labs from "./Labs";
import Themes from "./Themes";
import SettingsNavigation from "./SettingsNavigation";

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Main = styled.main`
  @media (min-width: 576px) {
    display: none;
  }
`;

const MainDesktop = styled.main`
  display: none;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 256px 1fr;
  }
`;

class Settings extends Component {
  render() {
    return (
      <Container>
        <Main>
          <Route path={"/settings"} exact component={SettingsNavigation} />
          <Route path={"/settings/account"} component={Account} />
          <Route path={"/settings/privacy"} component={Privacy} />
          <Route path={"/settings/notifications"} component={Notifications} />
          <Route path={"/settings/labs"} component={Labs} />
          <Route path={"/settings/themes"} component={Themes} />
        </Main>
        <MainDesktop>
          <SettingsNavigation />
          <Route path={"/settings"} exact component={Account} />
          <Route path={"/settings/account"} component={Account} />
          <Route path={"/settings/privacy"} component={Privacy} />
          <Route path={"/settings/notifications"} component={Notifications} />
          <Route path={"/settings/labs"} component={Labs} />
          <Route path={"/settings/themes"} component={Themes} />
        </MainDesktop>
      </Container>
    );
  }
}

export default Settings;
