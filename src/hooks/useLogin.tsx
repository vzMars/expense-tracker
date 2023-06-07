import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { userLogin } from '../services/AuthService';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

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
      dispatch({ type: 'LOGIN', payload: json.user });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
