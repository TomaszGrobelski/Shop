import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

interface LogOutProps {
  title?: string;
}

function LogOut({ title }: LogOutProps) {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const navigate = useNavigate();
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
        localStorage.removeItem("user");
        navigate("/Shop/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          {/* <p>{`Signed In as ${authUser.email}`}</p> */}
          <button className="flex gap-4 items-center" onClick={userSignOut}>
            <BiLogOut size={25} />
            {title}
          </button>
        </>
      ) : (
        <p>
          <BiLogOut size={25} />
        </p>
      )}
    </div>
  );
}

export default LogOut;
