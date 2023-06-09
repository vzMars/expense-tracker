import { useAuthContext } from './useAuthContext';
import { useTransactionContext } from './useTransactionContext';
import { userLogout } from '../services/AuthService';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: transactionDispatch } = useTransactionContext();

  const logout = async () => {
    const response = await userLogout();

    if (response.ok) {
      dispatch({ type: 'LOGOUT' });
      transactionDispatch({ type: 'SET', payload: [] });
    }
  };

  return { logout };
};
