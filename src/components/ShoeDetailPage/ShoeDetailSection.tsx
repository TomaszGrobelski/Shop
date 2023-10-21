import { useParams } from "react-router-dom";
import shoesList from "../ShoesPage/Products/shoesList";
import SizeShoeDetail from "./SizeShoeDetail";
import ButtonCustom from "../Buttons/ButtonCustom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useContext } from "react";
import { FavoritiestContext } from "../../context/context";
import { Shoe } from "../ShoesPage/Products/interfaceShoe";

function ShoeDetailSection() {
  const { name } = useParams();
  const shoeDetails = shoesList.find((shoe) => shoe.name === name);
  const { favorities, setFavorities } = useContext(FavoritiestContext);

  if (!shoeDetails) {
    return (
      <div className="flex items-center justify-center gap-2 w-full h-[400px]">
        But o nazwie <span className="font-bold">{name}</span> nie jest już dostępny na sprzedaż
      </div>
    );
  }

  const isFavorite = favorities.some((shoe: Shoe) => shoe.name === shoeDetails.name);

  const favoriteClick = () => {
    if (isFavorite) {
      setFavorities((prevFavorites: Shoe[]) => prevFavorites.filter((shoe: Shoe) => shoe.name !== shoeDetails.name));
    } else {
      setFavorities((prevFavorites: Shoe[]) => [...prevFavorites, shoeDetails]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 ">
      <div className=" col-span-1 ">
        <img src={shoeDetails.img} alt={shoeDetails.name} className="aspect-square object-fill w-full  " />
      </div>
      <div className="p-6 pl-16 font-bold text-[18px] w-[500px]  ">
        <h1 className="text-[24px] opacity-90">{shoeDetails.name}</h1>
        <h2>{shoeDetails.gender}</h2>
        <div className="flex gap-4 my-5">
          <p>${shoeDetails.price}</p>
          {shoeDetails.oldPrice && <p className="line-through text-gray-500">${shoeDetails.oldPrice}</p>}
        </div>
        <p className=" text-green-700 opacity-90 text-[16px]">
          Member Exclusive: use code MEMBER20 for an extra 20% off select styles. Log in or sign up for free to save.
        </p>
        <SizeShoeDetail shoeDetails={shoeDetails} />
        <div className="flex flex-col gap-5">
          <ButtonCustom className="bg-black text-white">Add to Bad</ButtonCustom>
          <ButtonCustom onClick={favoriteClick} className="flex justify-center items-center">
            <span>Favorite</span>
            {isFavorite ? <IoMdHeart size={20} className="ml-4" /> : <IoMdHeartEmpty size={20} className="ml-4" />}
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetailSection;
