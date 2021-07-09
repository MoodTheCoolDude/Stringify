/**
 * @param value The value to be checked if it is all lowercase or not
 */
export function isAllLowerCase(value: string) {
  if (!value) throw new ReferenceError("Value Parameter must be specified");
  if (typeof value !== "string") value = String(value);
  return value == value.toLowerCase();
}
