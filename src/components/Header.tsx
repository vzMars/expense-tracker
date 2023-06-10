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
    <header className='w-full border-b-2 border-main-border'>
      <section className='mx-auto flex max-w-7xl items-center justify-between p-4'>
        <div className='flex items-center gap-2 font-lexreg text-3xl text-main-green lg:text-5xl'>
          <FaUserCircle />
          <p className='text-2xl font-semibold text-black'>
            {user ? user.username : 'Guest'}
          </p>
        </div>
        <div className='lg:hidden'>
          <Hamburger toggled={open} toggle={onToggle} size={32} />
        </div>
        <Nav user={user} logout={logout} />
      </section>
      <MobileNav user={user} open={open} setOpen={onToggle} logout={logout} />
    </header>
  );
};

export default Header;
