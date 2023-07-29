import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateContext } from "./context/StateContext";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StateContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContext>
);
