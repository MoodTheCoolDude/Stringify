/**
 * @param words What words should be joined?
 * @param separator What should be used to seperate each word?
 */

export function join(words: string[], separator: string = ""): string {
  let result = "";
  for (let i = 0; i < words.length - 1; i++) {
    result += words[i] + separator;
  }
  result += words[words.length - 1];

  return result;
}
