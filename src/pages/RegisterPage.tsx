import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Label } from "../styles/LoginPage.styles";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode= error.code;
        const errorMessage= error.message;
        console.log(errorCode,errorMessage);
      });
  };

  const backToLoginClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center w-full">
      <form onSubmit={signUp} className="text-black flex flex-col">
        <h1>Register</h1>
        <Label type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Label
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="opacity-60">Password should be at least 6 characters</p>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={backToLoginClick}>Back to Log In</button>
    </div>
  );
}

export default RegisterPage;
