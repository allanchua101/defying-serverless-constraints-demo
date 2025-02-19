import { randomUUID } from "crypto";
import { putInvoice } from "../../shared/dal/invoices/post-invoice.mjs";

export async function handler(event) {
  try {
    // Parse and validate the request body
    const requestBody = JSON.parse(event.body);
    const { reference, amount, currencyCode } = requestBody;

    if (!reference || !amount || !currencyCode) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error:
            "Missing required parameters. Please provide reference, amount, and amountCurrency.",
        }),
      };
    }
    const invoice = {
      invoiceID: randomUUID(),
      reference,
      amount,
      currencyCode,
      issueDate: Math.floor(new Date().getTime() / 1000),
    };

    await putInvoice(invoice);

    return {
      statusCode: 200,
      body: JSON.stringify({ id: invoice.invoiceID }),
    };
  } catch (error) {
    console.error("Error retrieving items:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
