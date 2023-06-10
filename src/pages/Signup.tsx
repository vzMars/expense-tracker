import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import Error from '../components/Error';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(email, username, password);
  };

  return (
    <main className='max-w-7xl lg:mx-auto lg:flex-1 lg:p-24'>
      <form
        className='flex flex-col p-4 lg:w-96 lg:rounded-md lg:border-2 lg:border-main-border lg:py-12'
        onSubmit={handleSubmit}
      >
        <h1 className='mb-4 font-lexbold text-4xl lg:mb-6'>Sign Up</h1>
        <label className='mb-1 font-lexreg'>Email</label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className='mb-4 rounded-md border-2 border-main-border p-2 lg:mb-6'
        />
        <label className='mb-1 font-lexreg'>Username</label>
        <input
          type='text'
          onChange={(e) => setUserName(e.target.value)}
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
          Sign Up
        </button>
        {error && <Error errorMessage={error} />}
      </form>
    </main>
  );
};

export default Signup;
