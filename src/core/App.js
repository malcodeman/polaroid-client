import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import defaultTheme from "./styles/themes/light";
import store from "./state/store";
import history from "./routing/history";
import Landing from "../features/landing/components/Landing";
import Home from "../features/home/containers/Home";

const Root = () => {
  if (localStorage.getItem("token") === null) {
    return <Landing />;
  }
  return <Home />;
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router history={history}>
          <Route exact path="/" component={Root} />
          <Route path="/login" component={Landing} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
