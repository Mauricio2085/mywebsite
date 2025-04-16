import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mywebsite/", // reemplaza con el nombre exacto de tu repositorio en GitHub
  plugins: [react()],
});
