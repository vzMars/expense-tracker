import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import RequireAuth from './components/RequireAuth';
import RequireGuest from './components/RequireGuest';

// Pages
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

// Layouts
import Layout from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<RequireGuest />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route index element={<Dashboard />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='add' element={<AddTransaction />} />
            <Route path='edit/:id' element={<EditTransaction />} />
          </Route>

          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='404' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
