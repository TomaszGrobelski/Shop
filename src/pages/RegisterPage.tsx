import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Label } from "../styles/LoginPage.styles";
import EmailLabel from "../components/LoginRegister/EmailLabel";
import PasswordLabel from "../components/LoginRegister/PasswordLabel";
import Formh1 from "../components/LoginRegister/Formh1";
import ButtonCustom from "../components/Buttons/ButtonCustom";


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const backToLoginClick = () => {
    navigate("/login/");
  };
  return (
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
      <ButtonCustom type="submit" className="w-28 h-12 my-2">Sign up</ButtonCustom>
      <button type="button" onClick={backToLoginClick} className="mt-6">
        Back to Login
      </button>
    </Formh1>
  );
}

export default RegisterPage;
