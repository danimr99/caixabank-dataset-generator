import { AccountsConfiguration } from "./config/accounts.js";
import { TransactionsConfiguration } from "./config/transactions.js";
import { createAccount, createTransaction } from "./utils/generator.js";
import { sortTransactionsByDate } from "./utils/transactions.js";
import { saveToJSONFile } from "./utils/io.js";

const main = () => {
  const accounts = Array.from(
    { length: AccountsConfiguration?.numberOfAccounts },
    (_, accountIndex) => {
      const accountId = accountIndex + 1;
      const transactions = sortTransactionsByDate(
        Array.from(
          { length: TransactionsConfiguration?.numberOfTransactions },
          (_, transactionIndex) => {
            const transactionId =
              transactionIndex +
              1 +
              TransactionsConfiguration?.transactionsOffset * accountIndex;

            return createTransaction(transactionId);
          }
        )
      );

      return createAccount(accountId, transactions);
    }
  );

  saveToJSONFile(accounts, "./data/accounts.json");
};

main();
