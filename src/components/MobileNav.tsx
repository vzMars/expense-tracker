import { Link } from 'react-router-dom';
import { UserType } from '../types';

type PropsType = {
  user: UserType | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
};

const MobileNav = ({ user, open, setOpen, logout }: PropsType) => {
  return (
    <nav
      className={`${
        !open
          ? 'hidden'
          : 'fixed right-0 top-20 z-10 flex h-full w-full flex-col space-y-8 bg-main-green px-2 py-4 font-lexbold text-2xl'
      } lg:hidden`}
      onClick={() => setOpen(false)}
    >
      {user ? (
        <>
          <Link
            to='/'
            className='rounded-md px-2.5 py-2 hover:bg-white hover:text-main-green'
          >
            Dashboard
          </Link>
          <Link
            to='/transactions'
            className='rounded-md px-2.5 py-2 hover:bg-white hover:text-main-green'
          >
            Transactions
          </Link>
          <button
            onClick={() => logout()}
            className='rounded-md px-2.5 py-2 text-left hover:bg-white hover:text-main-green'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to='/login'
            className='rounded-md px-2.5 py-2 hover:bg-white hover:text-main-green'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='rounded-md px-2.5 py-2 hover:bg-white hover:text-main-green'
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default MobileNav;
