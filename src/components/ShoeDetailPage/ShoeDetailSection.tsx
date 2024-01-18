import { useContext, useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { FavoritiestContext } from '../../context/context';
import { Shoe } from '../../types/ShoesPage/interfaceShoe';
import PrimaryButton from '../Buttons/PrimaryButton';
import shoesList from '../ShoesPage/Products/shoesList';
import ModalDetail from './ModalDetail';
import Shipping from './Shipping';
import { DiscountCodeInfo } from '../../styles/ShoeDetailPage/ShoeDetailSection.styles';
import { ProductOldPrice } from '../../styles/ShoeDetailPage/ShoeDetailSection.styles';
import { ProductHeader } from '../../styles/ShoeDetailPage/ShoeDetailSection.styles';
import { ProductInfoContainer } from '../../styles/ShoeDetailPage/ShoeDetailSection.styles';
import { ShoeImage } from '../../styles/ShoeDetailPage/ShoeDetailSection.styles';
import { ShoeDetailContainer } from '../../styles/ShoeDetailPage/ShoeDetailSection.styles';
import SizeShoeDetail from './SizeShoeDetail';

function ShoeDetailSection() {
  const { name } = useParams();
  const shoeDetails = shoesList.find((shoe) => shoe.name === name);
  const { favorities, setFavorities } = useContext(FavoritiestContext);
  const [selectedSize, setSelectedSize] = useState<number | null | false>(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (!shoeDetails) {
    return (
      <div className='flex h-[400px] w-full items-center justify-center gap-2'>
        But o nazwie <span className='font-bold'>{name}</span> nie jest już dostępny na sprzedaż
      </div>
    );
  }

  const isFavorite = favorities.some((shoe: Shoe) => shoe.name === shoeDetails.name);

  const favoriteClick = () => {
    if (isFavorite) {
      setFavorities((prevFavorites: Shoe[]) => prevFavorites.filter((shoe: Shoe) => shoe.name !== shoeDetails.name));
    } else {
      setFavorities((prevFavorites: Shoe[]) => [...prevFavorites, shoeDetails]);
    }
  };

  const addToBagClick = () => {
    if (selectedSize === null || selectedSize === false) {
      setSelectedSize(false);
      return;
    }
    const shoeWithSelectedSize = {
      ...shoeDetails,
      selectedSize: selectedSize,
      id: uuidv4(),
    };
    const currentBag = JSON.parse(localStorage.getItem('bagItems') || '[]');
    currentBag.push(shoeWithSelectedSize);

    localStorage.setItem('bagItems', JSON.stringify(currentBag));
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 4000);
  };

  return (
    <ShoeDetailContainer>
      <ShoeImage src={shoeDetails.img} alt={shoeDetails.name} />
      <ProductInfoContainer>
        <ProductHeader>{shoeDetails.name}</ProductHeader>
        <h2>{shoeDetails.gender}</h2>
        <div className='my-5 flex gap-4'>
          <p>${shoeDetails.price}</p>
          {shoeDetails.oldPrice && <ProductOldPrice>${shoeDetails.oldPrice}</ProductOldPrice>}
        </div>
        <DiscountCodeInfo>
          Member Exclusive: use code MEMBER20 for an extra 20% off select styles. Log in or sign up for free to save.
        </DiscountCodeInfo>
        <SizeShoeDetail selectedSize={selectedSize} shoeDetails={shoeDetails} onSizeSelect={setSelectedSize} />
        <div className='flex flex-col gap-5'>
          <PrimaryButton onClick={addToBagClick} className='bg-black text-white'>
            Add to Bad
          </PrimaryButton>
          <PrimaryButton onClick={favoriteClick} className='flex items-center justify-center'>
            <span>Favorite</span>
            {isFavorite ? <IoMdHeart size={20} className='ml-4' /> : <IoMdHeartEmpty size={20} className='ml-4' />}
          </PrimaryButton>
        </div>
        <Shipping />
      </ProductInfoContainer>
      {modalVisible && <ModalDetail setModalVisible={setModalVisible} />}
    </ShoeDetailContainer>
  );
}

export default ShoeDetailSection;
