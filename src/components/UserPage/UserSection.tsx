import { useState } from 'react';

import { auth } from '../../config/firebase';
import ImgUser from './ImgUser';
import BoxInterests from './Interests/BoxInterests';
import Interests from './Interests/Interests';
import ModalInterests from './Interests/Modal/ModalInterests';
import { UserNameHeader } from '../../styles/UserPage/UserSection.styles';
import { UserBox } from '../../styles/UserPage/UserSection.styles';
import { UserSectione } from '../../styles/UserPage/UserSection.styles';

function UserSection() {
  const [interest, setInterest] = useState('Interests');
  const [modalVisibility, setModalVisibility] = useState(false);

  const user = auth.currentUser;
  const time = user?.metadata.creationTime?.slice(0, -12);
  const email = user?.email;
  const username = email?.split('@')[0];

  return (
    <UserSectione>
      <UserBox>
        <ImgUser />
        <div>
          <UserNameHeader>{username}</UserNameHeader>
          <p className=' font-bold text-gray-500'>{time ? `Nika Member Since ${time}` : 'You are not logged in'}</p>
        </div>
      </UserBox>
      <Interests setInterest={setInterest} />
      <p>Add your interests to shop a collection of products that are based on what you're into.</p>
      <div className='flex gap-4'>
        <BoxInterests setModalVisibility={setModalVisibility} modalVisibility={modalVisibility} interest={interest} />
        {modalVisibility && <ModalInterests setModalVisibility={setModalVisibility} />}
      </div>
    </UserSectione>
  );
}

export default UserSection;
