import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (localStorage.getItem("token") !== null) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }
    }}
  />
);

export default PrivateRoute;
