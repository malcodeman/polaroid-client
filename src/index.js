import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";

import "./index.css";
import store from "./state/store";
import history from "./state/history";

import App from "./features/App";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
