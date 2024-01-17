import { BiUser } from 'react-icons/bi';
import { LiaHeart, LiaShoppingBagSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const IconListRightSideNavBar = () => {
  const iconList = [
    { name: 'Favorites', icon: <LiaHeart size={25} />, path: '/favorite' },
    { name: 'Bag', icon: <LiaShoppingBagSolid size={25} />, path: '/bag' },
    { name: 'User', icon: <BiUser size={25} />, path: '/user' },
  ];

  return iconList.map((icon, index) => (
    <button key={index}>
      <Link className='flex items-center gap-4 ' to={icon.path}>
        {icon.icon}
        {icon.name}
      </Link>
    </button>
  ));
};

export default IconListRightSideNavBar;
