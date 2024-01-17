import { useContext, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { FavoritiestContext } from "../../context/context";
import PrimaryButton from "../Buttons/PrimaryButton";
import ShoeCard from "../ShoesPage/Products/ShoeCard";

function FavoiteSection() {
  const { favorities, setFavorities } = useContext(FavoritiestContext);

  const [isEdit, setIsEdit] = useState(false);
  const [toBeRemoved, setToBeRemoved] = useState<number[]>([]);

  const editClick = () => {
    if (isEdit) {
      const newFavorites = favorities.filter(
        (_, index) => !toBeRemoved.includes(index),
      );
      setFavorities(newFavorites);
      setToBeRemoved([]);
    }
    setIsEdit(!isEdit);
  };

  const toggleFavorite = (index: number) => {
    setToBeRemoved((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="my-10 p-6">
      <div className="flex items-center justify-between">
        <h2 className="py-10 text-[24px] sm:text-[32px]">
          {isEdit ? "Manage Your Favorites" : "Favorites"}
        </h2>
        {favorities.length !== 0 && (
          <PrimaryButton
            onClick={editClick}
            className={`${
              isEdit ? "bg-black text-white" : "bg-white"
            } h-[50px] w-[90px] text-[18px] hover:opacity-75`}>
            {isEdit ? "Done" : "Edit"}
          </PrimaryButton>
        )}
      </div>
      {favorities.length === 0 ? (
        <div className="flex justify-center">
          <p className="m-6 p-6 font-bold opacity-90">
            Items added to your Favorites will be saved here.
          </p>
        </div>
      ) : (
        <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorities.map((shoe, index) => (
            <ShoeCard
              shoe={shoe}
              key={index}
              favorite={
                isEdit && (
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white sm:right-3 sm:top-3">
                    <span>
                      {toBeRemoved.includes(index) ? (
                        <IoMdHeartEmpty size={20} />
                      ) : (
                        <IoMdHeart size={20} />
                      )}
                    </span>
                  </button>
                )
              }>
              <PrimaryButton className=" my-5 h-[45px] w-[100px] bg-white font-bold opacity-90 sm:w-[130px]">
                Select Size
              </PrimaryButton>
            </ShoeCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoiteSection;
