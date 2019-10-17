#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SampleAwsCdkStack } from '../lib/sample-aws-cdk-stack';

const app = new cdk.App();
new SampleAwsCdkStack(app, 'SampleAwsCdkStack');
