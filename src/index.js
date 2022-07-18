import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styled";
import App from "./App";
import { Provider } from "react-redux";
import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
