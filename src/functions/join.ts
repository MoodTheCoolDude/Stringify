/**
 * @param words What words should be joined?
 * @param separator What should be used to seperate each word? If no value is specified the seperator is ""
 */

export function join(words: string[], separator: string = ""): string {
  if (!Array.isArray(words))
    throw new ReferenceError("Words parameter must be an array");
  if (words.length <= 1)
    throw new ReferenceError("Words parameter must have 2 or more words");
  let result = words.join(separator);

  return result;
}
