import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
