import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";

import Landing from "../features/landing/containers/Landing";
import Home from "../features/home/containers/Home";

import lightTheme from "../core/styles/themes/light";

const Root = () => {
  if (localStorage.getItem("token") === null) {
    return <Landing />;
  }
  return <Home />;
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <Route exact path="/" component={Root} />
      </ThemeProvider>
    );
  }
}

export default App;
