# [`@ansugroup/isolate-shopify-api`](https://www.npmjs.com/package/@ansugroup/isolate-shopify-api)

> Nodejs

By default, `@shopify/shopify-api` will use one variable: `Shopify` for APIs calling.
This package: `@ansugroup/isolate-shopify-api` will help if you want to connect to APIs on behalf of multiple apps/stores.

## Install

```bash
yarn add @ansugroup/isolate-shopify-api
```

## Usage

> Split Shopify API by app

```ts
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import createIsolateShopify from "@ansugroup/isolate-shopify-api";

const shopifyApp1 = createIsolateShopify({
  // default config from Shopify example:
  API_KEY: process.env.SHOPIFY_API_KEY_APP_1,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET_APP_1,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// shopifyApp1.Clients.Rest ...

const shopifyApp2 = createIsolateShopify({
  API_KEY: process.env.SHOPIFY_API_KEY_APP_2,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET_APP_2,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// shopifyApp2.Clients.Rest ...
// not get the value or overwrite the value of shopifyApp1
```

## License

MIT
