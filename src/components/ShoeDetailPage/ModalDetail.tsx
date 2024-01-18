import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { ModalDetailProps } from '../../types/ShoeDetailPage/shoeDetailPage.types';
import PrimaryButton from '../Buttons/PrimaryButton';
import {
  ButtonsBox,
  ModalBackground,
  ModalBox,
  ModalContentContainer,
  ModalHeader,
  ProductDetails,
  ProductGender,
  ProductImage,
  ProductSelectedSize,
} from '../../styles/ShoeDetailPage/ModalDetail.styles';

function ModalDetail({ setModalVisible }: ModalDetailProps) {
  const navigate = useNavigate();
  const handleModal = () => {
    setModalVisible(false);
  };
  const bagList = JSON.parse(localStorage.getItem('bagItems') || '[]');
  const numberItemsBag = bagList.length || null;

  let productDetails = null;
  if (numberItemsBag > 0) {
    const lastProduct = bagList[numberItemsBag - 1];
    productDetails = (
      <ProductDetails>
        <ProductImage src={lastProduct.img} alt={lastProduct.name} />
        <div>
          <p>{lastProduct.name}</p>
          <ProductGender>{lastProduct.gender}</ProductGender>
          <ProductSelectedSize>Size {lastProduct.selectedSize}</ProductSelectedSize>
          <p>${lastProduct.price}</p>
        </div>
      </ProductDetails>
    );
  }

  return (
    <div>
      <ModalContentContainer>
        <div className='p-4'>
          <ModalBox>
            <ModalHeader>
              <BsFillCheckCircleFill className='text-green-600' />
              Added to Bag
            </ModalHeader>
            <AiOutlineClose size={22} onClick={handleModal} className='cursor-pointer' />
          </ModalBox>
          <div>{productDetails}</div>
          <ButtonsBox>
            <PrimaryButton onClick={() => navigate('/bag')} className='w-1/2 bg-white'>
              View Bag <span>({numberItemsBag})</span>
            </PrimaryButton>
            <PrimaryButton onClick={() => navigate('/checkout')} className='w-1/2 bg-black text-white'>
              Checkout{' '}
            </PrimaryButton>
          </ButtonsBox>
        </div>
      </ModalContentContainer>
      <ModalBackground onClick={handleModal}></ModalBackground>
    </div>
  );
}

export default ModalDetail;
