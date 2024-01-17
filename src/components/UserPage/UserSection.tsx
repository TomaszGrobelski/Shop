import { useState } from 'react';

import { auth } from '../../config/firebase';
import ImgUser from './ImgUser';
import BoxInterests from './Interests/BoxInterests';
import Interests from './Interests/Interests';
import ModalInterests from './Interests/Modal/ModalInterests';

function UserSection() {
  const [interest, setInterest] = useState('Interests');
  const [modalVisibility, setModalVisibility] = useState(false);

  const user = auth.currentUser;
  const time = user?.metadata.creationTime?.slice(0, -12);
  const email = user?.email;
  const username = email?.split('@')[0];

  return (
    <div className='mt-20 flex flex-col gap-6 p-10'>
      <div className='flex items-center gap-5'>
        <ImgUser />
        <div>
          <h1 className='text-[32px] font-bold'>{username}</h1>
          <p className=' font-bold text-gray-500'>
            {time ? `Nika Member Since ${time}` : 'You are not logged in'}
          </p>
        </div>
      </div>
      <Interests setInterest={setInterest} />
      <p className=' '>
        Add your interests to shop a collection of products that are based on
        what you're into.
      </p>
      <div className='flex gap-4'>
        <BoxInterests
          setModalVisibility={setModalVisibility}
          modalVisibility={modalVisibility}
          interest={interest}
        />
        {modalVisibility && (
          <ModalInterests setModalVisibility={setModalVisibility} />
        )}
      </div>
    </div>
  );
}

export default UserSection;
