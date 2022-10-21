import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store.js";
import { Provider } from "react-redux";
import "./index.module.css";
import App from "./App";
import "./fontawesome";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./layout/ScrollToTop.js";
import AuthService from "./service/auth_service";
const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <App authService={authService} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
