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

// TransactionContext
export type TransactionType = {
  id: number;
  title: string;
  amount: number;
  transactionDate: Date;
  description: string;
  userId: number;
  categoryId: number;
  categoryName: string;
  categoryType: string;
};

export type TransactionStateType = {
  transactions: TransactionType[];
  isLoading: boolean;
};

export type TransactionContextType = {
  transactions: TransactionType[];
  isLoading: boolean;
  dispatch: React.Dispatch<TransactionReducerAction>;
};

export type TransactionReducerAction =
  | { type: 'SET'; payload: TransactionType[] }
  | { type: 'CREATE'; payload: TransactionType }
  | { type: 'UPDATE'; payload: TransactionType }
  | { type: 'DELETE'; payload: number };

// CategoryContext
export type CategoryType = {
  id: number;
  name: string;
  type: string;
};

export type CategoryStateType = {
  categories: CategoryType[];
  isLoading: boolean;
};

export type CategoryContextType = {
  categories: CategoryType[];
  isLoading: boolean;
  dispatch: React.Dispatch<CategoryReducerAction>;
};

export type CategoryReducerAction = { type: 'SET'; payload: CategoryType[] };
