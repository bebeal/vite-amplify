<div align="center">

# vite-amplify

<a href="https://vite-amplify.com" rel="noopener noreferrer" target="_blank">vite-amplify.com</a>

<a href="https://www.youtube.com/watch?v=dsHQUgwkZ7s" rel="noopener noreferrer" target="_blank">~4 mins from fork-to-finish for a successful deployment</a>
</div>

![vite-amplify-landing](https://github.com/user-attachments/assets/e8b425da-55e0-46d9-ace3-496972f12cb4)

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
│   │   ├── index-CtZNOJEh.css           26.08 kB │ gzip:  5.94 kB
│   │   └── index-wmHS3Azp.js            267.59 kB │ gzip: 90.73 kB
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
└── server
    ├── api
    │   ├── api.d.ts
    │   ├── api.js
    │   └── tweet
    │       ├── :id.d.ts
    │       └── :id.js
    ├── entry-server.js                  52.19 kB
    ├── favicon.ico
    ├── robots.txt
    ├── server.d.ts
    ├── server.js
    ├── vite.config.d.ts
    └── vite.config.js

6 directories, 16 files
```

## Amplify Build

* `amplify.yml` is the build spec for Amplify Hosting ([AWS Docs](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html))

* `deploy-minifest.json` is the deployment spec and is what deploys the express api server ([AWS Docs](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-deployment-specification.html))

* `postbuild.sh` will take the build from `dist` and copy it over to the amplify build folder (`.amplify-hosting`) which results in ([AWS Docs](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-express-server.html)):

```console
.amplify-hosting
├── compute
│   └── default
│       ├── client
│       │   ├── assets
│       │   │   ├── index-CtZNOJEh.css   26.08 kB │ gzip:  5.94 kB
│       │   │   └── index-wmHS3Azp.js    267.59 kB │ gzip: 90.73 kB
│       │   ├── favicon.ico
│       │   ├── index.html
│       │   └── robots.txt
│       ├── package.json
│       └── server
│           ├── api
│           │   ├── api.d.ts
│           │   ├── api.js
│           │   └── tweet
│           │       ├── :id.d.ts
│           │       └── :id.js
│           ├── entry-server.js          52.19 kB
│           ├── favicon.ico
│           ├── robots.txt
│           ├── server.d.ts
│           ├── server.js
│           ├── vite.config.d.ts
│           └── vite.config.js
├── deploy-manifest.json
└── static
    ├── favicon.ico
    └── robots.txt

9 directories, 20 files
```

## Lighthouse

<img width="344" alt="100_91_96_100" src="https://github.com/user-attachments/assets/aa73009d-2c8d-4b48-bd8c-231418a8f051">

¯\\_(ツ)_/¯ 🧂 [lighthouse_summary_100_91_96_100_july282024.pdf](https://github.com/user-attachments/files/16407666/lighthouse_summary_100_91_96_100_july282024.pdf)



