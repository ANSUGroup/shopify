# `@ansugroup/use-shopify-currency-format`

> React Hook

Help parse your currency value to currency format of the `Shopify` store.

## Install

```bash
yarn add @ansugroup/use-shopify-currency-format
```

## Shopify Currency Format

```tsx
import React from "react";
import useShopifyCurrencyFormat from "@ansugroup/use-shopify-currency-format";

const page: React.FC = () => {
  // get shoify current format from: setting, theme, etc...

  // Standard: https://help.shopify.com/en/manual/payments/currency-formatting#currency-formatting-options
  // Setting: https://shopify.dev/api/admin/rest/reference/store-properties/shop#properties-2021-04
  // -- money_format, money_in_emails_format, money_with_currency_format, money_with_currency_in_emails_format
  // Theme:
  // -- window.theme.moneyFormat

  // and use this hook:
  const format = "${{amount_with_comma_separator}}";
  const currencyFormat = useShopifyCurrencyFormat(format);
  const price = 1_000.189;

  return (
    <>
      {/* ... */}
      {currencyFormat(price)} {/* $1.000,19 */}
      {/* ... */}
    </>
  );
};
// ...
```

## Supported Shopify Currency Formats

Price: `1134.65`

| Format                                             | Result example |
| -------------------------------------------------- | -------------- |
| `{{amount}}`                                       | 1,134.65       |
| `{{amount_with_comma_separator}}`                  | 1.134,65       |
| `{{amount_with_space_separator}}`                  | 1 134.65       |
| `{{amount_with_apostrophe_separator}}`             | 1'134.65       |
| `{{amount_no_decimals}}`                           | 1,135          |
| `{{amount_no_decimals_with_comma_separator}}`      | 1.135          |
| `{{amount_no_decimals_with_space_separator}}`      | 1 135          |
| `{{amount_no_decimals_with_apostrophe_separator}}` | 1'135          |

## License

MIT
