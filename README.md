# vite-amplify

Vite SSR boilerplate template

## Features

* [Node 20](https://nodejs.org/en/)
* [Yarn 4](https://yarnpkg.com/)
* [Vite 5](https://vitejs.dev/)
* [React 18](https://reactjs.org/)
* [TypeScript 5](https://www.typescriptlang.org/)
* [Express 4](https://expressjs.com/)
* [React Router 6](https://reactrouter.com/)
* [Eslint 9](https://eslint.org/)

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
```

## Build

The build outputs to `dist` folder. The build is split into two parts, the client side and the server side.

```console
dist
├── client
│   ├── assets
│   │   ├── index-C8gSz5Y-.js
│   │   ├── index-Dwy8Y4BJ.css
│   │   └── react-CHdo91hT.svg
│   ├── favicon.ico
│   ├── index.html
│   └── tsconfig.app.tsbuildinfo
└── server
    ├── entry-server.js
    ├── favicon.ico
    ├── server.d.ts
    ├── server.js
    ├── tsconfig.node.tsbuildinfo
    ├── vite.config.d.ts
    └── vite.config.js

4 directories, 13 files
```
