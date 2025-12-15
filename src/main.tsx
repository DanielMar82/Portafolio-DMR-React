import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Frame from "./components/Frame/Frame.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Frame /> */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
