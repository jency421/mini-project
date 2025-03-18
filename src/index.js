import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'

// ReactDOM.render(<AppRouter />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
