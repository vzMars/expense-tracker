import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useTransactionContext } from './useTransactionContext';
import { userLogin } from '../services/AuthService';
import { getTransactions } from '../services/TransactionService';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: transactionDispatch } = useTransactionContext();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await userLogin(username, password);

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      const transactions = await getTransactions();
      dispatch({ type: 'LOGIN', payload: json.user });
      transactionDispatch({ type: 'SET', payload: transactions });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
