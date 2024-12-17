import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoolContextProvider from "./context/StoolContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoolContextProvider>
      <App />
    </StoolContextProvider>
  </BrowserRouter>
);
