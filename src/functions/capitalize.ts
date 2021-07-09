/**
 * @param value The value to be capitalized
 * @param eachWord This indicates whether each word should be capitalized or just the first. If no value is specified this is false
 */
export function capitalize(value: string, eachWord: boolean = false) {
  if (!value) throw new ReferenceError("Value Parameter must be specified");
  if (typeof eachWord !== "boolean")
    throw new TypeError("Each Word Parameter must be a boolean");
  if (typeof value !== "string") value = String(value);
  if (!eachWord) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    const sepRegex = new RegExp(/\.|_|-| |,/);
    let seperators: string[] = [];
    let capitalWords: string[] = [];
    let final: string[] = [];
    for (const letter of value.split("")) {
      if (sepRegex.test(letter)) seperators.push(letter);
    }
    let words = value.split(sepRegex);

    for (const word of words) {
      capitalWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    let l = Math.min(capitalWords.length, seperators.length);
    for (let i = 0; i < l; i++) {
      final.push(capitalWords[i], seperators[i]);
    }
    final.push(...capitalWords.slice(l), ...seperators.slice(l));

    return final.join("");
  }
}
