import middy from "@middy/core";
import httpRouterHandler from "@middy/http-router";
// HTTP handlers
import { handleGetAllPayments } from "./handlers/get-all/index.mjs";
import { handleGetPaymentByID } from "./handlers/get-by-id/index.mjs";
import { handlePostPayment } from "./handlers/post/index.mjs";

export const execute = middy().handler(
  httpRouterHandler([
    // Payments
    {
      method: "POST",
      path: "/payments/create",
      handler: middy().handler(handlePostPayment),
    },
    {
      method: "GET",
      path: "/payments/list",
      handler: middy().handler(handleGetAllPayments),
    },
    {
      method: "GET",
      path: "/payments/{id}",
      handler: middy().handler(handleGetPaymentByID),
    },
  ])
);
