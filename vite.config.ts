import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// helper for absolute paths
const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  // ✅ VERY IMPORTANT for correct routing & assets
  base: "/",

  // ✅ React plugin
  plugins: [react()],

  // ✅ Path aliases
  resolve: {
    alias: {
      "@": r("."),        // root alias
      "@shared": r("shared"), // optional
    },
  },

  // ✅ Build settings (used by Hostinger)
  build: {
    outDir: "dist",       // output folder
    emptyOutDir: true,    // clean old build
  },

  // ✅ Dev server (only for local development)
  server: {
    host: true,
    port: 8080,
  },
});