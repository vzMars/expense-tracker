import { Link } from 'react-router-dom';
import { useTransactionContext } from '../hooks/useTransactionContext';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { deleteTransaction } from '../services/TransactionService';

const Transactions = () => {
  const { transactions, dispatch } = useTransactionContext();

  const removeTransaction = async (id: number) => {
    const response = await deleteTransaction(id);

    if (response.ok) {
      dispatch({ type: 'DELETE', payload: id });
    }
  };

  return (
    <main className='mx-auto max-w-7xl p-4 lg:w-full lg:p-24'>
      <ul className='flex flex-wrap justify-center gap-4'>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className='flex w-full items-center justify-between rounded-md border-2 border-main-border p-4 font-lexreg text-lg lg:w-2/5'
          >
            <div className='flex flex-col space-y-2'>
              <h2 className='font-lexbold'>{transaction.title}</h2>
              <p className='text-base'>{transaction.description}</p>
              <p>{transaction.transactionDate.toString()}</p>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <h2 className='font-lexbold'>${transaction.amount}</h2>
              <Link
                to={`/edit/${transaction.id}`}
                className='cursor-pointer text-2xl text-main-green'
              >
                <FaRegEdit />
              </Link>

              {/* <div className='cursor-pointer text-2xl text-main-green'>
                <FaRegEdit />
              </div> */}
              <div
                className='cursor-pointer text-2xl text-red-600'
                onClick={() => removeTransaction(transaction.id)}
              >
                <FaRegTrashAlt />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Transactions;
