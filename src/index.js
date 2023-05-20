import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

reportWebVitals();

reportWebVitals();
