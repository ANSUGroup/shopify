import Shopify, { ContextParams } from "@shopify/shopify-api";

export type ShopifyType = typeof Shopify;

const createIsolateShopify: (params: ContextParams) => ShopifyType = (
  params: ContextParams
) => {
  const shopify = Object.assign({}, Shopify);
  const context = Object.assign({}, Shopify.Context);
  const auth = Object.assign({}, Shopify.Auth);
  const clients = Object.assign({}, Shopify.Clients);
  const webhooks = Object.assign({}, Shopify.Webhooks);
  const session = Object.assign({}, Shopify.Session);
  const utils = Object.assign({}, Shopify.Utils);
  const errors = Object.assign({}, Shopify.Errors);

  context.initialize(params);

  shopify.Context = context;
  shopify.Auth = auth;
  shopify.Clients = clients;
  shopify.Webhooks = webhooks;
  shopify.Session = session;
  shopify.Errors = errors;
  shopify.Utils = utils;

  return shopify;
};

export default createIsolateShopify;
