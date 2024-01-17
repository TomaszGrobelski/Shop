<<<<<<< HEAD
import { useParams } from "react-router-dom";
import shoesList from "../ShoesPage/Products/shoesList";
import SizeShoeDetail from "./SizeShoeDetail";
import PrimaryButton from "../Buttons/PrimaryButton";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
=======
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import { useContext, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { FavoritiestContext } from "../../context/context";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Shoe } from "../ShoesPage/Products/interfaceShoe";
<<<<<<< HEAD
import Shipping from "./Shipping";
import { v4 as uuidv4 } from "uuid";
=======
import shoesList from "../ShoesPage/Products/shoesList";
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import ModalDetail from "./ModalDetail";
import Shipping from "./Shipping";
import SizeShoeDetail from "./SizeShoeDetail";

function ShoeDetailSection() {
  const { name } = useParams();
  const shoeDetails = shoesList.find((shoe) => shoe.name === name);
  const { favorities, setFavorities } = useContext(FavoritiestContext);
  const [selectedSize, setSelectedSize] = useState<number | null | false>(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (!shoeDetails) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center gap-2">
        But o nazwie <span className="font-bold">{name}</span> nie jest już
        dostępny na sprzedaż
      </div>
    );
  }

  const isFavorite = favorities.some(
    (shoe: Shoe) => shoe.name === shoeDetails.name,
  );

  const favoriteClick = () => {
    if (isFavorite) {
      setFavorities((prevFavorites: Shoe[]) =>
        prevFavorites.filter((shoe: Shoe) => shoe.name !== shoeDetails.name),
      );
    } else {
      setFavorities((prevFavorites: Shoe[]) => [...prevFavorites, shoeDetails]);
    }
  };

  const addToBagClick = () => {
    if (selectedSize === null || selectedSize === false) {
      setSelectedSize(false);
      return;
    }
    const shoeWithSelectedSize = {
      ...shoeDetails,
      selectedSize: selectedSize,
      id: uuidv4(),
    };
    const currentBag = JSON.parse(localStorage.getItem("bagItems") || "[]");
    currentBag.push(shoeWithSelectedSize);

    localStorage.setItem("bagItems", JSON.stringify(currentBag));
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 4000);
  };

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2  ">
      <div className=" col-span-1  ">
        <img
          src={shoeDetails.img}
          alt={shoeDetails.name}
          className="aspect-square w-full object-fill md:sticky md:top-10 "
        />
      </div>
      <div className="p-6 pl-16 text-[18px] font-bold md:w-[500px]  ">
        <h1 className="text-[24px] opacity-90">{shoeDetails.name}</h1>
        <h2>{shoeDetails.gender}</h2>
        <div className="my-5 flex gap-4">
          <p>${shoeDetails.price}</p>
          {shoeDetails.oldPrice && (
            <p className="text-gray-500 line-through">
              ${shoeDetails.oldPrice}
            </p>
          )}
        </div>
        <p className=" text-[16px] text-green-700 opacity-90">
          Member Exclusive: use code MEMBER20 for an extra 20% off select
          styles. Log in or sign up for free to save.
        </p>
        <SizeShoeDetail
          selectedSize={selectedSize}
          shoeDetails={shoeDetails}
          onSizeSelect={setSelectedSize}
        />
        <div className="flex flex-col gap-5">
<<<<<<< HEAD
          <PrimaryButton onClick={addToBagClick} className="bg-black text-white">
            Add to Bad
          </PrimaryButton>
          <PrimaryButton onClick={favoriteClick} className="flex justify-center items-center">
            <span>Favorite</span>
            {isFavorite ? <IoMdHeart size={20} className="ml-4" /> : <IoMdHeartEmpty size={20} className="ml-4" />}
=======
          <PrimaryButton
            onClick={addToBagClick}
            className="bg-black text-white">
            Add to Bad
          </PrimaryButton>
          <PrimaryButton
            onClick={favoriteClick}
            className="flex items-center justify-center">
            <span>Favorite</span>
            {isFavorite ? (
              <IoMdHeart size={20} className="ml-4" />
            ) : (
              <IoMdHeartEmpty size={20} className="ml-4" />
            )}
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
          </PrimaryButton>
        </div>
        <Shipping />
      </div>
      {modalVisible && <ModalDetail setModalVisible={setModalVisible} />}
    </div>
  );
}

export default ShoeDetailSection;
