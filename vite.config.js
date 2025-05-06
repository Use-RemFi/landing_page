import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        "": "index.html",
        about: "about.html",
        contact: "contact.html",
      },
    },
  },
});
