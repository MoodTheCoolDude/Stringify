# stringulation

![](https://i.imgur.com/QinfAqa.png)

An NPM package for all things related to strings

## Commands

Commands in **Javascript**

```javascript
const {
  isString,
  join,
  joinNScramble,
  randomString,
  reverse,
  scramble,
  toASCII,
} = require("stringulation");

isString(885); // Output: false
join(["foo", "bar"], "_"); // Output: "foo_bar"
joinNScramble(["foo", "bar"], "-"); // Possible Output: "of-bora"
randomString(10); // Possible Output: "[srS6sdw.4"
reverse("foo bar"); // Output: "rab oof"
scramble("foo bar"); // Possible Output: "bo faro"
toASCII("foo bar"); // Output: "102 111 111 032 098 097 114"
```

Commands in **Typescript**

```typescript
import {
  isString,
  join,
  joinNScramble,
  randomString,
  reverse,
  scramble,
  toASCII,
} from "stringulation";

isString(885); // Output: false
join(["foo", "bar"], "_"); // Output: "foo_bar"
joinNScramble(["foo", "bar"], "-"); // Possible Output: "of-bora"
randomString(10); // Possible Output: "[srS6sdw.4"
reverse("foo bar"); // Output: "rab oof"
scramble("foo bar"); // Possible Output: "bo faro"
toASCII("foo bar"); // Output: "102 111 111 032 098 097 114"
```

#### License

[**ISC**](https://choosealicense.com/licenses/isc/)
