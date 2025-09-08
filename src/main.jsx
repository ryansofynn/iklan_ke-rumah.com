import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initFacebookPixel } from "./fbPixel.js";

// Inisialisasi Pixel sebelum render aplikasi
initFacebookPixel();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
