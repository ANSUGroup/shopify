# `@ansugroup/shopify-verify-hmac-request`

> Nodejs or Browser

Verify HMAC & params of Shopify requests

## Install

```bash
yarn add @ansugroup/shopify-verify-hmac-request
```

## Usage

```ts
import verifyHMACRequest from "@ansugroup/shopify-verify-hmac-request";

const querystring =
  "hmac=faf32038533a67ffa42bb646fa67c76bf46b7cce02f76ea5d9debca05680080e&host=...";
const valid = verifyHMACRequest(process.env.SHOPIFY_API_SECRET, querystring);

console.log(valid);
```

## Shopify

This package is Shopify's HMAC Verification implementation

https://shopify.dev/apps/auth/oauth#verification

## License

MIT
