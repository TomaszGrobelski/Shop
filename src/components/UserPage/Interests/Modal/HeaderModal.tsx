import { IoIosCloseCircle } from 'react-icons/io';

import { HeaderModalProps } from '../../../../types/UserPage/userPage.types';

function HeaderModal({ closeModal }: HeaderModalProps) {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='my-4 text-[24px]'>Select Your Interests</h2>
      <button onClick={closeModal} className=''>
        <IoIosCloseCircle
          size={30}
          className=' text-gray-400 hover:text-gray-500'
        />
      </button>
    </div>
  );
}

export default HeaderModal;
