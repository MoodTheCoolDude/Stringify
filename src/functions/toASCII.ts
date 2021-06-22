/**
 * @param word Word(s) to get the ASCII value of
 * @param seperator What should seperate the ASCII values?
 */

export function ASCII(word: string, seperator: string = " "): string {
  let ASCII = "";
  for (let index = 0; index < word.length; index++) {
    ASCII += word.charCodeAt(index) + seperator;
  }

  return ASCII;
}
