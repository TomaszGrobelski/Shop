import { useEffect, useState } from "react";
import ButtonCustom from "../../../Buttons/ButtonCustom";
import { SetStateAction, Dispatch } from "react";
import sportsList from "../../listOfInterests/sportsList";
import HeaderModal from "./HeaderModal";
import CategoryDiv from "./CategoryDiv";
import SelectedDiv from "./SelectedDiv";

interface ModalInterestsProps {
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

type InterestDataItem = { name: string };
type InterestData = InterestDataItem[];

function ModalInterests({ setModalVisibility }: ModalInterestsProps) {
  const [selectedList, setSelectedList] = useState<InterestData>(sportsList);
  const [currentCategory, setCurrentCategory] = useState<string>("Sports");


  const modalClick = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const selectedClick = () => {
    setModalVisibility(false);
  };

  return (
    <div className="absolute z-50 flex items-center justify-center inset-0">
      <div onClick={modalClick} className="fixed bg-gray-200 opacity-80 inset-0" />
      <div className="fixed w-4/5 h-4/5 bg-white flex items-center justify-center rounded-3xl max-w-[650px]">
        <div className="w-4/5">
          <HeaderModal closeModal={modalClick} />
          <CategoryDiv currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} setSelectedList={setSelectedList} />
          <SelectedDiv selectedList={selectedList} />
          <div className="flex justify-end gap-2">
            <ButtonCustom onClick={modalClick} className="h-12 w-24">
              Cancel
            </ButtonCustom>
            <ButtonCustom onClick={selectedClick} className="h-12 w-20 bg-black text-white">
              Save
            </ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInterests;
