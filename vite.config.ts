import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import consolePrefix from '@bebeal/console-prefix-plugin';
import { defineConfig, UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      consolePrefix('[app]', 'cyan'),
      react(),
      // for importing .svg files as react components, and .svg?url as URLs
      svgr({
        svgrOptions: { dimensions: true, icon: true },
        include: '**/*.svg',
      }),
      tailwindcss(),
    ],
    build: {
      minify: true,
      outDir: 'dist/client',
    },
  } satisfies UserConfig;
});
