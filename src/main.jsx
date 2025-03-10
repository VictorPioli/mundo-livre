import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/GlobalStyles.js";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
