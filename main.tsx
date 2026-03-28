import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

// Check if root already exists (for HMR safety)
if (!(rootElement as any)._reactRootContainer) {
  createRoot(rootElement).render(<App />);
}
