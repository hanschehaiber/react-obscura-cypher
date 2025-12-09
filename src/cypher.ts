//Establish unicode value ranges
const A_CHAR_CODE = 'A'.charCodeAt(0);
const Z_CHAR_CODE = 'Z'.charCodeAt(0);
const A_LOWER_CHAR_CODE = 'a'.charCodeAt(0);
const Z_LOWER_CHAR_CODE = 'z'.charCodeAt(0);

/**
 * Shifts alphabetic characters one step to the right (A→B,... Z→A).
 * Non-letters are returned unchanged.
 */
export function obscuraCypher(message: string): string {
  return Array.from(message)
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase shift with wrap
      if (code >= A_CHAR_CODE && code <= Z_CHAR_CODE) {
        const offset = (code - A_CHAR_CODE + 1) % 26;
        return String.fromCharCode(A_CHAR_CODE + offset);
      }

      // Lowercase shift with wrap
      if (code >= A_LOWER_CHAR_CODE && code <= Z_LOWER_CHAR_CODE) {
        const offset = (code - A_LOWER_CHAR_CODE + 1) % 26;
        return String.fromCharCode(A_LOWER_CHAR_CODE + offset);
      }

      return char;
    })
    .join('');
}
