import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@components": `/src/components`,
      "@pages": `/src/pages`,
      "@libs": `/src/libs`,
      "@redux": `/src/redux`,
    },
  },
});
