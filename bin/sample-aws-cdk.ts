#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SampleAwsCdkStack } from '../lib/sample-aws-cdk-stack';
import { S3CdkStack } from '../lib/s3';
import { DynamoDBCdkStack } from '../lib/dynamodb';

const app = new cdk.App();
new SampleAwsCdkStack(app, 'SampleAwsCdkStack');
new S3CdkStack(app, 'S3CdkStack');
new DynamoDBCdkStack(app, 'DynamoDBCdkStack');
