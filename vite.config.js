import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/cv/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-icons": [
            "react-icons/hi",
            "react-icons/fa",
            "react-icons/si",
            "react-icons/tb",
            "react-icons/vsc",
            "react-icons/bi",
            "react-icons/gi",
            "react-icons/md",
            "react-icons/fi",
          ],
        },
      },
    },
  },
});
