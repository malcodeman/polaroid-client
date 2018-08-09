import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import routes from "../../../core/routes/privateRoutes";
import Header from "../../header/components/Header";

import lightTheme from "../../../core/styles/themes/light";
import darkTheme from "../../../core/styles/themes/dark";

import { findMe } from "../../users/actions/index";

const Main = styled.main`
  margin-top: 64px;
`;

class Homepage extends Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;
    if (me.username === "") {
      findMe();
    }
  };
  renderRoutes = routes => {
    return (
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    );
  };
  getTheme = theme => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={this.getTheme(theme)}>
        <React.Fragment>
          <Header />
          <Main>{this.renderRoutes(routes)}</Main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.users.theme,
    me: state.users.me
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findMe: () => dispatch(findMe())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage)
);
