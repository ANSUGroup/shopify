// https://github.com/ANSUGroup/shopify/issues/1
// https://en.wikipedia.org/wiki/Timing_attack
// Reference from: https://github.com/Bruce17/safe-compare/blob/master/index.js

import crypto from "crypto";
import allocUnsafe from "@stdlib/buffer-alloc-unsafe";

const safeCompare = (a: string, b: string): boolean => {
  const strA = String(a);
  let strB = String(b);
  const lenA = strA.length;
  let result = 0;

  if (lenA !== strB.length) {
    strB = strA;
    result = 1;
  }

  for (var i = 0; i < lenA; i++) {
    result |= strA.charCodeAt(i) ^ strB.charCodeAt(i);
  }

  return result === 0;
};

const nativeTimingSafeEqual = (a: string, b: string): boolean => {
  const strA = String(a);
  const strB = String(b);
  const aLen = Buffer.byteLength(strA);
  const bLen = Buffer.byteLength(strB);

  const bufA = allocUnsafe(aLen);
  bufA.write(strA);
  const bufB = allocUnsafe(aLen);
  bufB.write(strB);

  return crypto.timingSafeEqual(bufA, bufB) && aLen === bLen;
};

const timingSafeEqual = (a: string, b: string): boolean => {
  return typeof crypto.timingSafeEqual !== "undefined"
    ? nativeTimingSafeEqual(a, b)
    : safeCompare(a, b);
};

export default timingSafeEqual;
