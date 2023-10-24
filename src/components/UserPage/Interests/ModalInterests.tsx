import { useEffect, useState } from "react";
import ButtonCustom from "../../Buttons/ButtonCustom";
import { SetStateAction, Dispatch } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import athletesList from "../listOfInterests/athletesList";
import citiesList from "../listOfInterests/citiestList";
import productsList from "../listOfInterests/productsList";
import sportsList from "../listOfInterests/sportsList";
import teamsList from "../listOfInterests/teamsList";

interface ModalInterestsProps {
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}
type InterestDataItem = { name: string };
type InterestData = InterestDataItem[] | { [key: string]: InterestDataItem[] };

function ModalInterests({ setModalVisibility }: ModalInterestsProps) {
  const [selectedList, setSelectedList] = useState<InterestData>([]);

  const interestsList = [
    { name: "Athletes", data: athletesList },
    { name: "Cities", data: citiesList },
    { name: "Products", data: productsList },
    { name: "Sports", data: sportsList },
    { name: "Teams", data: teamsList },
  ];

  const modalClick = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="absolute z-50 flex items-center justify-center inset-0 ">
      <div onClick={modalClick} className="fixed bg-gray-200 opacity-80 inset-0" />
      <div className="fixed w-[300px] h-4/5 bg-white flex items-center justify-center rounded-3xl">
        <div className="w-4/5">
          <div className="flex justify-between items-center">
            <h2>Select Your Interests</h2>
            <button onClick={modalClick} className="">
              <IoIosCloseCircle size={30} className=" text-gray-400 hover:text-gray-500" />
            </button>
          </div>
          <div>
            <ul className="flex gap-3">
              {interestsList.map((interest, index) => (
                <li key={index}>
                  <button onClick={() => setSelectedList(interest.data)}>{interest.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {Array.isArray(selectedList)
                ? selectedList.map((item, index) => <li key={index}>{item.name}</li>)
                : Object.values(selectedList)
                    .flat()
                    .map((item, index) => <li key={index}>{item.name}</li>)}
            </ul>
          </div>
          <div className="flex justify-end gap-2">
            <ButtonCustom onClick={modalClick} className="h-12 w-24">
              Cancel
            </ButtonCustom>
            <ButtonCustom className="h-12 w-20 bg-black text-white">Save</ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInterests;
