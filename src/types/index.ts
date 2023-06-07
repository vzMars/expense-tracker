import { ReactElement } from 'react';

export type ChildrenType = { children?: ReactElement | ReactElement[] };

// AuthContext
export type UserType = {
  id: string;
  email: string;
  username: string;
};

export type AuthStateType = {
  user: UserType | null;
  isLoading: boolean;
};

export type AuthContextType = {
  user: UserType | null;
  isLoading: boolean;
  dispatch: React.Dispatch<AuthReducerAction>;
};

export type AuthReducerAction =
  | { type: 'LOGIN'; payload: UserType }
  | { type: 'LOGOUT' };
