import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class DynamoDBCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new dynamodb.Table(this, id, {
      tableName: 'SampleAwsCdkDynamoDBTable',
      partitionKey: {
        name: 'HashKey',
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: 'SortKey',
        type: dynamodb.AttributeType.STRING
      }
    })
  }
}
