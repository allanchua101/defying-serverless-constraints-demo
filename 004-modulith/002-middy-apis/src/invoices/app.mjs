import middy from "@middy/core";
import httpRouterHandler from "@middy/http-router";
// HTTP handlers
import { handleGetAllInvoices } from "./handlers/get-all/index.mjs";
import { handleGetInvoiceByID } from "./handlers/get-by-id/index.mjs";
import { handlePostInvoice } from "./handlers/post/index.mjs";

export const execute = middy().handler(
  httpRouterHandler([
    {
      method: "POST",
      path: "/invoices/create",
      handler: middy().handler(handlePostInvoice),
    },
    {
      method: "GET",
      path: "/invoices/list",
      handler: middy().handler(handleGetAllInvoices),
    },
    {
      method: "GET",
      path: "/invoices/{id}",
      handler: middy().handler(handleGetInvoiceByID),
    },
  ])
);
