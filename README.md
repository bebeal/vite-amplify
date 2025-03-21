# Personal Website

personal website

## Content Management

Blog posts and content are written in MDX format and stored in `src/assets/mdx/`. Each post can include:
- Frontmatter metadata
- Rich text formatting
- Code snippets with syntax highlighting
- Custom React components

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind v4
- AWS CDK
- MDX
- Express (SSR)

## Development

Using yarn
```bash
yarn install      // install dependencies
yarn dev          // run the development server
yarn build        // build both client side and server side build
```

**Additional Commands**

```bash
yarn clean        // clean everything thats generated in the build/dev process
yarn build:client // build the client side to dist/client
yarn build:server // build the server side to dist/server
yarn lint         // run eslint
yarn format       // run prettier
```

