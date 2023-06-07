import { useAuthContext } from './useAuthContext';
import { userLogout } from '../services/AuthService';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    const response = await userLogout();

    if (response.ok) {
      dispatch({ type: 'LOGOUT' });
    }
  };

  return { logout };
};
