import { useEffect } from "react";
import ButtonCustom from "../../Buttons/ButtonCustom";
import { SetStateAction, Dispatch } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalInterestsProps {
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

function ModalInterests({ setModalVisibility }: ModalInterestsProps) {
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
      <div className="fixed w-4/5 h-4/5 bg-white flex items-center justify-center rounded-3xl">
        <div className="w-4/5">
          <div className="flex justify-between items-center">
            <h2>Select Your Interests</h2>
            <button onClick={modalClick} className="">
              <IoIosCloseCircle size={30} className=" text-gray-400 hover:text-gray-500" />
            </button>
          </div>
          <div></div>
          <div></div>
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
