import { BiUser } from 'react-icons/bi';
import { LiaHeart, LiaShoppingBagSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const getIconList = (bagItemCount: number) => [
  { name: 'Favorites', icon: <LiaHeart size={30} />, path: '/favorite' },
  {
    name: 'Bag',
    icon: (
      <div className='relative'>
        <LiaShoppingBagSolid size={30} />
        <span className='absolute left-[8px] top-[10px]  z-50 text-[12px] font-bold text-black '>
          {bagItemCount}
        </span>
      </div>
    ),
    path: '/bag',
  },
  { name: 'User', icon: <BiUser size={30} />, path: '/user' },
];

const IconList = ({ bagItemCount }: { bagItemCount: number }) => {
  return (
    <>
      {getIconList(bagItemCount).map((icon, index) => (
        <Link key={index} to={icon.path}>
          {icon.icon}
        </Link>
      ))}
    </>
  );
};

export default IconList;
