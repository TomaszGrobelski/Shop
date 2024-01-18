import { IoIosCloseCircle } from 'react-icons/io';

import { HeaderModalProps } from '../../../../types/UserPage/userPage.types';
import { ModalBox, ModalHeader } from '../../../../styles/UserPage/HeaderModal.styles';

function HeaderModal({ closeModal }: HeaderModalProps) {
  return (
    <ModalBox>
      <ModalHeader>Select Your Interests</ModalHeader>
      <button onClick={closeModal}>
        <IoIosCloseCircle size={30} className=' text-gray-400 hover:text-gray-500' />
      </button>
    </ModalBox>
  );
}

export default HeaderModal;
