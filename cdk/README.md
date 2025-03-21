# cdk

* Adding a new `cdk/` directory at the root of the project

```bash
├── cdk.json           # cdk configuration file
├── cdk.out/           # cdk output directory which is auto generated
├── cdk/               # cdk in code, expects cdk.ts to be the entry point (creating App, Stacks, etc)
│   ├── cdk.ts         # cdk in code, aggregates all the stacks
│   ├── stacks/        # generic cdk stack definitions, individual stacks isolate resources to get around AWS resource cap limits
│   ├── constructs/    # generic cdk construct definitions, mostly used in `stacks`
```

* Add necessary packages:

```bash
yarn add aws-cdk-lib constructs source-map-support
yarn add aws-cdk ts-node @types/source-map-support -D
```

* Define cdk config (`cdk.json`):

```json
{
  "app": "CDK_OUTDIR=cdk.out tsx cdk/cdk.ts"
}
```

* Define ts config needed to run and deploy cdk (`cdk/tsconfig.json`):

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "include": ["cdk", "stacks", "constructs"],
    ...
  }
}
```

* Define a stack instance in `cdk/stacks/vite-stack.ts`:
  * Add a role with AdministratorAccess
  * Add an S3 bucket

```jsx
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface ViteStackProps extends cdk.StackProps {
}
export class VitetStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ViteStackProps) {
    super(scope, id, props);

    // IAM Admin Role
    const iamRole = new iam.Role(this, "AdminRole", {
      assumedBy: new iam.AccountRootPrincipal(),
      description: 'Admin role',
    });
    iamRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"));

    // S3 Bucket
    new s3.Bucket(this, bucketId, { ... });
  }
}
```

* Export all stack instances in `stacks/stacks.ts`:

```jsx
import { App } from "aws-cdk-lib";
import { ViteStack } from "./vite-stack";

export const makeStacks = (app: App) => {
  const stacks = [
    new ViteStack(app, "ViteStack", {
      env: {region: "us-west-2"},
    }),
  ];
  return stacks;
};
```


* Define an App instance, setup stacks (and any other constructs will need to be included in `makeApp`) in `cdk/cdk.ts`:
  * Note the shebang line (`#!` called shebang), a unix CfnStandard, which tells the system which interpreter to use to run the script

```jsx
#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { makeStacks } from './stacks/stacks';

const makeApp = () => {
  const app = new cdk.App();
  makeStacks(app);
  app.synth();
  return app;
}

try {
  makeApp();
  console.log("CDK template generation completed successfullyt");
} catch (error) {
  console.error("Error synthesizing CDK app:", error);
  process.exit(1);
}
```

* Add scripts in `package.json` to run the cdk:
  * `build:cdk` - build the constructs via `cdk/cdk.ts` which defines cdk in code
    * Note: set `CDK_OUTDIR` environment variable so that when  `app.synth()` is invoked in the code it will actually generate the cloud formation template in `cdk.out/`. This isn't the default behavior but it matches the CLI (`cdk synth`) behavior which makes more sense to me and this way you don't need to depend on the CLI synth command at all.
  * `deploy:cdk` - deploy the cdk infrastructure that was output to `cdk.out/` during the build.

```json
{
  "scripts": {
    "build:cdk": "CDK_OUTDIR=cdk.out tsx cdk/cdk.ts",
    "deploy:cdk": "cdk deploy",
  }
}
```

## CDK Commands

| Command | Function |
|---------|----------|
| `cdk list` | List all stacks |
| `cdk synth` | Synthesizes and prints the CloudFormation template for one or more specified stacks |
| `cdk bootstrap` | Deploys the CDK Toolkit staging stack; see Bootstrapping |
| `cdk deploy` | Deploys the specified stack(s) |
| `cdk destroy` | Destroys the specified stack(s) |
| `cdk diff` | Compares the specified stack and its dependencies with the deployed stacks or a local CloudFormation template |
| `cdk import` | Uses CloudFormation resource imports to bring existing resources into a stack managed by CDK |
| `cdk metadata` | Displays metadata about the specified stack |
| `cdk init` | Creates a new CDK project in the current directory from a specified template|
| `cdk context` | Manages cached context values|
| `cdk doc` | Opens the CDK API Reference in your browser |

## Tips

* Start simple and add complexity only when you need it
* Model with `Construct`
  * Constructs are the logical unit
* Deploy with `Stack`
  * Stacks are the unit of Deployment; everything in a stack is deployed together
  * Separate your application into multiple stacks as dictated by deployment requirements
* Configure with properties and methods, not environment variables
  * Environment variable lookups inside constructs and stacks are a common anti-pattern, limit use to only the top level of the App
* Don't change the logical ID of stateful resources
  * Results in the resource being replaced with a new one at the next deployment
* Let the AWS CDK manage roles and security groups using the construct library's `grant()` convenience methods. (e.g. `myBucket.grantRead(myLambda)`)

## Resources

* [CDK V2 Docs](https://docs.aws.amazon.com/cdk/v2/guide/cli.html)
* [AWS Toolkit for Visual Studio Code](https://docs.aws.amazon.com/cdk/v2/guide/vscode.html)
