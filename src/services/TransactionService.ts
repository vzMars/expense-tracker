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

type TransactionBodyType = {
  title: string;
  amount: number;
  transactionDate: string;
  description: string;
  categoryId: number;
};

export const addTransaction = async (body: TransactionBodyType) => {
  return fetch(`${API_URL}/transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });
};

export const deleteTransaction = async (id: number) => {
  return fetch(`${API_URL}/transaction/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
};

export const editTransaction = async (
  id: number,
  body: TransactionBodyType
) => {
  return fetch(`${API_URL}/transaction/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });
};
