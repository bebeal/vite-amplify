#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { makeStacks } from './stacks/stacks';

const originalConsoleLog = console.log;
console.log = (...args: Parameters<typeof console.log>) => {
  originalConsoleLog('\x1b[33m[cdk]\x1b[0m', '    ', ...args);
};

const makeApp = () => {
  const app = new cdk.App();
  makeStacks(app);
  app.synth();
  return app;
};

try {
  makeApp();
  console.log('\x1b[32m✓ CDK build successful\x1b[0m');
} catch (error) {
  console.error('\x1b[31mError synthesizing CDK app:\x1b[0m', error);
  process.exit(1);
}
