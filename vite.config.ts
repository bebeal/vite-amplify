import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import consolePrefix from '@bebeal/console-prefix-plugin';
import { defineConfig, UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig((options) => {
  // Shared Config for both Client and SSR Build
  const sharedConfig = {
    plugins: [
      consolePrefix(options?.isSsrBuild ? '[server]' : '[app]', options?.isSsrBuild ? 'magenta' : 'cyan'),
      react(),
      // for importing .svg files as react components, and .svg?url as URLs
      svgr({
        svgrOptions: { dimensions: true, icon: true },
        include: '**/*.svg',
      }),
      tailwindcss(),
    ],
  };

  if (options?.isSsrBuild) {
    // SSR Build
    return {
      ...sharedConfig,
      build: {
        minify: true,
        ssr: true,
        emptyOutDir: false,
        outDir: 'dist/server',
      },
      ssr: {
        noExternal: ['react-tweet'],
      }
    } satisfies UserConfig;
  } else {
    // Client Build
    return {
      ...sharedConfig,
      build: {
        minify: true,
        ssrManifest: true,
        emptyOutDir: false,
        outDir: 'dist/client',
      },
    } satisfies UserConfig;
  }
});
