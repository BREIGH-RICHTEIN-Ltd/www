import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/www/", // if repo name is www
  plugins: [react()],
});
