import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../config/firebase';

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
        localStorage.removeItem('user');
        navigate('/nika/');
      })
      .catch((error) => alert(`Error: ${error}`));
  };
  return (
    <div>
      {authUser ? (
        <>
          <button className='flex items-center gap-4' onClick={userSignOut}>
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
