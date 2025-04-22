import React from "react";
import reactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import "./i18n/index.js"; // Importa el archivo de configuración de i18n

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
