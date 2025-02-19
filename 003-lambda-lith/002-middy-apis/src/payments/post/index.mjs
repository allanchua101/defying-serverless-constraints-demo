import { randomUUID } from "crypto";
import { postPayment } from "../../shared/dal/payments/post-payment.mjs";

export async function handlePostPayment(event) {
  try {
    // Parse and validate the request body
    const requestBody = JSON.parse(event.body);
    const { reference, amount, currencyCode, invoiceID } = requestBody;

    if (!reference || !amount || !currencyCode || !invoiceID) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error:
            "Missing required parameters. Please provide invoiceID, reference, amount, and amountCurrency.",
        }),
      };
    }
    const payment = {
      paymentID: randomUUID(),
      invoiceID,
      reference,
      amount,
      currencyCode,
      paymentDate: Math.floor(new Date().getTime() / 1000),
    };

    await postPayment(payment);

    return {
      statusCode: 200,
      body: JSON.stringify({ id: payment.paymentID }),
    };
  } catch (error) {
    console.error("Error retrieving items:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
