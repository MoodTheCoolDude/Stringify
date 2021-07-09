/**
 * @param length Length of random string
 */

export function randomString(length: number): string {
  if (!length) throw new ReferenceError("Length Parameter is missing");
  if (length < 0)
    throw new TypeError("Length Parameter must be a positive number");
  if (isNaN(length) || length == NaN)
    throw new TypeError("Length Parameter must be a number");
  const characters = [];
  let string = "";

  //genertating the chars
  for (let index = 32; index < 127; index++) {
    characters.push(String.fromCharCode(index));
  }

  //randomizing string
  for (let index = 0; index < length - 1; index++) {
    const rng = Math.floor(Math.random() * characters.length);

    string += characters[rng];
  }

  return string;
}
