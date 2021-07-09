/**
 * @param word What word(s) should be reversed?
 */
export function reverse(word: string): string {
  if (!word) throw new ReferenceError("Word Parameter is missing");
  let arr = String(word).split("").reverse();
  return arr.join("");
}
