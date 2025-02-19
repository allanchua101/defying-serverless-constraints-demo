import { getAllPayments } from "../../shared/dal/payments/get-all-payments.mjs";

export async function handler() {
  try {
    const payments = await getAllPayments();

    return {
      statusCode: 200,
      body: JSON.stringify({ payments }),
    };
  } catch (error) {
    console.error("Error retrieving items:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
