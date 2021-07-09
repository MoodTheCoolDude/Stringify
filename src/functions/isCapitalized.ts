import { capitalize } from "./capitalize";

/**
 * @param value The value to be checked
 * @param eachWord This indicates whether each word should be checked or just the first. If no value is specified this is false
 */
export function isCapitalized(value: string, eachWord: boolean = false) {
  if (!value) throw new ReferenceError("Value Parameter must be specified");
  if (typeof eachWord !== "boolean")
    throw new TypeError("Each Word Parameter must be a boolean");
  if (typeof value !== "string") value = String(value);
  if (!eachWord) {
    return value == capitalize(value);
  } else {
    return value == capitalize(value, true);
  }
}
