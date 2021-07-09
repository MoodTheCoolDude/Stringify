/**
 * @param value The value to be checked whether it is a string or not
 * @param checkForArray This indicates whether the function should return true if the value is a string array. If no value is specified, this is true
 */
export function isString(value: any, checkForArray: boolean = true): boolean {
  if (typeof checkForArray !== "boolean")
    throw new TypeError("Check For Array Parameter must be a boolean");
  if (typeof value === "string") {
    return true;
  } else {
    if (!Array.isArray(value)) return false;
    if (checkForArray) {
      if (!value[0]) return false;
      return value.every((value) => typeof value === "string");
    } else return false;
  }
}
