import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategoryContext } from '../hooks/useCategoryContext';
import { useTransactionContext } from '../hooks/useTransactionContext';
import { categoriesByType } from '../utils/CategoryUtils';
import { editTransaction } from '../services/TransactionService';
import { TransactionType } from '../types';
import Error from '../components/Error';

type PropsType = {
  transaction: TransactionType;
};

const EditForm = ({ transaction }: PropsType) => {
  const { categories } = useCategoryContext();
  const [categoryType, setCategoryType] = useState(transaction.categoryType);
  const [options, setOptions] = useState(
    categoriesByType(categories, categoryType)
  );
  const [title, setTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(`${transaction.amount}`);
  const [transactionDate, setTransactionDate] = useState(
    `${transaction.transactionDate}`
  );
  const [description, setDescription] = useState(transaction.description);
  const [categoryId, setCategoryId] = useState(`${transaction.categoryId}`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useTransactionContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const body = {
      title,
      amount: parseInt(amount),
      transactionDate,
      description,
      categoryId: parseInt(categoryId),
    };

    const response = await editTransaction(transaction.id, body);

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: 'UPDATE', payload: json });
      navigate('/transactions');
    }
  };

  const updateCategoryType = () => {
    if (categoryType === 'Income') {
      const updatedCategories = categoriesByType(categories, 'Expense');
      setCategoryType('Expense');
      setOptions(updatedCategories);
      setCategoryId(`${updatedCategories[0].id}`);
    } else {
      const updatedCategories = categoriesByType(categories, 'Income');
      setCategoryType('Income');
      setOptions(updatedCategories);
      setCategoryId(`${updatedCategories[0].id}`);
    }
  };

  return (
    <>
      <div className='mb-4 flex justify-between p-4 font-lexbold'>
        <button
          className={`${
            categoryType === 'Income'
              ? 'bg-black text-white'
              : 'bg-main-green text-black'
          } w-1/2 rounded-md rounded-r-none p-2`}
          onClick={updateCategoryType}
        >
          Income
        </button>
        <button
          className={`${
            categoryType === 'Expense'
              ? 'bg-black text-white'
              : 'bg-main-green text-black'
          } w-1/2 rounded-md rounded-l-none p-2`}
          onClick={updateCategoryType}
        >
          Expense
        </button>
      </div>
      <form
        className='flex flex-col p-4 lg:rounded-md lg:border-2 lg:border-main-border lg:py-12'
        onSubmit={handleSubmit}
      >
        <h1 className='mb-4 font-lexbold text-4xl lg:mb-6'>Add Transaction</h1>
        <label className='mb-1 font-lexreg'>Title</label>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <label className='mb-1 font-lexreg'>Amount</label>
        <input
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <label className='mb-1 font-lexreg'>Transaction Date</label>
        <input
          type='date'
          onChange={(e) => setTransactionDate(e.target.value)}
          value={transactionDate}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <label className='mb-1 font-lexreg'>Description</label>
        <input
          type='text'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <label className='mb-1 font-lexreg'>Category</label>
        <select
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <button
          disabled={isLoading}
          className='mb-4 w-full rounded-md bg-main-green px-2.5 py-2 font-lexbold hover:opacity-90 lg:mb-6'
        >
          Edit
        </button>
        {error && <Error errorMessage={error} />}
      </form>
    </>
  );
};

export default EditForm;
