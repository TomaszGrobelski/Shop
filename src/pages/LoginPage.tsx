import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { IoCreate } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from '../components/Buttons/PrimaryButton';
import EmailLabel from '../components/LoginRegister/EmailLabel';
import PasswordLabel from '../components/LoginRegister/PasswordLabel';
import WrapperWithFormAndTitle from '../components/LoginRegister/WrapperWithFormAndTitle';
import { auth } from '../config/firebase';
import LoginRegisterImg from '../images/LoginRegister/LoginRegisterImg.jpg';
import { Label } from '../styles/LoginPage.styles';
import {
  BackGroundImage,
  DemoBox,
  DemoDetails,
  DemoEmail,
  DemoHeader,
  DemoPassword,
  LoginPageContainer,
  RegisterButton,
} from '../styles/LoginRegister/LoginPage.styles';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        useCredential.user.getIdToken().then((userToken) => {
          localStorage.setItem('user', userToken);
          navigate('/home');
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error Code: ${errorCode}\nError Message: ${errorMessage}`);
      });
  };

  const handleRegisterClick = () => {
    navigate('/registration');
  };
  return (
    <LoginPageContainer>
      <WrapperWithFormAndTitle onSubmit={signIn} h1='Login'>
        <EmailLabel>
          <Label
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />
        </EmailLabel>
        <PasswordLabel>
          <Label
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PasswordLabel>
        <RegisterButton type='button' onClick={handleRegisterClick}>
          Register Now <IoCreate />
        </RegisterButton>
        <PrimaryButton type='submit' className='h-12 w-28 font-bold hover:bg-purple-700 hover:text-white'>
          Login
        </PrimaryButton>
        <DemoBox>
          <DemoHeader>Demo Account:</DemoHeader>
          <DemoDetails>
            Email: <DemoEmail>bleniog@wp.pl</DemoEmail>{' '}
          </DemoDetails>
          <div>
            Password: <DemoPassword>tomasz</DemoPassword>
          </div>
        </DemoBox>
      </WrapperWithFormAndTitle>
      <BackGroundImage src={LoginRegisterImg} alt='Login image' />
    </LoginPageContainer>
  );
}

export default LoginPage;
