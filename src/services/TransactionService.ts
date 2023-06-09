import { TransactionType } from '../types';
const API_URL = 'http://localhost:8080/api';

export const getTransactions = async (): Promise<TransactionType[]> => {
  try {
    const response = await fetch(`${API_URL}/transaction`, {
      method: 'GET',
      credentials: 'include',
    });

    const json = await response.json();

    return json;
  } catch (err) {
    return [];
  }
};
