import { useParams } from "react-router-dom";
import shoesList from "../ShoesPage/Products/shoesList";
import SizeShoeDetail from "./SizeShoeDetail";
import ButtonCustom from "../Buttons/ButtonCustom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useContext, useState } from "react";
import { FavoritiestContext } from "../../context/context";
import { Shoe } from "../ShoesPage/Products/interfaceShoe";
import Shipping from "./Shipping";
import { v4 as uuidv4 } from 'uuid'
import ModalDetail from "./ModalDetail";

function ShoeDetailSection() {
  const { name } = useParams();
  const shoeDetails = shoesList.find((shoe) => shoe.name === name);
  const { favorities, setFavorities } = useContext(FavoritiestContext);
  const [selectedSize, setSelectedSize] = useState<number | null | false>(null);
  const [modalVisible, setModalVisible]= useState(false)

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

  const addToBagClick = () => {
    if(selectedSize=== null || selectedSize===false){
     setSelectedSize(false)
      return
    }
    const shoeWithSelectedSize = {
      ...shoeDetails,
      selectedSize: selectedSize,
      id: uuidv4()
    };
    const currentBag = JSON.parse(localStorage.getItem("bagItems") || "[]");
    currentBag.push(shoeWithSelectedSize);

    localStorage.setItem("bagItems", JSON.stringify(currentBag));
    setModalVisible(true)
    setTimeout(()=>{
      setModalVisible(false)
    },4000)
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10  ">
      <div className=" col-span-1  ">
        <img
          src={shoeDetails.img}
          alt={shoeDetails.name}
          className="aspect-square object-fill w-full md:sticky md:top-10 "
        />
      </div>
      <div className="p-6 pl-16 font-bold text-[18px] md:w-[500px]  ">
        <h1 className="text-[24px] opacity-90">{shoeDetails.name}</h1>
        <h2>{shoeDetails.gender}</h2>
        <div className="flex gap-4 my-5">
          <p>${shoeDetails.price}</p>
          {shoeDetails.oldPrice && <p className="line-through text-gray-500">${shoeDetails.oldPrice}</p>}
        </div>
        <p className=" text-green-700 opacity-90 text-[16px]">
          Member Exclusive: use code MEMBER20 for an extra 20% off select styles. Log in or sign up for free to save.
        </p>
        <SizeShoeDetail selectedSize={selectedSize} shoeDetails={shoeDetails} onSizeSelect={setSelectedSize} />
        <div className="flex flex-col gap-5">
          <ButtonCustom onClick={addToBagClick} className="bg-black text-white">
            Add to Bad
          </ButtonCustom>
          <ButtonCustom onClick={favoriteClick} className="flex justify-center items-center">
            <span>Favorite</span>
            {isFavorite ? <IoMdHeart size={20} className="ml-4" /> : <IoMdHeartEmpty size={20} className="ml-4" />}
          </ButtonCustom>
        </div>
        <Shipping />
      </div>
      {modalVisible&&<ModalDetail setModalVisible={setModalVisible} />}
    </div>
  );
}

export default ShoeDetailSection;
