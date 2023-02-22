import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App";
import "./main.css";

const reactRoot = createRoot(document.getElementById('app'));
reactRoot.render(<App />);