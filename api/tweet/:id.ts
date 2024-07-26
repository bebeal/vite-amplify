// api/tweet/:id.ts

import { getTweet } from 'react-tweet/api';
import { Request, Response } from 'express';

const handler = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const tweet = await getTweet(id);
    response.json({ data: tweet });
  } catch (e: unknown) {
    const error = e as Error;
    console.error(error);
    response.status(500).json(error);
  }
};

export default handler;
