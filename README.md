# vite-amplify

Vite SSR boilerplate template with express apis.

## Features

* [Node 20](https://nodejs.org/docs)
* [Yarn 4](https://classic.yarnpkg.com/en/docs)
* [Vite 5](https://vitejs.dev/guide/)
* [React 18](https://react.dev/reference/react)
* [TypeScript 5](https://www.typescriptlang.org/docs/)
* [Express 4](https://expressjs.com/en/4x/api.html)
* [Tailwind 3](https://tailwindcss.com/docs)
* [React Router 6](https://reactrouter.com/en/main)
* [Eslint 9](https://eslint.org/docs/latest/)
* [Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide)

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
│   │   ├── index-D4jYsRc4.js
│   │   └── index-GCS8C7MF.css
│   ├── favicon.ico
│   └── index.html
└── server
    ├── api
    │   ├── api.d.ts
    │   ├── api.js
    │   └── tweet
    │       ├── :id.d.ts
    │       └── :id.js
    ├── entry-server.js
    ├── favicon.ico
    ├── server.d.ts
    ├── server.js
    ├── tsconfig.node.tsbuildinfo
    ├── vite.config.d.ts
    └── vite.config.js

6 directories, 15 files
```

## Amplify Build

`postbuild.sh` will take the above build and copy it over to the amplify build folder which is structured results in:

```console
.amplify-hosting
├── compute
│   └── default
│       ├── client
│       │   ├── assets
│       │   │   ├── index-D4jYsRc4.js
│       │   │   └── index-GCS8C7MF.css
│       │   ├── favicon.ico
│       │   └── index.html
│       ├── package.json
│       └── server
│           ├── api
│           │   ├── api.d.ts
│           │   ├── api.js
│           │   └── tweet
│           │       ├── :id.d.ts
│           │       └── :id.js
│           ├── entry-server.js
│           ├── favicon.ico
│           ├── server.d.ts
│           ├── server.js
│           ├── tsconfig.node.tsbuildinfo
│           ├── vite.config.d.ts
│           └── vite.config.js
├── deploy-manifest.json
└── static
    └── favicon.ico

9 directories, 18 files
```
