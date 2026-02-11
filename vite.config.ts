import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  // Alterado para funcionar com GitHub Pages - substitua 'portfolio-spark' pelo nome do seu repositório se for diferente
=======
>>>>>>> dc3fda7db6cf6c3d351d7f85c3d577fd6aca3736
  base: "/portfolio-spark/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
