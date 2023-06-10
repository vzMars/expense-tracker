import { TransactionType } from '../types';
import BarChart from './BarChart';

type PropsType = {
  expenseTransactions: TransactionType[];
};

const CategorySection = ({ expenseTransactions }: PropsType) => {
  return (
    <section className='flex flex-wrap'>
      <div className='flex w-full flex-col gap-4 pb-4 lg:flex-row'>
        <div className='flex w-full flex-col items-center rounded-md border-2 border-main-border p-3'>
          <h2 className='mb-4 text-center font-lexbold text-2xl'>
            Transactions By Category
          </h2>
          <BarChart transactions={expenseTransactions} />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
