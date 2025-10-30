import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Light mode by default (remove dark class)
// document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(<App />);
