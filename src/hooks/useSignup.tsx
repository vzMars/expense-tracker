import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { userSignup } from '../services/AuthService';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

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
      dispatch({ type: 'LOGIN', payload: json.user });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
