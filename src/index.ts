import { insertNewLines } from "./functions/insertNewLines";

export { join } from "./functions/join";
export { randomString } from "./functions/randomString";
export { reverse } from "./functions/reverse";
export { scramble } from "./functions/scramble";
export { toASCII } from "./functions/toASCII";
export { isString } from "./functions/isString";
export { capitalize } from "./functions/capitalize";
export { isAllCapital } from "./functions/isAllCapital";
export { isAllLowerCase } from "./functions/isAllLowerCase";
export { isCapitalized } from "./functions/isCapitalized";
export { insertNewLines } from "./functions/insertNewLines";
const longString =
	"The insertNewLines function is used to insert line breaks in a long string to improve readability and understanding. It can be used to format long strings and make them easier to work with.";
// console.log(insertNewLines(longString, 50, "hyphenate"));
// console.log(insertNewLines(longString, 50, "hyphenate", "!!!"));
// console.log(insertNewLines(longString, 50, "moveToBegin"));
// console.log(insertNewLines(longString, 50, "moveToEnd"));
console.log(insertNewLines(longString, 50, "none"));
