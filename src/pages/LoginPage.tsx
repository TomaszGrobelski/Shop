import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { IoCreate } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../components/Buttons/PrimaryButton";
import EmailLabel from "../components/LoginRegister/EmailLabel";
import PasswordLabel from "../components/LoginRegister/PasswordLabel";
<<<<<<< HEAD
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Formh1 from "../components/LoginRegister/Formh1";
import { IoCreate } from "react-icons/io5";
=======
import WrapperWithFormAndTitle from "../components/LoginRegister/WrapperWithFormAndTitle";
import { auth } from "../config/firebase";
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import LoginRegisterImg from "../images/LoginRegister/LoginRegisterImg.jpg";
import { Label } from "../styles/LoginPage.styles";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        useCredential.user.getIdToken().then((userToken) => {
          localStorage.setItem("user", userToken);
          navigate("/home");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error Code: ${errorCode}\nError Message: ${errorMessage}`);
      });
  };

  const handleRegisterClick = () => {
    navigate("/registration");
  };
  return (
    <div className="flex items-center justify-center ">
      <WrapperWithFormAndTitle onSubmit={signIn} h1="Login">
        <EmailLabel>
          <Label
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </EmailLabel>
        <PasswordLabel>
          <Label
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PasswordLabel>
        <button
          type="button"
          onClick={handleRegisterClick}
          className="mb-5 mt-1 flex items-center gap-1 self-end">
          Register Now <IoCreate />
        </button>
<<<<<<< HEAD
        <PrimaryButton type="submit" className="w-28 h-12 hover:bg-purple-500 font-bold">
=======
        <PrimaryButton
          type="submit"
          className="h-12 w-28 font-bold hover:bg-purple-500">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
          Login
        </PrimaryButton>
        <div className="mt-8">
          <h2>Demo Account:</h2>
          <div className="mt-4">
            Email: <span className="font-bold">bleniog@wp.pl</span>{" "}
          </div>
          <div>
            Password: <span className="font-bold">tomasz</span>
          </div>
        </div>
<<<<<<< HEAD
      </Formh1>
      <img
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
=======
      </WrapperWithFormAndTitle>
      <img
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        src={LoginRegisterImg}
        alt="Login image"
      />
    </div>
  );
}

export default LoginPage;
