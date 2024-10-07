import React from "react";
import ReactDOM from "react-dom/client";
import { GlitzClient } from "@glitz/core";
import { GlitzProvider } from "@glitz/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const glitz = new GlitzClient();

root.render(
  <React.StrictMode>
    <GlitzProvider glitz={glitz}>
      <App />
    </GlitzProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
