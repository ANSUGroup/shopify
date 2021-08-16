import timingSafeEqual from "../dist";

describe("safe compare", function () {
  describe("should equal", function () {
    it('"foo" against "foo"', function () {
      expect(timingSafeEqual("foo", "foo")).toEqual(true);
    });

    it('"hello world" against "hello world"', function () {
      expect(timingSafeEqual("hello world", "hello world")).toEqual(true);
    });

    it('"你好，世界" against "你好，世界"', function () {
      expect(timingSafeEqual("你好，世界", "你好，世界")).toEqual(true);
    });

    it('"สวัสดีชาวโลก" against "สวัสดีชาวโลก"', function () {
      expect(timingSafeEqual("สวัสดีชาวโลก", "สวัสดีชาวโลก")).toEqual(true);
    });

    it('"\\u00e8" against "\\u00e8"', function () {
      expect(timingSafeEqual("\u00e8", "\u00e8")).toEqual(true);
    });

    it('"\\u01e8" against "\\u01e8"', function () {
      expect(timingSafeEqual("\u01e8", "\u01e8")).toEqual(true);
    });
  });

  describe("should not equal", function () {
    it('"foo" against "bar"', function () {
      expect(timingSafeEqual("foo", "bar")).toEqual(false);
    });

    it('"hello world" against "not hello world"', function () {
      expect(timingSafeEqual("hello world", "not hello world")).toEqual(false);
    });

    it('"你好，世界" against "您好"', function () {
      expect(timingSafeEqual("你好，世界", "您好")).toEqual(false);
    });

    it('"สวัสดีชาวโลก" against "สวัสดี"', function () {
      expect(timingSafeEqual("สวัสดีชาวโลก", "สวัสดี")).toEqual(false);
    });

    it('"\\u00e8" against "\\u01e8"', function () {
      expect(timingSafeEqual("\u00e8", "\u01e8")).toEqual(false);
    });

    it('"a" against "aaaaaaaaaa"', function () {
      expect(timingSafeEqual("a", "aaaaaaaaaa")).toEqual(false);
    });

    it('"prefix" against "pre"', function () {
      expect(timingSafeEqual("prefix", "pre")).toEqual(false);
    });

    it('"pre" against "prefix"', function () {
      expect(timingSafeEqual("pre", "prefix")).toEqual(false);
    });
  });

  describe("should not throw an error for non string argument", function () {
    const testData = [undefined, void 0, null, true, false, {}, [], 42, NaN];

    testData.forEach(function (data) {
      let itemContent = data;
      let itemType = data instanceof Array ? "array" : typeof data;

      if (itemType === "array") {
        itemContent = "[" + (data as []).join(", ") + "]";
      }

      it('"' + itemContent + '" (type "' + itemType + '")', function () {
        // Test the first argument position.
        timingSafeEqual(data as any, "");

        // Test the second argument position.
        timingSafeEqual("", data as any);
      });
    });
  });
});
