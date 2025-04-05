import 'dotenv/config';
import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { ViteDevServer } from 'vite';
import api from './api/api.js';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseFloat(process.env.PORT || '5137');

// Server log function that adds timestamp
const serverLog = (...args: unknown[]) => {
  const timeColor = '\x1b[90m'; // Gray color code
  const serverColor = '\x1b[35m'; // Purple color for [server]
  const resetColor = '\x1b[0m'; // Reset color
  const time = new Date().toLocaleTimeString();
  console.log(`${timeColor}${time} ${serverColor}[server]${resetColor}`, ...args);
};

const createFetchRequest = (req: express.Request, res: express.Response, next: () => void) => {
    const origin = `${req.protocol}://${req.get('host')}`;
    // Note: This had to take originalUrl into account for presumably vite's proxying
    const url = new URL(req.originalUrl || req.url, origin);

    const controller = new AbortController();
    req.on('close', () => controller.abort());

    const headers = new Headers();

    for (const [key, values] of Object.entries(req.headers)) {
      if (values) {
        if (Array.isArray(values)) {
          for (const value of values) {
            headers.append(key, value);
          }
        } else {
          headers.set(key, values);
        }
      }
    }

    const init: RequestInit = {
      method: req.method,
      headers,
      signal: controller.signal,
    };
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = req.body;
    }
    res.locals.fetchRequest = new Request(url.href, init);

    next();
  };

export const createServer = async (root = process.cwd(), env = process.env.NODE_ENV): Promise<{ expressServer: express.Express; viteServer: ViteDevServer | null }> => {
  const isProd = env === 'production';
  const isTest = process.env.VITEST;

  // Configure the server
  const app = express();
  // inject api router
  app.use('/api',
    createFetchRequest,
    api.router,
  );
  serverLog('API routes:', api.listRoutes());

  let vite: ViteDevServer | null = null;
  if (!isProd) {
    // Create Vite server and set 'spa' app type ()
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: { middlewareMode: true, port: PORT },
      appType: 'spa',
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

  // serve client side index.html
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, !isProd ? 'index.html' : '../client/index.html'));
  });

  return { expressServer: app, viteServer: vite };
};

createServer().then(({ expressServer }) => {
  const listener = expressServer.listen(PORT, () => {
    const addressInfo = listener.address();
    if (addressInfo && typeof addressInfo !== 'string') {
      serverLog(`Express server listening on (${addressInfo?.family}) ${addressInfo?.address === '::' ? 'http://localhost' : addressInfo?.address}:${addressInfo?.port}`);
    }
  });
});
