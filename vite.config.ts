import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig((options) => {
  const isDev = process.env.NODE_ENV === 'development';

  // Shared Config for both Client and SSR Build
  const sharedConfig = {
    plugins: [
      react()
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
