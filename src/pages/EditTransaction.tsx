import { useTransactionContext } from '../hooks/useTransactionContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TransactionType } from '../types';
import Loader from '../components/Loader';
import EditForm from '../components/EditForm';

const EditTransaction = () => {
  const { transactions } = useTransactionContext();
  const [isLoading, setIsLoading] = useState(true);
  const [transaction, setTransaction] = useState<TransactionType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkTransactionId = async () => {
      setIsLoading(true);

      if (!id || isNaN(Number(id))) {
        setIsLoading(false);
        navigate('/404');
      }

      const found = transactions.find(
        (transaction) => transaction.id === Number(id)
      );

      if (!found) {
        setIsLoading(false);
        navigate('/404');
      }

      if (found) {
        setTransaction(found);
        setIsLoading(false);
      }
    };

    checkTransactionId();
  }, [id, navigate, transactions]);

  return (
    <main className='max-w-7xl lg:mx-auto lg:w-full lg:p-24'>
      {!isLoading && transaction ? (
        <EditForm transaction={transaction} />
      ) : (
        <div className='text-center'>
          <Loader />
        </div>
      )}
    </main>
  );
};

export default EditTransaction;
