import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

//I updated styled components and material UI to the current latest version
//I don't see any breaking changes as of yet.
//I got rid of the styledcomponents/macro file since it's outdated in v6 styled component
//I figured out how to add the correct babel plugin below

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-styled-components"],
        },
      }),
    ],
    define: {
      "process.env.API_BASE_URL": JSON.stringify(env.API_BASE_URL),
    },
  };
});
