import { createContext, useReducer, useEffect, ReactElement } from 'react';
import Loader from '../components/Loader';
import { getCategories } from '../services/CategoryService';
import {
  CategoryStateType,
  CategoryContextType,
  CategoryReducerAction,
  ChildrenType,
} from '../types';

const initialState: CategoryStateType = {
  categories: [],
  isLoading: true,
};

const initCategoryContextState: CategoryContextType = {
  categories: initialState.categories,
  isLoading: initialState.isLoading,
  dispatch: () => undefined,
};

export const CategoryContext = createContext<CategoryContextType>(
  initCategoryContextState
);

export const categoryReducer = (
  state: CategoryStateType,
  action: CategoryReducerAction
): CategoryStateType => {
  switch (action.type) {
    case 'SET':
      if (!action.payload) {
        throw new Error('action.payload missing in SET action');
      }

      return {
        categories: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const CategoryProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  useEffect(() => {
    getCategories().then((categories) =>
      dispatch({ type: 'SET', payload: categories })
    );
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : (
        <CategoryContext.Provider value={{ ...state, dispatch }}>
          {children}
        </CategoryContext.Provider>
      )}
    </>
  );
};
