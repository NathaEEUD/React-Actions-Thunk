import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

const nodes = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(nodes, document.getElementById("app"));
