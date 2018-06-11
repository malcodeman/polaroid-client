import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Switch>
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
    </Switch>
  );
};

export default App;
