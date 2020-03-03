import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./router/index";
import store from "./store/index";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
