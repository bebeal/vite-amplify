import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { ViteDevServer } from 'vite';
import express from 'express';
import 'dotenv/config';
import api from './api/api.js';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseFloat(process.env.PORT || '5137');

export const createServer = async (root = process.cwd(), env = process.env.NODE_ENV): Promise<{ expressServer: express.Express; viteServer: ViteDevServer | null }> => {
  const isProd = env === 'production';
  const isTest = process.env.VITEST;

  // Configure the server
  const app = express();
  let vite: ViteDevServer | null = null;
  if (!isProd) {
    // Create Vite server and set 'custom' app type to disable Vite's own HTML serving logic
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: { middlewareMode: true, port: PORT },
      appType: 'custom',
      build: { minify: true, ssr: true },
      ssr: {
        noExternal: ['react-tweet'],
      },
    });
    // Use vite's connect instance as middleware (remains valid after restarts)
    app.use(vite.middlewares);
  } else {
    // add static file serving for production builds
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(path.resolve(__dirname, '../client'), {
        index: false,
      }),
    );
  }

  // inject api router
  app.use('/api', api.router);
  console.log('API routes:', api.listRoutes());

  // serve index.html from parent server for all non-file requests
  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      // 1. Read index.html
      let template = fs.readFileSync(path.resolve(__dirname, !isProd ? 'index.html' : '../client/index.html'), 'utf-8');
      // 2. Run transforms on the template. This injects the Vite HMR client, and global preambles from plugins like @vitejs/plugin-react
      template = (await vite?.transformIndexHtml(url, template)) || template;
      // 3. Load the server entry
      let render;
      if (!isProd) {
         // ssrLoadModule automatically transforms ESM source code to be usable in Node.js! There is no bundling required, and provides efficient invalidation similar to HMR.
        render = (await vite?.ssrLoadModule('/src/entry-server.tsx'))?.default.render;
      } else {
        // @ts-expect-error: will only exists in production
        render = (await import('./entry-server.js')).default.render;
      }
      // 4. render the app HTML. This assumes entry-server.js's exported `render` function calls appropriate framework SSR APIs, e.g. ReactDOMServer.renderToString()
      const appHtml = await render(req);
      // 5. Inject the app-rendered HTML into the template, heres where we use the ssr placeholder in the html
      const html = template.replace('<!--ssr-outlet-->', appHtml.html);
      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: unknown) {
      const error = e as Error;
      // let Vite fix the stack trace so it maps back to your actual source code.
      !isProd && vite?.ssrFixStacktrace(error);
      next(e);
    }
  });

  return { expressServer: app, viteServer: vite };
};

createServer().then(({ expressServer }) => {
  const listener = expressServer.listen(PORT, () => {
    const addressInfo = listener.address();
    if (addressInfo && typeof addressInfo !== 'string') {
      console.log(`Express server listening on (${addressInfo?.family}) ${addressInfo?.address === '::' ? 'http://localhost' : addressInfo?.address}:${addressInfo?.port}`);
    }
  });
});
