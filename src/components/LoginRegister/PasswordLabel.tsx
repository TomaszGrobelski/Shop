import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';

interface PasswordLabelProps {
  children: React.ReactElement;
}

function PasswordLabel({ children }: PasswordLabelProps) {
  const password = 'password';
  const [inputType, setInputType] = useState(password);

  const toggleVisibility = () => {
    setInputType((prevType) => (prevType === password ? 'text' : password));
  };

  const updatedChild = React.cloneElement(children, {
    type: inputType,
  });

  return (
    <div className='my-2 flex w-full items-center border-[1px] '>
      <div className='flex h-8 w-8 items-center justify-center bg-gray-100'>
        <FaLock />
      </div>
      {updatedChild}
      <button type='button' onClick={toggleVisibility} className='pr-2'>
        {inputType === password ? (
          <AiFillEye size={25} />
        ) : (
          <AiFillEyeInvisible size={25} />
        )}
      </button>
    </div>
  );
}

export default PasswordLabel;
