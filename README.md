# CaixaBank dataset generator

This repository is a dataset generator for the [CaixaBank React app](https://github.com/danimr99/caixabank-react).

## Description

It creates randomly accounts with all its information based on customizable parameters.

## Setup and customization

All the parameters are configured under the **config** directory where we can find the following files:

- **transactions.js**: Contains all the configurable parameters related with transactions. We can modify the following properties to fit our needs:

  - **numberOfTransactions**: Indicates the number of transactions that we want to generate. Due to the way it is used, it is the number of transactions that each account will contain.
  - **transactionsOffset**: Indicates an offset to be used for the transaction ID of the transactions list generated.
  - **transactionsDateRange**: Indicates the date range to be used to generate random transaction dates.
    - **startDate**: A past date to be used as the start of the range.
    - **endDate**: A date to be used as an end of the range. If not changed, it uses the current date.
  - **percentageOfIncomeTransactions**: A decimal number between 0 and 1 that indicates the possibility to generate an income transaction. The remaining until 1 will be the possibility to generate an outcome transaction.
  - **transactionsConcepts**: Contains a list of concepts with grouped by the transaction type (income or outcome). Each concept is accompanied with an amount range to generate the transaction amount between that range.

- **accounts.js**: Contains all the configurable parameters related with accounts. We can modify the following properties to fit our needs:
  - **numberOfAccounts**: Indicates the number of accounts that we want to generate.
  - **accountsOffset**: Indicates an offset to be used for the accounts ID of the accounts list generated.
  - **percentageOfSharedAccount**: A decimal number between 0 and 1 that indicates the possibility to generate a shared account. The remaining until 1 will be the possibility to generate a personal account.
  - **banks**: List of banking entities that can an account be associated with.
  - **initialDepositRange**: Indicates the range to be used to generate an initial deposit to fund the account.
    - **min**: Minimum value of the range.
    - **max**: Maximum value of the range.

## Usage

Inside the project folder path, run the following command on your terminal:

```bash
$ npm run start
```
