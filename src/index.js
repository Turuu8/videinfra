import "./main-style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RoutesComponent } from "./router";
import { PathContext } from "./context/VariableContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PathContext>
    <RoutesComponent />
  </PathContext>
);
reportWebVitals();
