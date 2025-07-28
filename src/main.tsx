import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Frame from "./Frame/Frame.tsx";
import App from "./App.tsx";
import Footer from "./Footer/Footer.tsx";
import Studies from "./Studies.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Frame />
  </StrictMode>
);
