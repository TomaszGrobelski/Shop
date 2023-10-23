import { auth } from "../../config/firebase";
import Interests from "./Interests/Interests";
import BoxInterests from "./Interests/BoxInterests";
import { useState } from "react";
import ModalInterests from "./Interests/ModalInterests";

function UserSection() {
  const [interest, setInterest] = useState("Interests");
  const [modalVisibility, setModalVisibility] = useState(false);

  const user = auth.currentUser;
  const time = user?.metadata.creationTime?.slice(0, -12);
  const email = user?.email;
  const username = email?.split("@")[0];

  return (
    <div className="p-10 flex flex-col gap-16">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
        <div>
          <h1 className="text-[32px] font-bold">{username}</h1>
          <p className=" text-gray-500 font-bold">{time ? `Nika Member Since ${time}` : "You are not logged in"}</p>
        </div>
      </div>
      <Interests setInterest={setInterest} />
      <BoxInterests setModalVisibility={setModalVisibility} modalVisibility={modalVisibility} interest={interest} />
      {modalVisibility && <ModalInterests setModalVisibility={setModalVisibility} />}
    </div>
  );
}

export default UserSection;
