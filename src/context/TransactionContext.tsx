import { createContext, useReducer, useEffect, ReactElement } from 'react';
import Loader from '../components/Loader';
import { getTransactions } from '../services/TransactionService';
import {
  TransactionStateType,
  TransactionContextType,
  TransactionReducerAction,
  ChildrenType,
} from '../types';

const initialState: TransactionStateType = {
  transactions: [],
  isLoading: true,
};

const initTransactionContextState: TransactionContextType = {
  transactions: initialState.transactions,
  isLoading: initialState.isLoading,
  dispatch: () => undefined,
};

export const TransactionContext = createContext<TransactionContextType>(
  initTransactionContextState
);

export const transactionReducer = (
  state: TransactionStateType,
  action: TransactionReducerAction
): TransactionStateType => {
  switch (action.type) {
    case 'SET':
      if (!action.payload) {
        throw new Error('action.payload missing in SET action');
      }

      return {
        transactions: action.payload,
        isLoading: false,
      };
    case 'CREATE':
      if (!action.payload) {
        throw new Error('action.payload missing in CREATE action');
      }

      return {
        transactions: [...state.transactions, action.payload],
        isLoading: false,
      };
    case 'UPDATE':
      if (!action.payload) {
        throw new Error('action.payload missing in UPDATE action');
      }

      return {
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        ),
        isLoading: false,
      };
    case 'DELETE':
      if (!action.payload) {
        throw new Error('action.payload missing in DELETE action');
      }

      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        isLoading: false,
      };
    default:
      return state;
  }
};

export const TransactionProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  useEffect(() => {
    getTransactions().then((transactions) =>
      dispatch({ type: 'SET', payload: transactions })
    );
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : (
        <TransactionContext.Provider value={{ ...state, dispatch }}>
          {children}
        </TransactionContext.Provider>
      )}
    </>
  );
};
