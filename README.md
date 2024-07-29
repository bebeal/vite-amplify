<div align="center">
    
# vite-amplify

<a href="https://vite-amplify.com">vite-amplify.com</a>

<a href="https://www.youtube.com/watch?v=dsHQUgwkZ7s">~4 mins from fork-to-finish for a successful deployment</a>
</div>

![vite-amplify-landing](https://github.com/user-attachments/assets/e8b425da-55e0-46d9-ace3-496972f12cb4)]

## Features

* [Node](https://nodejs.org/docs)
* [Yarn](https://classic.yarnpkg.com/en/docs)
* [Vite](https://vitejs.dev/guide/)
* [React](https://react.dev/reference/react)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [Express](https://expressjs.com/en/4x/api.html)
* [React Router](https://reactrouter.com/en/main)
* [Tailwind](https://tailwindcss.com/docs)
* [Eslint](https://eslint.org/docs/latest/)
* [Prettier](https://prettier.io/docs/en/)
* [Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide)

## Other Libraries

* [nodemon](https://github.com/remy/nodemon)
* [tsx](https://github.com/privatenumber/tsx)
* [dotenv](https://github.com/motdotla/dotenv?tab=readme-ov-file)
* [svgr](https://github.com/gregberge/svgr)
* [react-tweet](https://github.com/vercel/react-tweet)
* [next-themes](https://github.com/pacocoursey/next-themes)

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

## Amplify Hosting

To deploy to Amplify Hosting

1. Create repository from template
2. Deploy to AWS

**Note:** set env variable `YARN_ENABLE_IMMUTABLE_INSTALLS=0` in the Amplify console

![amplify-deployement](https://github.com/user-attachments/assets/238a3d46-d229-4205-afe6-9b0516afdde4)

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

`postbuild.sh` will take the above build and copy it over to the amplify build folder which results in:

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
