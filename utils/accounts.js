/** @import {NumericRange} from "../docs/common.d.js" */
/** @import {AccountType} from "../docs/accounts.d.js" */

import { AccountTypes } from "../constants/accounts.js";
import { generateRandomListIndex, generateRandomNumber } from "./numbers.js";

/**
 * Decides if an account will be shared or not.
 *
 * @function
 * @param {number} percentage - The possibility of the account being shared expressed as a decimal between 0 and 1.
 * @returns {AccountType} An account type.
 */
export const getRandomAccountType = (percentage) => {
  return Math.random() < percentage
    ? AccountTypes.SHARED
    : AccountTypes.PERSONAL;
};

/**
 * Generates a random bank name.
 *
 * @function
 * @param {string[]} banks - The list of bank names.
 * @returns {string} A random bank name.
 */
export const getRandomBank = (banks) => {
  return banks[generateRandomListIndex(banks)];
};

/**
 * Generates an account alias.
 *
 * @function
 * @param {number} accountId - The account identifier.
 * @returns {string} The account alias.
 */
export const getAccountAlias = (accountId) => {
  return `Account ${accountId}`;
};

/**
 * Generates a random IBAN following the pattern
 * ESXX XXXX XXXX XXXX XXXX XXXX.
 *
 * @function
 * @returns {string} A random IBAN.
 */
export const getRandomIBAN = () => {
  const randomNumber = Array.from({ length: 22 }, () => {
    return generateRandomNumber(
      { min: 0, max: 9 },
      { integer: true }
    ).toString();
  }).join("");

  return `ES${randomNumber}`.replace(/(.{4})/g, "$1 ");
};

/**
 * Calculates the account balance based on the initial deposit and the total amount of transactions.
 *
 * @function
 * @param {NumericRange} initialDepositRange - The range of the initial deposit.
 * @param {number} transactionsTotalAmount - The total amount of the account transactions.
 * @returns {number} A random account balance.
 */
export const getAccountBalance = (
  initialDepositRange,
  transactionsTotalAmount
) => {
  const randomInitialDeposit = generateRandomNumber(initialDepositRange);
  const balance = randomInitialDeposit + transactionsTotalAmount;
  return Number(balance.toFixed(2));
};
