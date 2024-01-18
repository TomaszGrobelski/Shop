import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { ChangeEvent, useEffect, useState } from 'react';

import app from '../../config/firebase';
import { ImageUser } from '../../styles/UserPage/ImgUser.styles';
import { ImageUserInput } from '../../styles/UserPage/ImgUser.styles';
import { ImageUserBox } from '../../styles/UserPage/ImgUser.styles';

function ImgUser() {
  const [image, setImage] = useState<string | null>(null);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const user = auth.currentUser;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && user) {
      const file = e.target.files[0];
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension !== 'jpg') {
        alert('Please select a .jpg file');
        return;
      }
      const imageName = `profile_${user.uid}.${extension}`;
      const storageRef = ref(storage, `imagesUser/${imageName}`);
      uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then((url) => {
          setImage(url);
        });
      });
    }
  };

  useEffect(() => {
    if (user) {
      const imageName = `profile_${user.uid}.jpg`;
      const storageRef = ref(storage, `imagesUser/${imageName}`);
      getDownloadURL(storageRef).then((url) => {
        setImage(url);
      });
    }
  }, [storage, user]);

  return (
    <ImageUserBox>
      <label htmlFor='upload'>{image ? <ImageUser src={image} alt='Profile image' /> : null}</label>
      <ImageUserInput id='upload' type='file' onChange={handleImageChange} />
    </ImageUserBox>
  );
}

export default ImgUser;
