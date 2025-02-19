import { getPaymentByID } from "../../../shared/dal/payments/get-payments-by-id.mjs";

export async function handleGetPaymentByID(event) {
  try {
    // Extract paymentID from the path parameters
    const paymentID = event.pathParameters?.id;
    if (!paymentID) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing payment ID in path parameters",
        }),
      };
    }
    const payment = await getPaymentByID(paymentID);

    return {
      statusCode: 200,
      body: JSON.stringify({ payment }),
    };
  } catch (error) {
    console.error("Error retrieving items:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
