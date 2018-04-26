import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import store from "./state/store";
import Posts from "./features/posts/components/Posts";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Posts} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
