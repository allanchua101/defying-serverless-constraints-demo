import middy from "@middy/core";
import httpRouterHandler from "@middy/http-router";
// HTTP handlers
import { handleGetAllInvoices } from "./invoices/get-all/index.mjs";
import { handleGetInvoiceByID } from "./invoices/get-by-id/index.mjs";
import { handlePostInvoice } from "./invoices/post/index.mjs";
import { handleGetAllPayments } from "./payments/get-all/index.mjs";
import { handleGetPaymentByID } from "./payments/get-by-id/index.mjs";
import { handlePostPayment } from "./payments/post/index.mjs";

export const execute = middy().handler(
  httpRouterHandler([
    {
      method: "POST",
      path: "/invoices/",
      handler: middy().handler(handlePostInvoice),
    },
    {
      method: "GET",
      path: "/invoices/",
      handler: middy().handler(handleGetAllInvoices),
    },
    {
      method: "GET",
      path: "/invoices/{id}",
      handler: middy().handler(handleGetInvoiceByID),
    },
    // Payments
    {
      method: "POST",
      path: "/payments/",
      handler: middy().handler(handlePostPayment),
    },
    {
      method: "GET",
      path: "/payments/",
      handler: middy().handler(handleGetAllPayments),
    },
    {
      method: "GET",
      path: "/payments/{id}",
      handler: middy().handler(handleGetPaymentByID),
    },
  ])
);
