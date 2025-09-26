import React from "react";
import { createRoot } from "react-dom/client";
import StyloEFX from "./StyloEFX";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <StyloEFX />
  </React.StrictMode>
);
