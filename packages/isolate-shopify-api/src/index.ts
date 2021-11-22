import Shopify, { ContextParams } from "@shopify/shopify-api";

export type ShopifyType = typeof Shopify;

const createIsolateShopify: (params: ContextParams) => ShopifyType = (
  params: ContextParams
) => {
  const shopify = Object.assign({}, Shopify);
  shopify.Context.initialize(params);
  return shopify;
};

export default createIsolateShopify;
