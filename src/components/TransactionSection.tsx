import { TransactionType } from '../types';
import DoughnutChart from './DoughnutChart';

type PropsType = {
  income: number;
  expense: number;
  balance: number;
  transactions: TransactionType[];
};

const TransactionSection = ({
  income,
  expense,
  balance,
  transactions,
}: PropsType) => {
  const recentTransactions = transactions.slice(0, 4);

  return (
    <section className='flex flex-wrap'>
      <div className='flex w-full flex-col gap-4 pb-4 lg:flex-row'>
        <div className='flex w-full flex-col items-center rounded-md border-2 border-main-border p-3 lg:w-3/4'>
          <h2 className='mb-4 font-lexbold text-2xl'>Transactions Overview</h2>
          <div className='my-auto'>
            <DoughnutChart
              income={income}
              expense={expense}
              balance={balance}
            />
          </div>
        </div>
        <div className='w-full rounded-md border-2 border-main-border p-3 lg:w-1/4'>
          <h2 className='mb-4 font-lexbold text-2xl '>Recent Transactions</h2>
          <ul className='space-y-2'>
            {recentTransactions.map((transaction) => (
              <li
                key={transaction.id}
                className='flex items-center justify-between rounded-md bg-main-green p-3 font-lexreg'
              >
                <div>
                  <p className='font-lexbold text-sm'>{transaction.title}</p>
                  <p>{transaction.transactionDate.toString()}</p>
                </div>
                <h2 className='font-lexbold text-xs'>${transaction.amount}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;
