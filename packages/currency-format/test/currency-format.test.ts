import useShopifyCurrencyFormat from "../dist";

describe("Use Shopify Currency Format React Hook", () => {
  const price = 1_134.65;

  test("{{amount}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(`{{amount}}`);
    expect(currenctFormat(price)).toEqual("1,134.65");
  });

  test("{{amount_with_comma_separator}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(
      `{{amount_with_comma_separator}}`
    );
    expect(currenctFormat(price)).toEqual("1.134,65");
  });

  test("{{amount_with_space_separator}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(
      `{{amount_with_space_separator}}`
    );
    expect(currenctFormat(price)).toEqual("1 134.65");
  });

  test("{{amount_with_apostrophe_separator}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(
      `{{amount_with_apostrophe_separator}}`
    );
    expect(currenctFormat(price)).toEqual("1'134.65");
  });

  test("{{amount_no_decimals}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(`{{amount_no_decimals}}`);
    expect(currenctFormat(price)).toEqual("1,135");
  });

  test("{{amount_no_decimals_with_comma_separator}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(
      `{{amount_no_decimals_with_comma_separator}}`
    );
    expect(currenctFormat(price)).toEqual("1.135");
  });

  test("{{amount_no_decimals_with_space_separator}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(
      `{{amount_no_decimals_with_space_separator}}`
    );
    expect(currenctFormat(price)).toEqual("1 135");
  });

  test("{{amount_no_decimals_with_apostrophe_separator}}", () => {
    const currenctFormat = useShopifyCurrencyFormat(
      `{{amount_no_decimals_with_apostrophe_separator}}`
    );
    expect(currenctFormat(price)).toEqual("1'135");
  });
});
