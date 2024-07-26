import express, { Router } from 'express'

class Api {
  public router: Router = express.Router()

  constructor (routes: string[] = []) {
    // json serialized list of the available API routes at /api
    this.router.get('/', (req, res) => {
      res.json({ routes: this.listRoutes().map(r => `/api${r}`) });
    });
    routes.forEach(path => this.addRoute(path));
    // catch all 404 for everything else
    this.router.use('*', (req, res) => {
      res.status(404).send(`${req.originalUrl || req.url} not found`);
    });
  }

  public addRoute(path: string) {
    // localizes the path to be a route to a handler
    this.router.get(path, (req, res) => import(`./${path}.js`).then(m => m.default(req, res)));
  }

  // returns a list of all the routes defined in the router
  public listRoutes(): string[] {
    return this.router.stack
      .filter((r) => r.route?.path &&  r.route?.path?.length > 1)
      .map(r => r.route!.path);
  }

}

// add api routes here
const api = new Api([
  '/tweet/:id',
]);
export default api;
