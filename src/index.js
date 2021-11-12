import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddelware } from "redux";

import reducer from "./components/reducer";
import App from "./components/App";

const container = document.getElementById("app");
const store = createStore(reducer, applyMiddelware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
