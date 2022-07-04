// imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// redux
import { store } from "./store";
import { Provider } from "react-redux";
// setup
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
