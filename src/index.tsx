import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./components/HomePage";

const App = () => {
  return <HomePage />;
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
