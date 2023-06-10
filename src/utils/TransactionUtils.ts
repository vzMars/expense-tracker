import { TransactionType } from '../types';

export const transactionsByType = (
  transactions: TransactionType[],
  categoryType: string
) => {
  return transactions.filter(
    (transaction) => transaction.categoryType === categoryType
  );
};

export const transactionsTotal = (transactions: TransactionType[]) => {
  return transactions.reduce((a, b) => a + b.amount, 0);
};

export const largestTransaction = (transactions: TransactionType[]) => {
  if (transactions.length > 0) {
    return transactions.reduce((a, b) => (a.amount > b.amount ? a : b));
  }

  return 0;
};
