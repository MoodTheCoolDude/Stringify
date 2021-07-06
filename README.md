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
 
## isString
 
Function that has 2 parameters. The first parameter is the value to be checked if it's a string or not. The second parameter is an optional boolean that specfies whether it should also return true if the first parameter is a string array. This is true by default.
 
### Example
 
```js
const { isString } = require("stringulation");
const string = "this is a string!";
const stringArray = ["this", "is", "a", "string"]
const number = 123
const numberArray = [1, 2, 3]
if (isString(string)) {
  console.log(string + " is a string!");
} // "this is a string is a string!"

if(isString(stringArray)){
  console.log(stringArray + " is a string array!")
} // "["this", "is", "a", "string"] is a string array!"

if(!isString(stringArray, false)){
  console.log(stringArray + " is not a string!")
} // "["this", "is", "a", "string"] is not a string!"

if(!isString(number)){
  console.log(number + " is not a string!")
} // "123 is not a string!"

if(!isString(numberArray)){
  console.log(numberArray + " is not a string array!")
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
