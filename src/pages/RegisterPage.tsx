import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Label } from "../styles/LoginPage.styles";
import EmailLabel from "../components/LoginRegister/EmailLabel";
import PasswordLabel from "../components/LoginRegister/PasswordLabel";
import Formh1 from "../components/LoginRegister/Formh1";
import ButtonCustom from "../components/Buttons/ButtonCustom";
import LoginRegisterImg from "../images/LoginRegister/LoginRegisterImg.jpg";

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
        console.log(errorCode, errorMessage);
      });
  };

  const backToLoginClick = () => {
    navigate("/nika/");
  };
  return (
    <div>
      <Formh1 onSubmit={signUp} h1="Register">
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
        <p className="opacity-60 my-2">Password should be at least 6 characters</p>
        <ButtonCustom type="submit" className="w-28 h-12 my-2 hover:bg-purple-500 font-bold">
          Sign up
        </ButtonCustom>
        <button type="button" onClick={backToLoginClick} className="mt-6 ">
          Back to Login
        </button>
      </Formh1>
      <img className="absolute top-0 -z-10 h-full w-full object-cover" src={LoginRegisterImg} alt="Login image" />
    </div>
  );
}

export default RegisterPage;
