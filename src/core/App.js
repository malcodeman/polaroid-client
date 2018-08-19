import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Landing from "../features/landing/containers/Landing";
import Home from "../features/home/containers/Home";

import lightTheme from "../core/styles/themes/light";
import darkTheme from "../core/styles/themes/dark";

class App extends Component {
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
        {localStorage.getItem("token") === null ? <Landing /> : <Home />}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.users.theme
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
