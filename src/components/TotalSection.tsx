import { TransactionType } from '../types';
import { AiFillDollarCircle } from 'react-icons/ai';

type PropsType = {
  income: number;
  expense: number;
  balance: number;
  largest: TransactionType | 0;
};

const TotalSection = ({ income, expense, balance, largest }: PropsType) => {
  return (
    <section className='flex flex-wrap py-4'>
      <div className='flex w-full gap-4 pb-4'>
        <div className='flex w-1/2 flex-col rounded-md border-2 border-main-border p-3 font-lexreg text-xs lg:h-40'>
          <div className='mb-4 text-5xl text-main-green'>
            <AiFillDollarCircle />
          </div>
          <span className='text-gray-500'>TOTAL INCOME</span>
          <h2 className='font-lexbold text-2xl'>
            ${income.toLocaleString('en-US')}
          </h2>
        </div>
        <div className='flex w-1/2 flex-col rounded-md border-2 border-main-border p-3 font-lexreg text-xs lg:h-40'>
          <div className='mb-4 text-5xl text-main-green'>
            <AiFillDollarCircle />
          </div>
          <span className='text-gray-500'>TOTAL EXPENSES</span>
          <h2 className='font-lexbold text-2xl'>
            ${expense.toLocaleString('en-US')}
          </h2>
        </div>
      </div>
      <div className='flex w-full gap-4'>
        <div className='flex w-1/2 flex-col rounded-md border-2 border-main-border p-3 font-lexreg text-xs lg:h-40'>
          <div className='mb-4 text-5xl text-main-green'>
            <AiFillDollarCircle />
          </div>
          <span className='text-gray-500'>TOTAL BALANCE</span>
          <h2 className='font-lexbold text-2xl'>
            ${balance.toLocaleString('en-US')}
          </h2>
        </div>
        <div className='flex w-1/2 flex-col rounded-md border-2 border-main-border p-3 font-lexreg text-xs lg:h-40'>
          <div className='mb-4 text-5xl text-main-green'>
            <AiFillDollarCircle />
          </div>
          <span className='text-gray-500'>MOST SPENDING</span>
          {largest ? (
            <>
              <h2 className='font-lexbold text-2xl'>{largest.categoryName}</h2>
              <span className='text-gray-500'>
                ${largest.amount.toLocaleString('en-US')}
              </span>
            </>
          ) : (
            <>
              <h2 className='break-words font-lexbold text-2xl'>N/A</h2>
              <span className='text-gray-500'>$0</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TotalSection;
