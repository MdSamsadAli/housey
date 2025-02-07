import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./assets/css/bootstrap.css";
import "./assets/css/animate.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/ion.rangeSlider.min.css";
import "./assets/css/flatpicker-min.css";
import "./assets/css/spacing.css";
import "./assets/css/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
