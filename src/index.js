import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import store from "./state/store";
import Homepage from "./features/homepage/components/Homepage";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
