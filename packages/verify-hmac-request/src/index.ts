import qs from "query-string";
import hmacSHA256 from "crypto-js/hmac-sha256";

type VerifyHMACRequestResult = boolean;
type VerifyHMACRequest = (
  shopifyApiSecret: string,
  querystring: string
) => VerifyHMACRequestResult;

export const removeHmac = (querystring: string): string => {
  if (querystring) {
    if (querystring.startsWith("?")) {
      return querystring.substr(1).replace(/hmac=([^&]*)&/gi, "");
    }
    return querystring.replace(/hmac=([^&]*)&/gi, "");
  }
  return "";
};

export const getHmac = (querystring: string): string => {
  if (querystring) {
    const params = qs.parse(querystring) as { [key: string]: string };
    const { hmac } = params;
    return hmac || "";
  }
  return "";
};

const verifyHMACRequest: VerifyHMACRequest = (
  shopifyApiSecret,
  querystring
) => {
  return (
    getHmac(querystring) ===
    hmacSHA256(removeHmac(querystring), shopifyApiSecret).toString()
  );
};

export default verifyHMACRequest;
