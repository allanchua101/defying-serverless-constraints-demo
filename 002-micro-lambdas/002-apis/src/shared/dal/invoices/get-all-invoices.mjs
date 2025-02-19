import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import DYNAMO_DBS from "../../dynamo-dbs.mjs";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(client);

export async function getAllInvoices() {
  const params = { TableName: DYNAMO_DBS.INVOICES };
  const command = new ScanCommand(params);
  const data = await ddbDocClient.send(command);

  return data?.Items || [];
}
