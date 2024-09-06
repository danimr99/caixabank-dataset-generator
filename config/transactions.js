import { TransactionTypes } from "../constants/transactions.js";

export const TransactionsConfiguration = Object.freeze({
  numberOfTransactions: 1000,
  transactionsOffset: 0,
  transactionsDateRange: {
    startDate: new Date("2021-01-01"),
    endDate: new Date(Date.now()),
  },
  percentageOfIncomeTransactions: 0.5,
  transactionsConcepts: {
    [TransactionTypes.INCOME]: [
      { concept: "Salary", amountRange: { min: 1000, max: 2500 } },
      { concept: "Gift", amountRange: { min: 50, max: 200 } },
      { concept: "Refund", amountRange: { min: 10, max: 100 } },
      { concept: "Interests", amountRange: { min: 30, max: 90 } },
      { concept: "Dividends", amountRange: { min: 80, max: 120 } },
    ],
    [TransactionTypes.OUTCOME]: [
      { concept: "Rent", amountRange: { min: 800, max: 2200 } },
      { concept: "Groceries", amountRange: { min: 60, max: 200 } },
      { concept: "Utilities", amountRange: { min: 40, max: 150 } },
      { concept: "Transport", amountRange: { min: 40, max: 100 } },
      { concept: "Entertainment", amountRange: { min: 40, max: 200 } },
      { concept: "Health", amountRange: { min: 90, max: 300 } },
      { concept: "Insurance", amountRange: { min: 300, max: 850 } },
      { concept: "Education", amountRange: { min: 320, max: 1400 } },
      { concept: "Clothing", amountRange: { min: 40, max: 220 } },
      { concept: "Taxes", amountRange: { min: 130, max: 500 } },
      { concept: "Others", amountRange: { min: 60, max: 250 } },
    ],
  },
});
