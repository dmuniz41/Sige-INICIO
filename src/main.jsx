import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ProSidebarProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ProSidebarProvider>
    </BrowserRouter>
  </Provider>
);
