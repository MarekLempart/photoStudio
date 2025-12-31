import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "./",
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Pobieramy zmienną środowiskową ustawioną w package.json
  const deployEnv = process.env.VITE_DEPLOY_ENV;

  // Domyślnie base to './' (relatywna), ale dla specyficznych środowisk ustawiamy sztywno:
  let base = './';

  if (deployEnv === 'ghpages') {
    // Dla GitHub Pages musimy uwzględnić nazwę repozytorium
    base = '/photoStudio/';
  } else if (deployEnv === 'ovh') {
    // Dla własnej domeny (mmphoto.org) katalogiem głównym jest root
    base = '/';
  }

  return {
    base: base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});