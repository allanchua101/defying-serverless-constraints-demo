import middy from "@middy/core";
import httpRouterHandler from "@middy/http-router";
// HTTP handlers
import { handleGetAllInvoices } from "./invoices/get-all/index.mjs";
import { handleGetInvoiceByID } from "./invoices/get-by-id/index.mjs";
import { handlePostInvoice } from "./invoices/post/index.mjs";

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
  ])
);
