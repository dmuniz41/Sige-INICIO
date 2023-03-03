import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </BrowserRouter>
  </Provider>
);
