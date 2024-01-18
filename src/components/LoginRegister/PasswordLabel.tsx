import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';

import { PasswordLabelProps } from '../../types/Login&Register/login&register.types';
import { PasswordLabelBox, PasswordLabelButton, PasswordLabelContainer } from '../../styles/LoginRegister/PasswordLabel.styles';

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
    <PasswordLabelContainer>
      <PasswordLabelBox>
        <FaLock />
      </PasswordLabelBox>
      {updatedChild}
      <PasswordLabelButton type='button' onClick={toggleVisibility}>
        {inputType === password ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
      </PasswordLabelButton>
    </PasswordLabelContainer>
  );
}

export default PasswordLabel;
