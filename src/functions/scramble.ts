/**
 * @param word Word(s) to scramble
 */

export function scramble(word: string) {
  if (!word) throw new ReferenceError("Word Parameter is missing");
  var shuffledWord = "";
  var words = String(word).split("");
  while (words.length > 0) {
    shuffledWord += words.splice((words.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}
