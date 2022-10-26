import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AUthContextProvider } from "./state/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AUthContextProvider>
      <App />
    </AUthContextProvider>
  </React.StrictMode>
);
