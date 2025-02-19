import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import DYNAMO_DBS from "../../dynamo-dbs.mjs";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(client);

export async function putInvoice(invoice) {
  const params = {
    TableName: DYNAMO_DBS.INVOICES,
    Item: invoice,
  };

  // Save the invoice using PutCommand
  await ddbDocClient.send(new PutCommand(params));
}
