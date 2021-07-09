<div align="center">
  <br />
  <p>
    <img src="https://i.imgur.com/QinfAqa.png" width="546" alt="stringulation" />
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/stringulation"><img src="https://img.shields.io/npm/v/stringulation.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/stringulation"><img src="https://img.shields.io/npm/dt/stringulation.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>
 
# About
 
An NPM package for all things related to strings
 
- String detection
- String generation
- String Manipulation
 
> Compatible with Javascript _`(.js)`_ & Typescript _`(.ts)`_!
 
---
 
# Table Of Contents
 
### - [Installation](https://www.npmjs.com/package/stringulation#installation)

### - [capitalize](https://www.npmjs.com/package/stringulation#capitalize)

### - [isAllCapital](https://www.npmjs.com/package/stringulation#isallcapital)

### - [isAllLowerCase](https://www.npmjs.com/package/stringulation#isalllowercase)

### - [isCapitalized](https://www.npmjs.com/package/stringulation#iscapitalized)

### - [isString](https://www.npmjs.com/package/stringulation#isstring)

### - [join](https://www.npmjs.com/package/stringulation#join)

### - [randomString](https://www.npmjs.com/package/stringulation#randomstring)

### - [reverse](https://www.npmjs.com/package/stringulation#reverse)

### - [scramble](https://www.npmjs.com/package/stringulation#scramble)

### - [toASCII](https://www.npmjs.com/package/stringulation#toascii)

## Installation

**Note: Node.js 14.0.0 or newer is required.**

```sh-session
npm i stringulation@latest
```

</br>
 
### Importing functions
 
**Javascript**
 
```js
const {
  capitalize,
  isAllCapital,
  isAllLowerCase,
  isCapitalized,
  isString,
  join,
  randomString,
  reverse,
  scramble,
  toASCII,
} = require("stringulation");
```
 
**Typescript**
 
```ts
import {
  capitalize,
  isAllCapital,
  isAllLowerCase,
  isCapitalized,
  isString,
  join,
  randomString,
  reverse,
  scramble,
  toASCII,
} from "stringulation";
```
 
<br>
 
---
 
<br>

## capitalize

Function that has 2 parameters. The first parameter is the value to be capitalized. The second parameter is an optional boolean that indicates whether each word should be capitalized or just the first. This is false by default.

### Example

```js
const { capitalize } = require("stringulation");
console.log(capitalize("this will be capitalized")); // "This will be capitalized"
console.log(capitalize("this will be capitalized", true)); // "This Will Be Capitalized"
```

---

## isAllCapital

Function that has 1 parameter. The first parameter is the value to be checked. This returns true if the value is all uppercase.

### Example

```js
const { isAllCapital } = require("stringulation");
const uppercase = "THIS IS ALL CAPITAL";
const mixed = "this IS half/HALF";
const lowercase = "this is all lowercase";

if (isAllCapital(uppercase)) {
  console.log(uppercase + " is all capital!");
} // "THIS IS ALL CAPITAL is all capital!"
if (!isAllCapital(lowercase)) {
  console.log(lowercase + " is not all capital!");
} // "this is all lowercase is not all capital!"
if (!isAllCapital(mixed)) {
  console.log(mixed + " is not all capital!");
} // "this IS half/HALF is not all capital!"
```

---

## isAllLowerCase

Function that has 1 parameter. The first parameter is the value to be checked. This returns true if the value is all lowercase.

### Example

```js
const { isAllLowerCase } = require("stringulation");
const uppercase = "THIS IS ALL CAPITAL";
const mixed = "this IS half/HALF";
const lowercase = "this is all lowercase";

if (isAllCapital(lowercase)) {
  console.log(lowercase + " is all lowercase!");
} // "this is all lowercase is all lowercase!"
if (!isAllCapital(uppercase)) {
  console.log(uppercase + " is not all lowercase!");
} // "THIS IS ALL CAPITAL is not all lowercase!"
if (!isAllCapital(mixed)) {
  console.log(mixed + " is not all lowercase!");
} // "this IS half/HALF is not all lowercase!"
```

---

## isCapitalized

Function that has 2 parameters. The first parameter is the value to be checked. The second parameter is an optional boolean indicating whether each word should be checked or just the first word.

### Example

```js
const { isCapitalized } = require("stringulation");
const capitalized = "This is capitalized";
const capitalizedAll = "This Is Capitalized";
const improper = "this is not capitalized";
const improper2 = "this Is not Capitalized";

if (isCapitalized(capitalized)) {
  console.log(capitalized + " is capitalized!");
} // This is capitalized is capitalized!
if (isCapitalized(capitalizedALL)) {
  console.log(capitalized + " is capitalized!");
} // This Is Capitalized is capitalized!
if (!isCapitalized(improper)) {
  console.log(improper + " is not capitalized!");
} // this is not capitalized is not capitalized!
if (!isCapitalized(improper2, true)) {
  console.log(improper2 + " is not capitalized!");
} // this Is not Capitalized is not capitalized!
```

---

## isString

Function that has 2 parameters. The first parameter is the value to be checked if it's a string or not. The second parameter is an optional boolean that specfies whether it should also return true if the first parameter is a string array. This is true by default.

### Example

```js
const { isString } = require("stringulation");
const string = "this is a string!";
const stringArray = ["this", "is", "a", "string"];
const number = 123;
const numberArray = [1, 2, 3];
if (isString(string)) {
  console.log(string + " is a string!");
} // "this is a string is a string!"

if (isString(stringArray)) {
  console.log(stringArray + " is a string array!");
} // "["this", "is", "a", "string"] is a string array!"

if (!isString(stringArray, false)) {
  console.log(stringArray + " is not a string!");
} // "["this", "is", "a", "string"] is not a string!"

if (!isString(number)) {
  console.log(number + " is not a string!");
} // "123 is not a string!"

if (!isString(numberArray)) {
  console.log(numberArray + " is not a string array!");
} // "[1, 2, 3] is not a string array!"
```

---

## join

Function that has 2 parameters. The first parameter is an array of strings. The second parameter is an optional string. It will be used to seperate each string.

### Example

```js
const { join } = require("stringulation");
console.log(join(["this", "is", "an", "array", "of", "strings"])); // "thisisanarrayofstrings"
console.log(join(["this", "is", "also", "an", "array", "of", "strings"], " ")); // "this is also an array of strings"
```

---

## randomString

Function that has one parameter. It is a number indicating the length of the random string.

### Example

```js
const { randomString } = require("stringulation");
console.log(randomString(10)); // "!7y[evr-<l"
```

---

## reverse

Function that has one parameter. It is the string that will be reversed.

### Example

```js
const { reverse } = require("stringulation");
console.log(reverse("this will be reversed")); // "desrever eb lliw siht"
```

---

## scramble

Function that has one parameter. It is the string that will be scrambled.

### Example

```js
const { scramble } = require("stringulation");
console.log(scramble("scrambled")); // "sclbmared"
```

---

## toASCII

Function that has two parameters. The first parameter is the string to be converted to ASCII. The second parameter is an optional object containing 3 options. The first option is the separator. This is a string that will be used to separate each ASCII value. This is a space by default. The second option is a boolean specified if the ASCII values should be returned as a string or a number. This is false by default. The third option is a boolean specified if the ASCII values should be returned as one string or one array. If the second option is true then this can't be false. This is false by default.

### Example

```js
const { toASCII } = require("stringulation");
console.log(toASCII("text", { asNumber: true })); // [116, 101, 120, 116]
console.log(toASCII("text", { seperator: "_" })); // "116_101_120_116"
console.log(toASCII("text", { array: true })); // ["116", "101", "120", "116"]
```
