const API_URL = 'http://localhost:8080/api';

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
