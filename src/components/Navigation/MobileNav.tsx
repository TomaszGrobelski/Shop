import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

import LogOut from './LogOut/LogOut';
import iconList from './iconList';
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
    <li className='flex items-center justify-between' key={index}>
      <Link to={link.path}>
        <button className='flex w-[212px] items-center justify-between'>
          {link.name}
          <FiChevronRight size={20} />
        </button>
      </Link>
    </li>
  ));

  const iconsList = iconList.map((icon, index) => (
    <button key={index}>
      <Link className='flex items-center gap-4 ' to={icon.path}>
        {icon.icon}
        {icon.name}
      </Link>
    </button>
  ));

  return (
    <div className='relative z-50  font-helvetica text-[24px] text-black'>
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
          <button onClick={visible} className='relative   left-[188px]'>
            <IoMdClose size={25} />
          </button>
          <div className=''>
            <ul className='flex flex-col  gap-4'>{navList}</ul>
          </div>
          <div className='my-20 flex flex-col gap-4'>
            {iconsList}
            <LogOut title='Logout' />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MobileNav;
