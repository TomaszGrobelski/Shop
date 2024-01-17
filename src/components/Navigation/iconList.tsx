import { BiUser } from 'react-icons/bi';
import { LiaHeart, LiaShoppingBagSolid } from 'react-icons/lia';

const iconList = [
  { name: 'Favorites', icon: <LiaHeart size={25} />, path: '/favorite' },
  { name: 'Bag', icon: <LiaShoppingBagSolid size={25} />, path: '/bag' },
  { name: 'User', icon: <BiUser size={25} />, path: '/user' },
];

export default iconList;
