import PrimaryButton from "../Buttons/PrimaryButton";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
      <div className="flex gap-2 my-3">
        <img className="w-[100px]" src={lastProduct.img} alt={lastProduct.name} />
        <div>
          <p>{lastProduct.name}</p>
          <p className="opacity-80">{lastProduct.gender}</p>
          <p className="opacity-80">Size {lastProduct.selectedSize}</p>
          <p>${lastProduct.price}</p>
        </div>
      </div>
    );
    console.log(lastProduct.gender);
  }

  return (
    <div>
      <div className="fixed right-0 top-0 w-full h-[250px] bg-white z-50 md:w-[400px] ">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="flex gap-3 items-center font-bold">
              <BsFillCheckCircleFill className="text-green-600" />
              Added to Bag
            </h2>
            <AiOutlineClose size={22} onClick={handleModal} className="cursor-pointer" />
          </div>
          <div>{productDetails}</div>
          <div className="flex gap-4">
            <PrimaryButton onClick={() => navigate("/bag")} className="w-1/2 bg-white">
              View Bag <span>({numberItemsBag})</span>
            </PrimaryButton>
            <PrimaryButton onClick={() => navigate("/checkout")} className="w-1/2 bg-black text-white">
              Checkout{" "}
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div onClick={handleModal} className="fixed left-0 top-0 w-full h-full bg-gray-900 opacity-80"></div>
    </div>
  );
}

export default ModalDetail;
