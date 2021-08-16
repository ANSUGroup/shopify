import createIsolateShopify from "../dist";
import Shopify, { ApiVersion } from "@shopify/shopify-api";

describe("isolate-shopify-api", () => {
  test("Shopift API will be isolate", () => {
    const shopifyApp1 = createIsolateShopify({
      API_KEY: process.env.SHOPIFY_API_KEY_APP_1 || "a",
      API_SECRET_KEY: process.env.SHOPIFY_API_SECRET_APP_1 || "b",
      SCOPES: (process.env.SCOPES || "c").split(","),
      HOST_NAME: (process.env.HOST || "d").replace(/https:\/\//, ""),
      API_VERSION: ApiVersion.October20,
      IS_EMBEDDED_APP: true,
      // This should be replaced with your preferred storage strategy
      SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
    });

    const shopifyApp2 = createIsolateShopify({
      API_KEY: process.env.SHOPIFY_API_KEY_APP_2 || "e",
      API_SECRET_KEY: process.env.SHOPIFY_API_SECRET_APP_2 || "f",
      SCOPES: (process.env.SCOPES || "g").split(","),
      HOST_NAME: (process.env.HOST || "h").replace(/https:\/\//, ""),
      API_VERSION: ApiVersion.October20,
      IS_EMBEDDED_APP: true,
      // This should be replaced with your preferred storage strategy
      SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
    });

    expect(shopifyApp1.Context.API_KEY).not.toEqual(
      shopifyApp2.Context.API_KEY
    );
    expect(shopifyApp1.Context.API_SECRET_KEY).not.toEqual(
      shopifyApp2.Context.API_SECRET_KEY
    );
  });
});
