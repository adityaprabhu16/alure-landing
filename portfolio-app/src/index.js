import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Match CRA `homepage` / asset base path so client routes work when not hosted at domain root.
function routerBasename() {
  const base = process.env.PUBLIC_URL || "";
  if (!base || base === "/") return undefined;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={routerBasename()}>
    <App />
  </BrowserRouter>
);