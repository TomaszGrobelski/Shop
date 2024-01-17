import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../components/Buttons/PrimaryButton";
import EmailLabel from "../components/LoginRegister/EmailLabel";
import PasswordLabel from "../components/LoginRegister/PasswordLabel";
<<<<<<< HEAD
import Formh1 from "../components/LoginRegister/Formh1";
import PrimaryButton from "../components/Buttons/PrimaryButton";
=======
import WrapperWithFormAndTitle from "../components/LoginRegister/WrapperWithFormAndTitle";
import { auth } from "../config/firebase";
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import LoginRegisterImg from "../images/LoginRegister/LoginRegisterImg.jpg";
import { Label } from "../styles/LoginPage.styles";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/nika/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error Code: ${errorCode}\nError Message: ${errorMessage}`);
      });
  };

  const backToLoginClick = () => {
    navigate("/nika/");
  };
  return (
    <div>
      <WrapperWithFormAndTitle onSubmit={signUp} h1="Register">
        <EmailLabel>
          <Label
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </EmailLabel>
        <PasswordLabel>
          <Label
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PasswordLabel>
<<<<<<< HEAD
        <p className="opacity-60 my-2">Password should be at least 6 characters</p>
        <PrimaryButton type="submit" className="w-28 h-12 my-2 hover:bg-purple-500 font-bold">
=======
        <p className="my-2 opacity-60">
          Password should be at least 6 characters
        </p>
        <PrimaryButton
          type="submit"
          className="my-2 h-12 w-28 font-bold hover:bg-purple-500">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
          Sign up
        </PrimaryButton>
        <button type="button" onClick={backToLoginClick} className="mt-6 ">
          Back to Login
        </button>
      </WrapperWithFormAndTitle>
      <img
        className="absolute top-0 -z-10 h-full w-full object-cover"
        src={LoginRegisterImg}
        alt="Login image"
      />
    </div>
  );
}

export default RegisterPage;
