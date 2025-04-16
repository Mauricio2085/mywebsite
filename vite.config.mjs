import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // reemplaza con el nombre exacto de tu repositorio en GitHub
  plugins: [react()],
});
