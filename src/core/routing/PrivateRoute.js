import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (localStorage.getItem("token") === null) {
        return <Redirect to="/login" />;
      }
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
