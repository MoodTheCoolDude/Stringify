/**
 * @param word What word(s) should be reversed?
 */
export function reverse(word: string): string {
  let arr = word.split("").reverse();
  return arr.join("");
}
