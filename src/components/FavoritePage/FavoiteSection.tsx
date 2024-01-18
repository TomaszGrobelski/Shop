import { useContext, useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

import { FavoritiestContext } from '../../context/context';
import PrimaryButton from '../Buttons/PrimaryButton';
import ShoeCard from '../ShoesPage/Products/ShoeCard';
import {
  EmptyFavoritesMessage,
  EmptyMessageBox,
  FavoriteToggleButton,
  FavoritesContainer,
  FavoritesTitle,
  HeaderContainer,
  ShoeCardsContainer,
} from '../../styles/FavoritePage/FavoiteSection.styles';

function FavoiteSection() {
  const { favorities, setFavorities } = useContext(FavoritiestContext);

  const [isEdit, setIsEdit] = useState(false);
  const [toBeRemoved, setToBeRemoved] = useState<number[]>([]);

  const editClick = () => {
    if (isEdit) {
      const newFavorites = favorities.filter((_, index) => !toBeRemoved.includes(index));
      setFavorities(newFavorites);
      setToBeRemoved([]);
    }
    setIsEdit(!isEdit);
  };

  const toggleFavorite = (index: number) => {
    setToBeRemoved((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <FavoritesContainer>
      <HeaderContainer>
        <FavoritesTitle>{isEdit ? 'Manage Your Favorites' : 'Favorites'}</FavoritesTitle>
        {favorities.length !== 0 && (
          <PrimaryButton
            onClick={editClick}
            className={`${isEdit ? 'bg-black text-white' : 'bg-white'} h-[50px] w-[90px] text-[18px] hover:opacity-75`}>
            {isEdit ? 'Done' : 'Edit'}
          </PrimaryButton>
        )}
      </HeaderContainer>
      {favorities.length === 0 ? (
        <EmptyMessageBox>
          <EmptyFavoritesMessage>Items added to your Favorites will be saved here.</EmptyFavoritesMessage>
        </EmptyMessageBox>
      ) : (
        <ShoeCardsContainer>
          {favorities.map((shoe, index) => (
            <ShoeCard
              shoe={shoe}
              key={index}
              favorite={
                isEdit && (
                  <FavoriteToggleButton onClick={() => toggleFavorite(index)}>
                    <span>{toBeRemoved.includes(index) ? <IoMdHeartEmpty size={20} /> : <IoMdHeart size={20} />}</span>
                  </FavoriteToggleButton>
                )
              }>
              <PrimaryButton className=' my-5 h-[45px] w-[100px] bg-white font-bold opacity-90 sm:w-[130px]'>
                Select Size
              </PrimaryButton>
            </ShoeCard>
          ))}
        </ShoeCardsContainer>
      )}
    </FavoritesContainer>
  );
}

export default FavoiteSection;
