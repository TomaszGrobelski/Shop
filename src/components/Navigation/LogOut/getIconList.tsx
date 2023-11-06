import { LiaHeart, LiaShoppingBagSolid } from "react-icons/lia";
import { BiUser } from "react-icons/bi";

const getIconList = (bagItemCount: number) => [
  { name: 'Favorites', icon: <LiaHeart size={30} />, path: "/favorite" },
  {
    name: 'Bag',
    icon: (
      <div className="relative">
        <LiaShoppingBagSolid size={30} />
        <span className="absolute top-[10px] left-[8px]  z-50 text-black font-bold text-[12px] ">
          {bagItemCount}
        </span>
      </div>
    ),
    path: "/bag"
  },
  { name: 'User', icon: <BiUser size={30} />, path: "/user" },
];

export default getIconList;
