/**
 * @param words What words should be joined?
 * @param separator What should be used to seperate each word? If no value is specified the seperator is ""
 */

export function join(words: string[], separator: string = ""): string {
  if (!words || words.length === 1)
    throw new TypeError("Words parameter must have 2 or more words");
  let result = "";
  for (let i = 0; i < words.length - 1; i++) {
    result += words[i] + separator;
  }
  result += words[words.length - 1];

  return result;
}
