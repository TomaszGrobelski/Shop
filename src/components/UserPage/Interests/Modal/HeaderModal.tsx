import { IoIosCloseCircle } from "react-icons/io";

interface HeaderModalProps{
  closeModal: ()=>void;
}

function HeaderModal({closeModal}:HeaderModalProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-[24px] my-4">Select Your Interests</h2>
      <button onClick={closeModal} className="">
        <IoIosCloseCircle size={30} className=" text-gray-400 hover:text-gray-500" />
      </button>
    </div>
  );
}

export default HeaderModal;
