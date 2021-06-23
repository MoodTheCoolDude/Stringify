/**
 * @param word Word(s) to get the ASCII value of
 * @param seperator What should seperate the ASCII values? If no value is specified the seperator is " ""
 */

export function toASCII(word: string, seperator: string = " "): string {
  if (!word) throw new TypeError("Word Parameter is missing");
  let ASCII = "";
  for (let index = 0; index < word.length; index++) {
    ASCII += word.charCodeAt(index) + seperator;
  }

  return ASCII;
}
