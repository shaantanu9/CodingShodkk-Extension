import React from "react";
import { createRoot } from "react-dom/client";
import "fontsource-roboto";
import "./popup.scss";
import App from "../components/App";
const container = document.getElementById("root-popup");
const root = createRoot(container);
import StateContextProvider from "../components/context/StateContext";
root.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);
