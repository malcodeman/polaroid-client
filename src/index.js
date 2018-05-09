import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.css";
import store from "./state/store";
import history from "./state/history";
import Posts from "./features/posts/components/Posts";
import PostsNew from "./features/posts/components/PostsNew";
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
      <React.Fragment>
        <PrivateRoute path="/" exact component={Posts} />
        <PrivateRoute path="/new-post" exact component={PostsNew} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
