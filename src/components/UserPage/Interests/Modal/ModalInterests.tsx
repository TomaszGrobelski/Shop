import { useEffect, useState } from 'react';

import { InterestData, ModalInterestsProps } from '../../../../types/UserPage/userPage.types';
import PrimaryButton from '../../../Buttons/PrimaryButton';
import sportsList from '../../listOfInterests/sportsList';
import CategoryDiv from './CategoryDiv';
import HeaderModal from './HeaderModal';
import { ModalBackGround, ModalBox, ModalContainer } from '../../../../styles/UserPage/ModalInterests.styles';
import SelectedDiv from './SelectedDiv';

function ModalInterests({ setModalVisibility }: ModalInterestsProps) {
  const [selectedList, setSelectedList] = useState<InterestData>(sportsList);
  const [currentCategory, setCurrentCategory] = useState<string>('Sports');

  const modalClick = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const selectedClick = () => {
    setModalVisibility(false);
  };

  return (
    <ModalContainer>
      <ModalBackGround onClick={modalClick} />
      <ModalBox>
        <div className='w-4/5'>
          <HeaderModal closeModal={modalClick} />
          <CategoryDiv
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            setSelectedList={setSelectedList}
          />
          <SelectedDiv selectedList={selectedList} />
          <div className='flex justify-end gap-2'>
            <PrimaryButton onClick={modalClick} className='h-12 w-24'>
              Cancel
            </PrimaryButton>
            <PrimaryButton onClick={selectedClick} className='h-12 w-20 bg-black text-white'>
              Save
            </PrimaryButton>
          </div>
        </div>
      </ModalBox>
    </ModalContainer>
  );
}

export default ModalInterests;
