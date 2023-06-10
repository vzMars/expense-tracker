import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='m-auto font-lexbold'>
      <section className='flex max-w-6xl flex-col items-center justify-center space-y-8 px-4'>
        <h1 className='text-9xl font-bold text-main-green'>404</h1>
        <p className='lead fw-normal text-center font-medium'>
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to='/'
          className='rounded-md bg-main-green px-4 py-3 text-xl font-bold'
        >
          Back To Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
