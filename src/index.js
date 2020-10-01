import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./core/App";
import store from "./core/state/store";
import GlobalStyle from "./core/styles/GlobalStyle";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById("root")
);
