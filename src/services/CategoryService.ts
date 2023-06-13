import { CategoryType } from '../types';
const API_URL = 'https://api.expensetracker.vzmars.com/api';

export const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const response = await fetch(`${API_URL}/category`, {
      method: 'GET',
      credentials: 'include',
    });

    const json = await response.json();

    return json;
  } catch (err) {
    return [];
  }
};
