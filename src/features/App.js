import React, { Component } from "react";
import { Route } from "react-router-dom";

import routes from "../routes";
import PrivateRoute from "../routes/PrivateRoute";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {routes.map(route => {
          if (route.private) {
            return (
              <PrivateRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          } else {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          }
        })}
      </React.Fragment>
    );
  }
}

export default App;
