import { join } from "./join";
import { scramble } from "./scramble";

/**
 *
 * @param words Words to scramble
 * @param seperator What should seperate each word?
 */
export function joinNScramble(words: string[], seperator: string = ""): string {
  let result = scramble(join(words, seperator));

  return result;
}
