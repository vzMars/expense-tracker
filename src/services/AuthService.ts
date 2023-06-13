const API_URL = 'https://api.expensetracker.vzmars.com/api';

export const isAuthenticated = () => {
  return fetch(`${API_URL}/auth`, {
    method: 'GET',
    credentials: 'include',
  });
};

export const userLogin = (username: string, password: string) => {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });
};

export const userLogout = () => {
  return fetch(`${API_URL}/auth/logout`, {
    method: 'GET',
    credentials: 'include',
  });
};

export const userSignup = (
  email: string,
  username: string,
  password: string
) => {
  return fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, username, password }),
  });
};
