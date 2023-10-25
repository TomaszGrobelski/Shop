import { AiOutlinePlusCircle } from "react-icons/ai";
import { SetStateAction, Dispatch } from "react";

type BoxInterestsProps = {
  interest: string;
  modalVisibility: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
};

function BoxInterests({ interest, modalVisibility, setModalVisibility }: BoxInterestsProps) {
  const modalClick = () => {
    setModalVisibility(!modalVisibility);
  };
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-5">
        <div className="flex  gap-3 justify-center items-center bg-gray-100 min-w-[130px] min-h-[170px]">
          <button onClick={modalClick} className="flex flex-col items-center gap-3 font-bold  hover:scale-110">
            <AiOutlinePlusCircle size={22} />
            <p>Add {interest}</p>
          </button>
        </div>
        Tu się ma wyświetlać box
      </div>
    </div>
  );
}

export default BoxInterests;
