import { getAllInvoices } from "../../shared/dal/invoices/get-all-invoices.mjs";

export async function handleGetAllInvoices() {
  try {
    const invoices = await getAllInvoices();

    return {
      statusCode: 200,
      body: JSON.stringify({ invoices }),
    };
  } catch (error) {
    console.error("Error retrieving items:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
