/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  else if (n < 0) return undefined;

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
// TODO

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  const arrayBuilt = [];
  if (typeof n !== "number") {
    return null;
  } else if (n <= 0) {
    return arrayBuilt;
  }
  for (let num = 1; num <= n; num++) {
    arrayBuilt.push(num);
  }
  return arrayBuilt;
  // TODO
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  let stringLongest = "";
  if (!Array.isArray(strings)) {
    return undefined;
  }
  if (strings.length === 0) {
    return "";
  }
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > stringLongest.length) {
      stringLongest = strings[i];
    }
  }
  return stringLongest;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  if (attendance.length === 0) {
    return 0;
  }
  let countOfPresent = 0;
  for (const value of attendance) {
    if (value === true) {
      countOfPresent+=1;
    }
  }
  return countOfPresent;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  let dnaComplement = "";
  if (typeof dna !== "string") {
    return null;
  }
  if (dna.length === 0) {
    return "";
  }
  return dnaComplement;
}
