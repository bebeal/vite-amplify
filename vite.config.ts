import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig((options) => {
  const isDev = process.env.NODE_ENV === 'development';

  // Shared Config for both Client and SSR Build
  const sharedConfig = {
    plugins: [
      react(),
      // for importing .svg files as react components, and .svg?url as URLs
      svgr({
        svgrOptions: { dimensions: true, icon: true },
        include: '**/*.svg',
      }),
    ],
  };

  if (options?.isSsrBuild) {
    // SSR Build
    return {
      ...sharedConfig,
      build: {
        minify: !isDev,
        ssr: true,
        emptyOutDir: false,
        outDir: 'dist/server',
      },
      ssr: {
        noExternal: ['react-tweet'],
      }
    } satisfies UserConfig;;
  } else {
    // Client Build
    return {
      ...sharedConfig,
      build: {
        minify: !isDev,
        ssrManifest: true,
        emptyOutDir: false,
        outDir: 'dist/client',
      }
    } satisfies UserConfig;;
  }
});
