import { Link } from 'react-router-dom';
import { AiFillDollarCircle } from 'react-icons/ai';
import TotalSection from '../components/TotalSection';
import TransactionSection from '../components/TransactionSection';
import CategorySection from '../components/CategorySection';
import { useTransactionContext } from '../hooks/useTransactionContext';
import {
  transactionsByType,
  transactionsTotal,
  largestTransaction,
} from '../utils/TransactionUtils';

const Dashboard = () => {
  const { transactions } = useTransactionContext();

  const incomeTransactions = transactionsByType(transactions, 'Income');
  const expenseTransactions = transactionsByType(transactions, 'Expense');

  const totalIncome = transactionsTotal(incomeTransactions);
  const totalExpenses = transactionsTotal(expenseTransactions);
  const totalBalance = totalIncome - totalExpenses;
  const largest = largestTransaction(expenseTransactions);

  return (
    <main className='mx-auto w-full max-w-7xl p-4 lg:flex-1'>
      {transactions.length > 0 ? (
        <>
          <TotalSection
            income={totalIncome}
            expense={totalExpenses}
            balance={totalBalance}
            largest={largest}
          />
          <TransactionSection
            income={totalIncome}
            expense={totalExpenses}
            balance={totalBalance}
            transactions={transactions}
          />
          <CategorySection expenseTransactions={expenseTransactions} />
        </>
      ) : (
        <section className='m-auto flex flex-col items-center justify-center py-24'>
          <div className='mb-4 text-8xl text-main-green'>
            <AiFillDollarCircle />
          </div>
          <Link
            to='/add'
            className='rounded-md bg-main-green px-4 py-3 text-xl font-bold'
          >
            Add Transaction
          </Link>
        </section>
      )}
    </main>
  );
};

export default Dashboard;
