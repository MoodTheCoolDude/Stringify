/**
 * @param length Length of random string
 */

export function randomString(length: number): string {
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
