/**
 * @param word Word(s) to get the ASCII value of
 * @param options.seperator What should seperate the ASCII values? If no value is specified the seperator is " "
 * @param options.asNumber Should the ASCII values be returned as a number or a string? If this is true then it will automatically be returned as an array. If no value is specified this is false
 * @param options.array Should the ASCII values be returned as an array or one string? If no value is specified this is false
 */

export function toASCII(
  word: string,
  options: {
    seperator?: string;
    asNumber?: boolean;
    array?: boolean;
  } = { seperator: " ", asNumber: false, array: false }
): string | string[] | number[] {
  if (typeof options !== "object")
    throw new TypeError("Options parameter must be an object");
  if (!options.seperator) options.seperator = " ";
  if (!options.asNumber) options.asNumber = false;
  if (!options.array) options.array = false;
  if (!word) throw new TypeError("Word Parameter is missing");
  if (typeof word !== "string") word = String(word);
  if (typeof options.seperator !== "string")
    options.seperator = String(options.seperator);
  if (typeof options.asNumber !== "boolean")
    throw new TypeError("AsNumber parameter must be a boolean");
  if (typeof options.array !== "boolean")
    throw new TypeError("Array parameter must be a boolean");
  if (!options.array && options.asNumber) options.array = true;

  if (!options.asNumber && !options.array) {
    let ASCII = "";
    for (let index = 0; index < word.length; index++) {
      if (index !== word.length - 1) {
        ASCII += word.charCodeAt(index) + options.seperator;
      } else {
        ASCII += word.charCodeAt(index);
      }
    }

    return ASCII;
  }
  if (options.asNumber) {
    let ASCII = [];
    for (let index = 0; index < word.length; index++) {
      ASCII.push(word.charCodeAt(index));
    }

    return ASCII;
  }
  if (options.array) {
    let ASCII = [];
    for (let index = 0; index < word.length; index++) {
      ASCII.push(String(word.charCodeAt(index)));
    }

    return ASCII;
  }
}
