import AWS, { DynamoDB } from 'aws-sdk';

let dynamoDB: AWS.DynamoDB;

if (process.env.hasOwnProperty('DYNAMODB_ENDPOINT')) {
  console.info('👨‍💻 Using dev dynamo endpoint');
  AWS.config.update({ accessKeyId: 'accessKey', secretAccessKey: 'secretKey', region: 'us-east-1' });
  dynamoDB = new DynamoDB({endpoint: process.env.DYNAMODB_ENDPOINT});
} else {
  dynamoDB = new DynamoDB();
}


export default dynamoDB;
