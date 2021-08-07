import currency from "currency.js";

const useShopifyCurrencyFormat = (format: string) => {
  return (price: number | string) => {
    const curr = currency(price);
    const result = (format || "{{amount}}")
      .replace(/{{amount}}/g, currency(curr, { symbol: "" }).format())
      .replace(
        /{{amount_with_comma_separator}}/g,
        currency(curr, { symbol: "", decimal: ",", separator: "." }).format()
      )
      .replace(
        /{{amount_with_space_separator}}/g,
        currency(curr, { symbol: "", decimal: ".", separator: " " }).format()
      )
      .replace(
        /{{amount_with_apostrophe_separator}}/g,
        currency(curr, { symbol: "", decimal: ".", separator: "'" }).format()
      )
      .replace(
        /{{amount_no_decimals}}/g,
        currency(curr, { symbol: "", precision: 0 }).format()
      )
      .replace(
        /{{amount_no_decimals_with_comma_separator}}/g,
        currency(curr, {
          symbol: "",
          decimal: ",",
          separator: ".",
          precision: 0,
        }).format()
      )
      .replace(
        /{{amount_no_decimals_with_space_separator}}/g,
        currency(curr, {
          symbol: "",
          decimal: ".",
          separator: " ",
          precision: 0,
        }).format()
      )
      .replace(
        /{{amount_no_decimals_with_apostrophe_separator}}/g,
        currency(curr, {
          symbol: "",
          decimal: ".",
          separator: "'",
          precision: 0,
        }).format()
      );
    return result;
  };
};

export default useShopifyCurrencyFormat;
