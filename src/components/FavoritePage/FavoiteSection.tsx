import { useContext, useState } from "react";
import { FavoritiestContext } from "../../context/context";
import PrimaryButton from "../Buttons/PrimaryButton";
import ShoeCard from "../ShoesPage/Products/ShoeCard";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

function FavoiteSection() {
  const { favorities, setFavorities } = useContext(FavoritiestContext);

  const [isEdit, setIsEdit] = useState(false);
  const [toBeRemoved, setToBeRemoved] = useState<number[]>([]);

  const editClick = () => {
    if (isEdit) {
      const newFavorites = favorities.filter((_, index) => !toBeRemoved.includes(index));
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
    <div className="p-6 my-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] sm:text-[32px] py-10">{isEdit ? "Manage Your Favorites" : "Favorites"}</h2>
        {favorities.length !== 0 && (
          <PrimaryButton
            onClick={editClick}
            className={`${isEdit ? "bg-black text-white" : "bg-white"} w-[90px] h-[50px] text-[18px] hover:opacity-75`}
          >
            {isEdit ? "Done" : "Edit"}
          </PrimaryButton>
        )}
      </div>
      {favorities.length === 0 ? (
        <div className="flex justify-center">
          <p className="p-6 m-6 font-bold opacity-90">Items added to your Favorites will be saved here.</p>
        </div>
      ) : (
        <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {favorities.map((shoe, index) => (
            <ShoeCard
              shoe={shoe}
              key={index}
              favorite={
                isEdit && (
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="absolute top-1 right-1 sm:top-3 sm:right-3 w-8 h-8 bg-white rounded-full flex justify-center items-center"
                  >
                    <span>{toBeRemoved.includes(index) ? <IoMdHeartEmpty size={20} /> : <IoMdHeart size={20} />}</span>
                  </button>
                )
              }
            >
              <PrimaryButton className=" bg-white w-[100px] sm:w-[130px] h-[45px] my-5 font-bold opacity-90">
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
