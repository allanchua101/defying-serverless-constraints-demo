const ENV_PREFIX = process.env.ENV_PREFIX;

export default {
  INVOICES: `${ENV_PREFIX}-invoices`,
  INVOICE_LINE_ITEMS: `${ENV_PREFIX}-invoice-line-items`,
  PAYMENTS: `${ENV_PREFIX}-payments`,
  ATTACHMENTS: `${ENV_PREFIX}-attachments`,
};
