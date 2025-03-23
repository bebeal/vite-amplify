<div align="center">

# vite-amplify

Template with Vite SSR + Express APIs + AWS Amplify Hosting.

<a href="https://vite-amplify.com" rel="noopener noreferrer" target="_blank">vite-amplify.com</a>

<a href="https://www.youtube.com/watch?v=dsHQUgwkZ7s" rel="noopener noreferrer" target="_blank">~4 mins from fork-to-finish for a successful deployment</a>
</div>

![vite-amplify-landing](https://github.com/user-attachments/assets/5d5973f0-3002-4b2b-b5d1-001e4a705a6c)

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
* [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

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
```

<div align="center">
    <img width="890" alt="425781036-dacb70a0-1228-4cb1-b4a6-8ee62b64aa52" src="https://github.com/user-attachments/assets/e36ed390-d7dd-428a-8938-628da134e88a" />
</div>

```bash
yarn dev          // run the development server
```

<div align="center">
    <img width="894" alt="425781309-25c7c40e-b8e0-4d4c-9fd7-f565d9bc9eb8" src="https://github.com/user-attachments/assets/b88065b8-a66f-4e9e-b9fc-9b5d823a4120" />
</div>

```bash
yarn build        // build both client side and server side build
```

<div align="center">
    <img width="894" alt="425345804-2eb9c561-bd5a-411c-9acf-d31074abb794 (1)" src="https://github.com/user-attachments/assets/3f994f23-476b-4ed7-9109-50d40c0495f2" />
</div>

**Additional Commands**

```bash
yarn clean        // clean everything thats generated in the build/dev process
yarn build:client // build the client side to dist/client
yarn build:server // build the server side to dist/server
yarn lint         // run eslint
yarn format       // run prettier
```

## CDK

```bash
yarn build:cdk    // build the cdk
yarn deploy:cdk   // deploy the cdk
```

<div align="center">
    <img width="787" alt="425349353-ad9d52cc-9046-4cd2-b072-1b47083eb48d" src="https://github.com/user-attachments/assets/0ea6d023-35dc-41c6-86c5-84adc5bb19c6" />
</div>

## Amplify Hosting

To deploy to Amplify Hosting

1. Create repository from template
2. Deploy to AWS

**Note:** set env variable `YARN_ENABLE_IMMUTABLE_INSTALLS=0` in the Amplify console

<div align="center">
    <img width="1213" alt="364214191-82788a6e-afe4-4b4f-8a46-bbfe0d7cf772" src="https://github.com/user-attachments/assets/dd1ff536-c916-432b-b1f9-52f21db60e4d" />
</div>

## Build

The build outputs to `dist` folder. The build is split into two parts, the client side and the server side.

```console
dist
├── client
│   ├── assets
│   │   ├── index-CjfxHUYp.css       28.14 kB │ gzip:     6.28 kB
│   │   └── index-CyAzpqo0.js       326.88 kB │ gzip:   109.05 kB
│   ├── favicon.ico                  14.73 kB │ gzip:     4.46 kB
│   ├── index.html                     .56 kB │ gzip:      .35 kB
│   └── robots.txt                     .06 kB │ gzip:      .08 kB
└── server
    ├── api
    │   ├── api.d.ts                   .21 kB │ gzip:      .16 kB
    │   └── api.js                    1.01 kB │ gzip:      .47 kB
    ├── entry-server.js              56.77 kB │ gzip:    20.72 kB
    ├── favicon.ico                  14.73 kB │ gzip:     4.46 kB
    ├── robots.txt                     .06 kB │ gzip:      .08 kB
    ├── server.d.ts                    .25 kB │ gzip:      .18 kB
    ├── server.js                     4.52 kB │ gzip:     1.84 kB
    ├── tsconfig.node.tsbuildinfo    46.99 kB │ gzip:    14.90 kB
    ├── vite.config.d.ts               .08 kB │ gzip:      .10 kB
    └── vite.config.js                1.39 kB │ gzip:      .52 kB

5 directories, 15 files
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
│       │   │   ├── index-CjfxHUYp.css          28.14 kB │ gzip:     6.28 kB
│       │   │   └── index-CyAzpqo0.js          326.88 kB │ gzip:   109.05 kB
│       │   ├── favicon.ico                     14.73 kB │ gzip:     4.46 kB
│       │   ├── index.html                        .56 kB │ gzip:      .35 kB
│       │   └── robots.txt                        .06 kB │ gzip:      .08 kB
│       ├── package.json                         2.22 kB │ gzip:      .90 kB
│       └── server
│           ├── api
│           │   ├── api.d.ts                      .21 kB │ gzip:      .16 kB
│           │   └── api.js                       1.01 kB │ gzip:      .47 kB
│           ├── entry-server.js                 56.77 kB │ gzip:    20.72 kB
│           ├── favicon.ico                     14.73 kB │ gzip:     4.46 kB
│           ├── robots.txt                        .06 kB │ gzip:      .08 kB
│           ├── server.d.ts                       .25 kB │ gzip:      .18 kB
│           ├── server.js                        4.52 kB │ gzip:     1.84 kB
│           ├── tsconfig.node.tsbuildinfo       46.99 kB │ gzip:    14.90 kB
│           ├── vite.config.d.ts                  .08 kB │ gzip:      .10 kB
│           └── vite.config.js                   1.39 kB │ gzip:      .52 kB
├── deploy-manifest.json                          .83 kB │ gzip:      .33 kB
└── static
    ├── favicon.ico                             14.73 kB │ gzip:     4.46 kB
    └── robots.txt                                .06 kB │ gzip:      .08 kB

8 directories, 19 files
```

## Lighthouse

<img width="344" alt="100_91_96_100" src="https://github.com/user-attachments/assets/aa73009d-2c8d-4b48-bd8c-231418a8f051">

¯\\_(ツ)_/¯ 🧂 [lighthouse_summary_100_91_96_100_july282024.pdf](https://github.com/user-attachments/files/16407666/lighthouse_summary_100_91_96_100_july282024.pdf)

