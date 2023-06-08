import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { FaUserCircle } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const currentYear = new Date().getFullYear();

  const onToggle = () => {
    setOpen((status) => {
      if (status) {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }

      return !status;
    });
  };

  return (
    <header className='flex border-b-2 border-main-border lg:w-80 lg:flex-col lg:border-b-0 lg:border-r-2'>
      <section className='flex w-full items-center justify-between gap-2 p-4 font-lexreg text-3xl text-main-green lg:justify-normal lg:text-5xl'>
        <FaUserCircle />
        <p className='text-2xl font-semibold text-black'>
          {user ? user.username : 'Guest'}
        </p>
        <div className='ml-auto lg:hidden'>
          <Hamburger toggled={open} toggle={onToggle} size={32} />
        </div>
      </section>
      <Nav user={user} logout={logout} />
      <MobileNav user={user} open={open} setOpen={onToggle} logout={logout} />
      <div className='mt-auto hidden p-4 font-lexbold text-lg lg:block'>
        &copy; {currentYear}{' '}
        <a href='https://github.com/vzMars'>Marcos Gonzalez</a>
      </div>
    </header>
  );
};

export default Header;
