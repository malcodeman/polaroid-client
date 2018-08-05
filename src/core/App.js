import React from "react";

import Landing from "../features/landing/containers/Landing";
import Home from "../features/home/containers/Home";

const App = () => {
  if (localStorage.getItem("token") !== null) {
    return <Home />;
  }
  return <Landing />;
};

export default App;
