import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useCategoryContext } from './useCategoryContext';
import { userSignup } from '../services/AuthService';
import { getCategories } from '../services/CategoryService';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: categoryDispatch } = useCategoryContext();

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await userSignup(email, username, password);

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      const categories = await getCategories();
      dispatch({ type: 'LOGIN', payload: json.user });
      categoryDispatch({ type: 'SET', payload: categories });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
