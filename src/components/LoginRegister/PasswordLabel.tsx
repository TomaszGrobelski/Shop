import { FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import React, {useState} from 'react'

interface PasswordLabelProps {
  children: React.ReactElement;
}

function PasswordLabel({ children }: PasswordLabelProps) {
  const [inputType, setInputType]= useState("password")

  const toggleVisibility = () => {
    setInputType(prevType => prevType === "password" ? "text" : "password");
  };

  const updatedChild = React.cloneElement(children, {
    type: inputType
  });

  return (
    <div className="flex items-center w-full border-[1px] my-2 ">
      <div className="flex justify-center items-center bg-gray-100 h-8 w-8">
        <FaLock />
      </div>
      {updatedChild}
      <button type="button" onClick={toggleVisibility} className="pr-2">
        {inputType==="password"?<AiFillEye size={25} />:<AiFillEyeInvisible size={25} />}
      </button>
    </div>
  );
}

export default PasswordLabel;
