import express, { Router, Request, Response } from 'express'
import { getTweet } from 'react-tweet/api'

class Api {
  public router: Router = express.Router()

  constructor() {
    this.setupRoutes()
  }

  private setupRoutes() {
    this.router.get('/tweet/:id', this.getTweet)
    // Add more routes here as needed

    // catch all 404 for everything
    this.router.use('*', (req, res) => {
      res.status(404).send(`${req.originalUrl || req.url} not found`)
    })
  }

  private getTweet = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const tweet = await getTweet(id)
      res.json({ data: tweet })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'An error occurred while fetching the tweet' })
    }
  }

  // returns a list of all the routes defined in the router
  public listRoutes(): string[] {
    return this.router.stack
      .filter(r => r.route)
      .map(r => r.route!.path);
  }
}

export default new Api();
