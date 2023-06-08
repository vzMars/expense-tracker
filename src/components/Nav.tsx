import { Link } from 'react-router-dom';
import { UserType } from '../types';

type PropsType = {
  user: UserType | null;
  logout: () => Promise<void>;
};

const Nav = ({ user, logout }: PropsType) => {
  return (
    <nav className='hidden space-y-2 p-4 font-lexbold text-lg lg:flex lg:flex-col'>
      {user ? (
        <>
          <Link
            to='/'
            className='rounded-md px-2.5 py-2 hover:bg-main-greenHover hover:text-main-green'
          >
            Dashboard
          </Link>
          <Link
            to='/transactions'
            className='rounded-md px-2.5 py-2 hover:bg-main-greenHover hover:text-main-green'
          >
            Transactions
          </Link>
          <button
            onClick={() => logout()}
            className='rounded-md px-2.5 py-2 text-left hover:bg-main-greenHover hover:text-main-green'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to='/login'
            className='rounded-md px-2.5 py-2 hover:bg-main-greenHover hover:text-main-green'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='rounded-md px-2.5 py-2 hover:bg-main-greenHover hover:text-main-green'
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
