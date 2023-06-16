import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import { Provider } from "react-redux";
import store from "../../../common-lib/store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(root);
root.render(
  <StrictMode>
    <BrowserRouter basename="/mfe">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
