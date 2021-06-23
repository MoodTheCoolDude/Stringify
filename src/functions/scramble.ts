/**
 * @param word Word(s) to scramble
 */

export function scramble(word: any) {
  if (!word) throw new TypeError("Word Parameter is missing");
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}
