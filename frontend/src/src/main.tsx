import App from './App.tsx'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)