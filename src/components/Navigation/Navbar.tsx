import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import IconList from './LogOut/IconList';
import LogOut from './LogOut/LogOut';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { LiNavigation } from '../../styles/Navigation/Navbar.styles';
import {
  ButtonBurger,
  IconPositioning,
  UlNavBarFlexBox,
} from '../../styles/Navigation/Navbar.styles';
import { Nav } from '../../styles/Navigation/Navbar.styles';
import navigationLinks from './navigationLinks';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navVisible, setNavVisible] = useState(false);
  const [bagItemCount, setBagItemCount] = useState(0);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

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
    <LiNavigation key={index}>
      <Link to={link.path}>{link.name}</Link>
    </LiNavigation>
  ));

  const navClick = () => {
    setNavVisible(!navVisible);
  };

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
      <Logo />
      <UlNavBarFlexBox>{navList}</UlNavBarFlexBox>
      <IconPositioning>
        <IconList bagItemCount={bagItemCount} />
        <LogOut />
      </IconPositioning>
      {!navVisible && (
        <ButtonBurger onClick={navClick}>
          <AiOutlineMenu size={26} />
        </ButtonBurger>
      )}
      <AnimatePresence>
        {navVisible && <MobileNav navVisible={navVisible} visible={navClick} />}
      </AnimatePresence>
    </Nav>
  );
}

export default Navbar;
