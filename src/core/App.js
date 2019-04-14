import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Landing from "../features/landing/containers/Landing";
import Home from "../features/home/containers/Home";

import lightTheme from "../core/styles/themes/light";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        {localStorage.getItem("token") === null ? <Landing /> : <Home />}
      </ThemeProvider>
    );
  }
}

export default App;
