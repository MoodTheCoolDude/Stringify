# stringify

![](https://i.imgur.com/Io81B2O.png)

An NPM package for all things related to strings

## Commands

Commands in **Javascript**

```javascript
const {
  join,
  joinNScramble,
  randomString,
  reverse,
  scramble,
  ASCII,
} = require("stringify");

join(["foo", "bar"], "_"); // Output: foo_bar
joinNScramble(["foo", "bar"], "-"); // Possible Output: of-bora
randomString(10); // Possible Output: [srS6sdw.4
reverse("foo bar"); // Output: rab oof
scramble("foo bar"); // Possible Output: bo faro
ASCII("foo bar"); // Output: 102 111 111 032 098 097 114
```

Commands in **Typescript**

```typescript
import {
  join,
  joinNScramble,
  randomString,
  reverse,
  scramble,
  ASCII,
} from "stringify";

join(["foo", "bar"], "_"); // Output: foo_bar
joinNScramble(["foo", "bar"], "-"); // Possible Output: of-bora
randomString(10); // Possible Output: [srS6sdw.4
reverse("foo bar"); // Output: rab oof
scramble("foo bar"); // Possible Output: bo faro
ASCII("foo bar"); // Output: 102 111 111 032 098 097 114
```
