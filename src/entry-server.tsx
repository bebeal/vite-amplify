// entry-server: renders the app using the framework's SSR API: ReactDomServer.renderToString in this case
import express from 'express';
import ReactDomServer from 'react-dom/server';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import routes from './routes';

import './index.css';

const render = async (req: express.Request) => {
  const handler = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);
  const context = await handler.query(fetchRequest);
  if (context instanceof Response) {
    throw context;
  }
  const router = createStaticRouter(handler.dataRoutes, context);
  const html = ReactDomServer.renderToString(<StaticRouterProvider router={router} context={context} nonce='the-nonce' />);
  return { html, ...context };
};

const createFetchRequest = (req: express.Request): Request => {
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

  return new Request(url.href, init);
};

export default {
  render,
  createFetchRequest,
};
