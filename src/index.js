import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.css";
import store from "./state/store";
import history from "./state/history";
import Homepage from "./features/homepage/components/Homepage";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact={true} component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
