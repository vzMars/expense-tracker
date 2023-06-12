import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.tsx';
import { TransactionProvider } from './context/TransactionContext.tsx';
import { CategoryProvider } from './context/CategoryContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <TransactionProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </TransactionProvider>
    </AuthProvider>
  </React.StrictMode>
);
