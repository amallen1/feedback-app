import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import store from "./store";
import { Provider } from "react-redux";

/* Once the store is created, we can make it available to our React 
components by putting a React-Redux <Provider> around our application 
in src/index.js. Import the Redux store we just created, put a <Provider> 
around your <App>, and pass the store as a prop: */

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
