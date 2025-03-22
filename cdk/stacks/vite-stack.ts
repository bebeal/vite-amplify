import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface ViteStackProps extends cdk.StackProps {}
export class ViteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ViteStackProps) {
    super(scope, id, props);

    // Define infrastructure here

    // IAM Admin role creation
    const iamRole = new iam.Role(this, 'AdminRole', {
      assumedBy: new iam.AccountRootPrincipal(),
      description: 'Admin role',
    });
    iamRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));

    // S3 bucket creation
    const bucketPrefix = 'vite-amplify';
    const bucketUnique = `${this.account}-${this.region}`;
    const bucketName = `${bucketPrefix}-${bucketUnique}`;
    const bucketId = 'ViteAmplifyBucket';
    new s3.Bucket(this, bucketId, {
      // Changed identifier to be unique within this scope
      bucketName,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}
