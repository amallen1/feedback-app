import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), macrosPlugin()],
    define: {
      "process.env.API_BASE_URL": JSON.stringify(env.API_BASE_URL),
    },
  };
});
