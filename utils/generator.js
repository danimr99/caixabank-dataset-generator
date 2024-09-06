/** @import {Transaction} from "../docs/transactions.d.js" */
/** @import {Account} from "../docs/accounts.d.js" */

import { TransactionTypes } from "../constants/transactions.js";
import { AccountTypes } from "../constants/accounts.js";
import { TransactionsConfiguration } from "../config/transactions.js";
import { AccountsConfiguration } from "../config/accounts.js";
import {
  getRandomTransactionType,
  getRandomTransactionAmount,
  getRandomTransactionDate,
  getRandomTransactionConcept,
  calculateTransactionsTotalAmount,
} from "./transactions.js";
import {
  getAccountAlias,
  getAccountBalance,
  getRandomAccountType,
  getRandomBank,
  getRandomIBAN,
} from "./accounts.js";

/**
 * Generates a transaction with the given identifier.
 *
 * @function
 * @param {number} transactionId - The transaction identifier.
 * @returns {Transaction} The generated transaction.
 */
export const createTransaction = (transactionId) => {
  const transactionType = getRandomTransactionType(
    TransactionsConfiguration?.percentageOfIncomeTransactions
  );
  const transactionConcept = getRandomTransactionConcept(
    TransactionsConfiguration?.transactionsConcepts[transactionType]
  );
  const transactionAmount = getRandomTransactionAmount(
    transactionConcept?.amountRange
  );
  const transactionDate = getRandomTransactionDate(
    TransactionsConfiguration?.transactionsDateRange
  );

  return {
    transactionId,
    transactionDate,
    concept: transactionConcept?.concept,
    amount:
      transactionType === TransactionTypes.INCOME
        ? transactionAmount
        : -transactionAmount,
  };
};

/**
 * Generates an account with the given identifier and transactions history.
 *
 * @function
 * @param {number} accountId - The account identifier.
 * @param {Transaction[]} transactions - The transactions history of the account.
 * @returns {Account} The generated account.
 */
export const createAccount = (accountId, transactions) => {
  const bank = getRandomBank(AccountsConfiguration?.banks);
  const accountAlias = getAccountAlias(accountId);
  const iban = getRandomIBAN();
  const balance = getAccountBalance(
    AccountsConfiguration?.initialDepositRange,
    calculateTransactionsTotalAmount(transactions)
  );
  const isSharedAccount = getRandomAccountType() === AccountTypes.SHARED;

  return {
    accountId,
    bank,
    accountAlias,
    iban,
    balance,
    transactions,
    isSharedAccount,
  };
};
