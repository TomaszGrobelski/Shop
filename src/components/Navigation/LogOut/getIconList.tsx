import { BiUser } from "react-icons/bi";
import { LiaHeart, LiaShoppingBagSolid } from "react-icons/lia";

const getIconList = (bagItemCount: number) => [
  { name: "Favorites", icon: <LiaHeart size={30} />, path: "/favorite" },
  {
    name: "Bag",
    icon: (
      <div className="relative">
        <LiaShoppingBagSolid size={30} />
<<<<<<< HEAD
        <span className="absolute top-[10px] left-[8px]  z-50 text-black font-bold text-[12px] ">{bagItemCount}</span>
=======
        <span className="absolute left-[8px] top-[10px]  z-50 text-[12px] font-bold text-black ">
          {bagItemCount}
        </span>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
      </div>
    ),
    path: "/bag",
  },
  { name: "User", icon: <BiUser size={30} />, path: "/user" },
];

export default getIconList;
