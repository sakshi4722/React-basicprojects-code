import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const app = document.getElementById("app");

ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
