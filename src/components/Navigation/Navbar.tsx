import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logoNika from '../../images/Logo/logoNika.png';
import LogOut from './LogOut/LogOut';
import getIconList from './LogOut/getIconList';
import MobileNav from './MobileNav';
import { Nav } from './Navbar.styles';
import navigationLinks from './navigationLinks';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navVisible, setNavVisible] = useState(false);
  const [bagItemCount, setBagItemCount] = useState(0);

  useEffect(() => {
    const bagItems = JSON.parse(localStorage.getItem('bagItems') || '[]');
    setBagItemCount(bagItems.length);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    windowWidth > 640 ? setNavVisible(false) : null;

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const navList = navigationLinks.map((link, index) => (
    <li className=' text-[16px] font-semibold tracking-[1px]' key={index}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));

  const iconsList = getIconList(bagItemCount).map((icon, index) => (
    <Link key={index} to={icon.path}>
      {icon.icon}
    </Link>
  ));

  const navClick = () => {
    setNavVisible(!navVisible);
  };
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
  }, [prevScrollpos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Nav
      style={{
        top: visible ? 0 : '-100px',
        position: 'fixed',
        transition: 'top 0.2s',
      }}>
      <Link to='/home'>
        <img
          className='max-w-[100px]'
          src={logoNika}
          width={1103}
          height={338}
          alt='Logo'
        />
      </Link>
      <ul className='hidden gap-4  sm:flex'>{navList}</ul>
      <div className='hidden items-center gap-4 sm:flex '>
        {iconsList}
        <LogOut />
      </div>
      {!navVisible && (
        <button
          onClick={navClick}
          className=' absolute left-[90%] mr-4 sm:hidden'>
          <AiOutlineMenu size={26} />
        </button>
      )}
      <AnimatePresence>
        {navVisible && <MobileNav navVisible={navVisible} visible={navClick} />}
      </AnimatePresence>
    </Nav>
  );
}

export default Navbar;
