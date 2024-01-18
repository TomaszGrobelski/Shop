import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from '../components/Buttons/PrimaryButton';
import EmailLabel from '../components/LoginRegister/EmailLabel';
import PasswordLabel from '../components/LoginRegister/PasswordLabel';
import WrapperWithFormAndTitle from '../components/LoginRegister/WrapperWithFormAndTitle';
import { auth } from '../config/firebase';
import LoginRegisterImg from '../images/LoginRegister/LoginRegisterImg.jpg';
import { Label } from '../styles/LoginPage.styles';
import { BackGroundImage, BackToLoginButton, IncorrectPasswordMessage } from '../styles/LoginRegister/RegisterPage.styles';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/nika/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error Code: ${errorCode}\nError Message: ${errorMessage}`);
      });
  };

  const backToLoginClick = () => {
    navigate('/nika/');
  };
  return (
    <div>
      <WrapperWithFormAndTitle onSubmit={signUp} h1='Register'>
        <EmailLabel>
          <Label
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </EmailLabel>
        <PasswordLabel>
          <Label
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PasswordLabel>
        <IncorrectPasswordMessage>Password should be at least 6 characters</IncorrectPasswordMessage>
        <PrimaryButton type='submit' className='my-2 h-12 w-28 font-bold hover:bg-purple-500'>
          Sign up
        </PrimaryButton>
        <BackToLoginButton type='button' onClick={backToLoginClick}>
          Back to Login
        </BackToLoginButton>
      </WrapperWithFormAndTitle>
      <BackGroundImage src={LoginRegisterImg} alt='Login image' />
    </div>
  );
}

export default RegisterPage;
