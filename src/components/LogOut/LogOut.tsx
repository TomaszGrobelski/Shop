import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

function LogOut() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const navigate= useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out succes");
        localStorage.removeItem('user')
        navigate('/')
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}

export default LogOut;
