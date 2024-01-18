import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

import IconListRightSideNavBar from './IconListRightSideNavBar';
import LogOut from './LogOut/LogOut';
import { IconsBox, MobileNavButton, MobileNavContainer, NavButton, NavItem, NavigationList } from '../../styles/Navigation/MobileNav.styles';
import navigationLinks from './navigationLinks';

interface MobileNavProps {
  visible: () => void;
  navVisible: boolean;
}

function MobileNav({ visible, navVisible }: MobileNavProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const navList = navigationLinks.map((link, index) => (
    <NavItem key={index}>
      <Link to={link.path}>
        <NavButton>
          {link.name}
          <FiChevronRight size={20} />
        </NavButton>
      </Link>
    </NavItem>
  ));

  return (
    <MobileNavContainer>
      <motion.div
        onClick={visible}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className='fixed inset-0 backdrop-blur-navBlur  sm:hidden'></motion.div>

      {navVisible && (
        <motion.div
          initial={{ x: 260 }}
          animate={{ x: 0 }}
          exit={{ x: 260 }}
          transition={{ duration: 0.2 }}
          className=' fixed right-0 top-0 z-20 h-screen w-[260px] border-l-[1px] bg-white p-6 sm:hidden'>
          <MobileNavButton onClick={visible}>
            <IoMdClose size={25} />
          </MobileNavButton>
          <div>
            <NavigationList>{navList}</NavigationList>
          </div>
          <IconsBox>
            <IconListRightSideNavBar />
            <LogOut title='Logout' />
          </IconsBox>
        </motion.div>
      )}
    </MobileNavContainer>
  );
}

export default MobileNav;
