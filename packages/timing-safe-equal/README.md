# [`@ansugroup/timing-safe-equal`](https://www.npmjs.com/package/@ansugroup/timing-safe-equal)

> Nodejs, Browser

A copy package of `safe-compare` rewritten with TypeScript for internal use in Ansugroup. `crypto.timingSafeEqual` for browser.

## Install

```bash
yarn add @ansugroup/timing-safe-equal
```

## Usage

```ts
import timingSafeEqual from "@ansugroup/timing-safe-equal";

timingSafeEqual("hello world", "hello world"); // -> true

timingSafeEqual("hello", "not hello"); // -> false
timingSafeEqual("hello foo", "hello bar"); // -> false
```

## License

MIT
