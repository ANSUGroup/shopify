import verifyHMACRequest from "../dist";

describe("Verify HMAC Request", () => {
  test("Verify right querystring with its HMAC", () => {
    const querystring =
      "hmac=faf32038533a67ffa42bb646fa67c76bf46b7cce02f76ea5d9debca05680080e&host=cGllcnJlbmV0ZXItc3RvcmUtMi5teXNob3BpZnkuY29tL2FkbWlu&locale=en-US&session=6aa5379e52f8415e0e80252371ba88ef668a60280046238347868603616c3f84&shop=pierreneter-store-2.myshopify.com&timestamp=1629031400";
    expect(
      verifyHMACRequest(process.env.SHOPIFY_API_SECRET, querystring)
    ).toEqual(true);
  });

  test("Verify right querystring with its HMAC includes ?", () => {
    const querystring =
      "?hmac=faf32038533a67ffa42bb646fa67c76bf46b7cce02f76ea5d9debca05680080e&host=cGllcnJlbmV0ZXItc3RvcmUtMi5teXNob3BpZnkuY29tL2FkbWlu&locale=en-US&session=6aa5379e52f8415e0e80252371ba88ef668a60280046238347868603616c3f84&shop=pierreneter-store-2.myshopify.com&timestamp=1629031400";
    expect(
      verifyHMACRequest(process.env.SHOPIFY_API_SECRET, querystring)
    ).toEqual(true);
  });

  test("Check fake querystring with its HMAC", () => {
    const querystring =
      "hmac=aaf32038533a67ffa42bb646fa67c76bf46b7cce02f76ea5d9debca05680080e&host=cGllcnJlbmV0ZXItc3RvcmUtMi5teXNob3BpZnkuY29tL2FkbWlu&locale=en-US&session=6aa5379e52f8415e0e80252371ba88ef668a60280046238347868603616c3f84&shop=pierreneter-store-2.myshopify.com&timestamp=1629031400";
    expect(
      verifyHMACRequest(process.env.SHOPIFY_API_SECRET, querystring)
    ).toEqual(false);
  });

  test("Check fake querystring with its HMAC includes ?", () => {
    const querystring =
      "?hmac=aaf32038533a67ffa42bb646fa67c76bf46b7cce02f76ea5d9debca05680080e&host=cGllcnJlbmV0ZXItc3RvcmUtMi5teXNob3BpZnkuY29tL2FkbWlu&locale=en-US&session=6aa5379e52f8415e0e80252371ba88ef668a60280046238347868603616c3f84&shop=pierreneter-store-2.myshopify.com&timestamp=1629031400";
    expect(
      verifyHMACRequest(process.env.SHOPIFY_API_SECRET, querystring)
    ).toEqual(false);
  });
});
