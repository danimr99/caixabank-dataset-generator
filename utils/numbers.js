/** @import {NumericRange} from "../docs/common.d.js" */

/**
 * Generates a random integer number between a numeric range.
 *
 * @function
 * @param {NumericRange} range - The range of the random number.
 * @param {object} options - The options for the random number generation.
 * @param {boolean} options.integer - If the random number should be an integer.
 * @returns {number} A random number between the range.
 */
export const generateRandomNumber = (range, options = { integer: false }) => {
  const randomNumber = Math.random() * (range?.max - range?.min) + range?.min;
  return options?.integer ? Math.floor(randomNumber) : randomNumber;
};

/**
 * Generates a random list index.
 *
 * @function
 * @param {any[]} list - The list to get the index from.
 * @returns {number} A random list index.
 */
export const generateRandomListIndex = (list) => {
  return Math.floor(Math.random() * list.length);
};
