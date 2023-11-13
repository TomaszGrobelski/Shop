import { Dispatch, SetStateAction } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

type BoxInterestsProps = {
  interest: string;
  modalVisibility: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
};

function BoxInterests({
  interest,
  modalVisibility,
  setModalVisibility,
}: BoxInterestsProps) {
  const modalClick = () => {
    setModalVisibility(!modalVisibility);
  };
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-5">
        <div className="flex  min-h-[170px] min-w-[130px] items-center justify-center gap-3 bg-gray-100">
          <button
            onClick={modalClick}
            className="flex flex-col items-center gap-3 font-bold  hover:scale-110">
            <AiOutlinePlusCircle size={22} />
            <p>Add {interest}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxInterests;
