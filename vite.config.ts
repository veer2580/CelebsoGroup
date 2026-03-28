import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        r("."),        // root folder
        r("shared"),   // optional (keep if used)
      ],
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**",
      ],
    },
  },

  build: {
    outDir: "dist",   // ✅ IMPORTANT (Hostinger needs this)
  },

  plugins: [
    react(),          // ✅ only React plugin
  ],

  resolve: {
    alias: {
      "@": r("."),        // ✅ root alias (since no client folder now)
      "@shared": r("shared"),
    },
  },
});