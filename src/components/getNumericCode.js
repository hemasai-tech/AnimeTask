/*
 * @returns The function `generateRandomNumericCode` returns a randomly generated 4-digit numeric code.
 */
export const generateRandomNumericCode = () => {
  let code = '';
  for (let i = 0; i < 4; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    code += randomDigit.toString();
  }
  return code;
};
