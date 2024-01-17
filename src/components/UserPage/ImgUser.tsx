import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, useEffect, useState } from "react";

import app from "../../config/firebase";

function ImgUser() {
  const [image, setImage] = useState<string | null>(null);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const user = auth.currentUser;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && user) {
      const file = e.target.files[0];
      const extension = file.name.split(".").pop()?.toLowerCase();
      if (extension !== "jpg") {
        alert("Please select a .jpg file");
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
    <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-300">
      <label htmlFor="upload">
        {image ? (
          <img
            src={image}
            alt="Profile image"
            className="h-24 w-24 rounded-full"
          />
        ) : null}
      </label>
      <input
        id="upload"
        type="file"
        className="absolute -left-10 -top-10 z-30 h-[200px] w-[200px] cursor-pointer opacity-0"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImgUser;
