/** @import {NumericRange, DateRange} from "../docs/common.d.js" */
/** @import {TransactionType, Transaction} from "../docs/transactions.d.js" */

import { TransactionTypes } from "../constants/transactions.js";
import { generateRandomListIndex, generateRandomNumber } from "./numbers.js";

/**
 * Decides if a transaction will be an income or an outcome.
 *
 * @function
 * @param {number} percentage - The possibility of the transaction being an income expressed as a decimal between 0 and 1.
 * @returns {TransactionType} A random transaction type.
 */
export const getRandomTransactionType = (percentage) => {
  return Math.random() < percentage
    ? TransactionTypes.INCOME
    : TransactionTypes.OUTCOME;
};

/**
 * Generates a random transaction concept.
 *
 * @function
 * @param {{concept: string, amountRange: NumericRange}[]} concepts - The list of transaction concepts.
 * @returns {{concept: string, amountRange: NumericRange}} A random transaction concept.
 */
export const getRandomTransactionConcept = (concepts) => {
  return concepts[generateRandomListIndex(concepts)];
};

/**
 * Generates a random transaction amount.
 *
 * @function
 * @param {NumericRange} amountRange - The range of the transaction amount.
 * @returns {number} A random transaction amount.
 */
export const getRandomTransactionAmount = (amountRange) => {
  return Number(generateRandomNumber(amountRange).toFixed(2));
};

/**
 * Generates a random transaction date.
 *
 * @function
 * @param {DateRange} dateRange - The range of the transaction date.
 * @returns {Date} A random transaction date.
 */
export const getRandomTransactionDate = (dateRange) => {
  return new Date(
    dateRange?.startDate?.getTime() +
      Math.random() *
        (dateRange?.endDate?.getTime() - dateRange?.startDate?.getTime())
  );
};

/**
 * Sorts transactions by date in descending order (more recent first).
 *
 * @function
 * @param {Transaction[]} transactions - The list of transactions to sort.
 * @returns {Transaction[]} The sorted list of transactions.
 */
export const sortTransactionsByDate = (transactions) => {
  return transactions?.sort((a, b) => a?.transactionDate - b?.transactionDate);
};

/**
 * Calculates the total amount of the transactions.
 *
 * @function
 * @param {Transaction[]} transactions - The list of transactions.
 * @returns {number} The total amount of the transactions.
 */
export const calculateTransactionsTotalAmount = (transactions) => {
  return transactions?.reduce(
    (total, transaction) => total + transaction?.amount,
    0
  );
};
