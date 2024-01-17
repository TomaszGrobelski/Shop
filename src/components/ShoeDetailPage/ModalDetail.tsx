<<<<<<< HEAD
import PrimaryButton from "../Buttons/PrimaryButton";
import { BsFillCheckCircleFill } from "react-icons/bs";
=======
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../Buttons/PrimaryButton";

interface ModalDetailProps {
  setModalVisible: (visible: boolean) => void;
}

function ModalDetail({ setModalVisible }: ModalDetailProps) {
  const navigate = useNavigate();
  const handleModal = () => {
    setModalVisible(false);
  };
  const bagList = JSON.parse(localStorage.getItem("bagItems") || "[]");
  const numberItemsBag = bagList.length || null;

  let productDetails = null;
  if (numberItemsBag > 0) {
    const lastProduct = bagList[numberItemsBag - 1];
    productDetails = (
      <div className="my-3 flex gap-2">
        <img
          className="w-[100px]"
          src={lastProduct.img}
          alt={lastProduct.name}
        />
        <div>
          <p>{lastProduct.name}</p>
          <p className="opacity-80">{lastProduct.gender}</p>
          <p className="opacity-80">Size {lastProduct.selectedSize}</p>
          <p>${lastProduct.price}</p>
        </div>
      </div>
    );
<<<<<<< HEAD
    console.log(lastProduct.gender);
=======
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
  }

  return (
    <div>
      <div className="fixed right-0 top-0 z-50 h-[250px] w-full bg-white md:w-[400px] ">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-3 font-bold">
              <BsFillCheckCircleFill className="text-green-600" />
              Added to Bag
            </h2>
            <AiOutlineClose
              size={22}
              onClick={handleModal}
              className="cursor-pointer"
            />
          </div>
          <div>{productDetails}</div>
          <div className="flex gap-4">
<<<<<<< HEAD
            <PrimaryButton onClick={() => navigate("/bag")} className="w-1/2 bg-white">
              View Bag <span>({numberItemsBag})</span>
            </PrimaryButton>
            <PrimaryButton onClick={() => navigate("/checkout")} className="w-1/2 bg-black text-white">
=======
            <PrimaryButton
              onClick={() => navigate("/bag")}
              className="w-1/2 bg-white">
              View Bag <span>({numberItemsBag})</span>
            </PrimaryButton>
            <PrimaryButton
              onClick={() => navigate("/checkout")}
              className="w-1/2 bg-black text-white">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
              Checkout{" "}
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div
        onClick={handleModal}
        className="fixed left-0 top-0 h-full w-full bg-gray-900 opacity-80"></div>
    </div>
  );
}

export default ModalDetail;
