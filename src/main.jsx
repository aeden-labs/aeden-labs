import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const params = new URLSearchParams(window.location.search);
const path = params.get("p");

if (path) {
  window.history.replaceState(null, "", path);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
