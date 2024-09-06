import { Banks } from "../constants/banks.js";

export const AccountsConfiguration = Object.freeze({
  numberOfAccounts: 10,
  accountsOffset: 0,
  percentageOfSharedAccount: 0.25,
  banks: Object.values(Banks),
  initialDepositRange: { min: 1000, max: 5000 },
});
