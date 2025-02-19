import { getInvoiceByID } from "../../../shared/dal/invoices/get-invoice-by-id.mjs";

export async function handleGetInvoiceByID(event) {
  try {
    // Extract invoiceId from the path parameters
    const invoiceID = event.pathParameters?.id;
    if (!invoiceID) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing invoice ID in path parameters",
        }),
      };
    }
    const invoice = await getInvoiceByID(invoiceID);

    return {
      statusCode: 200,
      body: JSON.stringify({ invoice }),
    };
  } catch (error) {
    console.error("Error retrieving items:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
