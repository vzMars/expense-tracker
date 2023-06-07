const API_URL = 'http://localhost:8080/api';

export const isAuthenticated = () => {
  return fetch(`${API_URL}/auth`, {
    method: 'GET',
    credentials: 'include',
  });
};
