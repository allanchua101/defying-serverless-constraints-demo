import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import DYNAMO_DBS from "../../dynamo-dbs.mjs";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(client);

export async function getPaymentByID(paymentID) {
  const params = {
    TableName: DYNAMO_DBS.PAYMENTS,
    Key: { paymentID },
  };
  const command = new GetCommand(params);
  const result = await ddbDocClient.send(command);

  return result.Item || null;
}
