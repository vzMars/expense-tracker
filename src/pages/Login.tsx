import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Error from '../components/Error';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(username, password);
  };

  const handleGuestLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    await login("Mike", "Mike123!");
  };

  return (
    <main className='max-w-7xl lg:mx-auto lg:flex-1 lg:p-24'>
      <form
        className='flex flex-col p-4 lg:w-96 lg:rounded-md lg:border-2 lg:border-main-border lg:py-12'
        onSubmit={handleSubmit}
      >
        <div onClick={handleGuestLogin} className='rounded-md bg-table-100 px-2.5 py-2 font-lexbold text-gray-50 self-end cursor-pointer bg-main-green'>
          Guest Login
        </div>
        <h1 className='mb-4 font-lexbold text-4xl lg:mb-6'>Login</h1>
        <label className='mb-1 font-lexreg'>Username</label>
        <input
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <label className='mb-1 font-lexreg'>Password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <button
          disabled={isLoading}
          className='mb-4 w-full rounded-md bg-main-green px-2.5 py-2 font-lexbold hover:opacity-90 lg:mb-6'
        >
          Login
        </button>
        {error && <Error errorMessage={error} />}
      </form>
    </main>
  );
};

export default Login;
