import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./router/index";

const App = () => {
  return <AppRouter />;
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
