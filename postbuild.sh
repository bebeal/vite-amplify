#!/bin/bash

# Copies the build output to .amplify-hosting in the format amplify expects per https://docs.aws.amazon.com/amplify/latest/userguide/deploy-express-server.html

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute

cp -r ./dist ./.amplify-hosting/compute/default
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

cp -r public ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
cp package.json ./.amplify-hosting/compute/default/package.json
cp .env ./.amplify-hosting/compute/default/.env
echo "NODE_ENV=production" >> ./.amplify-hosting/compute/default/.env
# find . -maxdepth 1 -type f ! -name 'index.html' -exec cp {} ./.amplify-hosting/compute/default/ \;
