import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterContextProvider } from "./context/counter.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);
