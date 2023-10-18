import { Label } from "../styles/LoginPage.styles";
import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        // Pobierz token dostępu za pomocą funkcji getIdToken
        useCredential.user.getIdToken().then((userToken) => {
          localStorage.setItem("user", userToken);
          navigate("/home");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <div className="flex justify-center w-full">
      <form onSubmit={signIn} className="text-black flex flex-col items-center">
        <h1>Log In</h1>
        <Label
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={handleRegisterClick}>Register Now</button>
    </div>
  );
}

export default LoginPage;
