import { useState, useEffect, ChangeEvent } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../config/firebase";
import { getAuth } from "firebase/auth";

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
    <div className="relative h-24 w-24 bg-gray-300 rounded-full overflow-hidden">
      <label htmlFor="upload">
        {image ? <img src={image} alt="Profile image" className="h-24 w-24 rounded-full" /> : null}
      </label>
      <input
        id="upload"
        type="file"
        className="absolute -top-10 -left-10 w-[200px] h-[200px] z-30 opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImgUser;
