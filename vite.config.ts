import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
