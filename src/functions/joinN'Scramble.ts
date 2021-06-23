import { join } from "./join";
import { scramble } from "./scramble";

/**
 *
 * @param words Words to scramble
 * @param seperator What should seperate each word? If no value is specified the seperator is ""
 */
export function joinNScramble(words: string[], seperator: string = ""): string {
  if (!words || words.length === 1)
    throw new TypeError("Words parameter must have 2 or more words");
  let result = scramble(join(words, seperator));

  return result;
}
